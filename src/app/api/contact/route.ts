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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

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
