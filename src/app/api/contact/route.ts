import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const ALLOWED_HOSTS = new Set(["www.ambroise-boutrin.fr", "ambroise-boutrin.fr", "localhost", "127.0.0.1"]);
const MIN_FILL_DELAY_MS = 3000;

// Origin absente : on laisse passer (certains clients ne l'envoient pas).
// Origin présente : uniquement le domaine, les previews Vercel et le local.
const isAllowedOrigin = (origin: string | null) => {
    if (!origin) return true;
    try {
        const { hostname } = new URL(origin);
        return ALLOWED_HOSTS.has(hostname) || hostname.endsWith(".vercel.app");
    } catch {
        return false;
    }
};

// Limite de débit : RATE_LIMIT_MAX envois par IP sur une fenêtre fixe de RATE_LIMIT_WINDOW_MS.
// Stockage en mémoire, donc par instance serverless : chaque instance (et chaque démarrage à froid)
// a son propre compteur. C'est une protection « meilleur effort », pas une garantie globale.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ENTRIES = 10_000;
const rateLimitHits = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: NextRequest) => {
    const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    return forwarded || request.headers.get("x-real-ip")?.trim() || "unknown";
};

const pruneExpired = (now: number) => {
    for (const [ip, entry] of rateLimitHits) {
        if (entry.resetAt <= now) rateLimitHits.delete(ip);
    }
};

// Retourne true si la requête est autorisée (et la comptabilise), false si la limite est atteinte.
const consumeRateLimit = (ip: string) => {
    const now = Date.now();
    pruneExpired(now);

    const entry = rateLimitHits.get(ip);
    if (!entry) {
        // Garde-fou mémoire : si la Map est saturée (IP falsifiées en masse), on la vide.
        if (rateLimitHits.size >= RATE_LIMIT_MAX_ENTRIES) rateLimitHits.clear();
        rateLimitHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count += 1;
    return true;
};

export async function POST(request: NextRequest) {
    if (!isAllowedOrigin(request.headers.get("origin"))) {
        return NextResponse.json({ error: "Origine non autorisée." }, { status: 403 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    // Appliquée à toute requête POST bien formée, bots compris (avant pot de miel et délai de saisie).
    if (!consumeRateLimit(getClientIp(request))) {
        return NextResponse.json(
            { error: "Trop d'envois, réessayez plus tard." },
            { status: 429 }
        );
    }

    try {
        const { name, email, message, website, fillMs } = body as Record<string, unknown>;

        // Pot de miel : un humain ne voit pas ce champ. Réponse 200 silencieuse pour ne pas renseigner le bot.
        if (typeof website === "string" ? website.trim() !== "" : website != null) {
            return NextResponse.json({ ok: true });
        }

        // Délai minimal de saisie : envoi en moins de 3 s = bot. Champ facultatif (compatibilité).
        // Durée de saisie mesurée dans le navigateur (performance.now), indépendante de son horloge.
        if (fillMs !== undefined && fillMs !== null) {
            const ms = Number(fillMs);
            if (!Number.isFinite(ms) || ms < MIN_FILL_DELAY_MS) {
                return NextResponse.json({ ok: true });
            }
        }

        if (
            typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
            !name.trim() || !email.trim() || !message.trim()
        ) {
            return NextResponse.json(
                { error: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        if (name.length > 200 || email.length > 320 || message.length > 5000) {
            return NextResponse.json(
                { error: "Message trop long." },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Adresse email invalide." },
                { status: 400 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL || "contact@ambroise-boutrin.fr",
            replyTo: email,
            subject: `Contact Portfolio — ${name.replace(/[\r\n]+/g, " ").trim()}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
                    <h2 style="color: #111; margin-bottom: 24px;">Nouveau message depuis votre portfolio</h2>
                    <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #eee;">
                        <p style="margin: 0 0 12px;"><strong>Nom :</strong> ${safeName}</p>
                        <p style="margin: 0 0 12px;"><strong>Email :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                        <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
                    </div>
                    <p style="color: #888; font-size: 12px; margin-top: 24px; text-align: center;">
                        Envoyé depuis ambroise-boutrin.fr
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "L'envoi a échoué. Écrivez-moi directement à contact@ambroise-boutrin.fr." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
