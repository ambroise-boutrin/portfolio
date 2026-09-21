import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Tous les champs sont requis." },
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

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "contact@ambroise-boutrin.fr",
            replyTo: email,
            subject: `Contact Portfolio — ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
                    <h2 style="color: #111; margin-bottom: 24px;">Nouveau message depuis votre portfolio</h2>
                    <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #eee;">
                        <p style="margin: 0 0 12px;"><strong>Nom :</strong> ${name}</p>
                        <p style="margin: 0 0 12px;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="color: #888; font-size: 12px; margin-top: 24px; text-align: center;">
                        Envoyé depuis ambroise-boutrin.fr
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
