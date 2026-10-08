"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactContent() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Une erreur est survenue.");
            }

            setStatus("success");
            form.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer."
            );
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--foreground)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

            <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 relative z-10">

                {/* Left: Info */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-serif mb-10 tracking-tighter text-[var(--foreground)]">
                        Parlons <br />
                        <span className="italic text-[var(--text-secondary)]">Projets</span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-md leading-relaxed">
                        Vous avez une idée en tête ou vous cherchez un développeur pour rejoindre votre équipe ? N'hésitez pas à me contacter.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Email</span>
                                <a href="mailto:contact@ambroise-boutrin.fr" className="text-xl md:text-2xl font-serif text-[var(--foreground)]">contact@ambroise-boutrin.fr</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Téléphone</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">07 59 87 83 34</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Localisation</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">Orléans, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-1/2 bg-[var(--bg-secondary)] p-10 md:p-14 rounded-3xl md:mt-20 border border-[var(--border-color)]">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Nom Complet</label>
                            <input type="text" name="name" required className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="Votre nom" disabled={status === "loading"} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Email</label>
                            <input type="email" name="email" required className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="votre@email.com" disabled={status === "loading"} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Message</label>
                            <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="Parlez-moi de votre projet..." disabled={status === "loading"}></textarea>
                        </div>

                        {/* RGPD Consent */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="consent"
                                id="rgpd-consent"
                                required
                                disabled={status === "loading"}
                                className="mt-1.5 w-4 h-4 accent-[var(--foreground)] shrink-0 cursor-pointer"
                            />
                            <label htmlFor="rgpd-consent" className="text-sm text-[var(--text-secondary)] leading-relaxed cursor-pointer">
                                J&apos;accepte que mes données soient utilisées pour me recontacter. Aucune donnée n&apos;est stockée.
                                Consultez les <a href="/mentions-legales" target="_blank" className="underline text-[var(--foreground)] hover:opacity-70 transition-opacity">mentions légales</a> pour en savoir plus.
                            </label>
                        </div>

                        {/* Status messages */}
                        {status === "success" && (
                            <div className="flex items-center gap-3 text-green-500 bg-green-500/10 px-5 py-4 rounded-xl animate-in fade-in">
                                <CheckCircle size={20} className="shrink-0" />
                                <span className="text-sm font-medium">Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-3 text-red-500 bg-red-500/10 px-5 py-4 rounded-xl animate-in fade-in">
                                <AlertCircle size={20} className="shrink-0" />
                                <span className="text-sm font-medium">{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-[var(--foreground)] text-[var(--background)] py-5 md:py-6 rounded-full font-bold text-base md:text-lg uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <span>Envoi en cours...</span>
                                    <Loader2 size={18} className="shrink-0 animate-spin" />
                                </>
                            ) : (
                                <>
                                    <span>Envoyer le message</span>
                                    <Send size={18} className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </ScrollReveal>
        </main>
    );
}
