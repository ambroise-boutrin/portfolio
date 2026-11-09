"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clearAnalyticsCookies } from "@/lib/consent";

// Bandeau fin en bas d'écran : il ne cache pas le contenu sur téléphone.
// Il ne concerne que Google Tag Manager ; Vercel Analytics (sans cookie) tourne dans tous les cas.
export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShowBanner(false);
        // Permet à GTM de se charger sans recharger la page
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        clearAnalyticsCookies();
        setShowBanner(false);
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    if (!showBanner) return null;

    return (
        <div
            role="region"
            aria-label="Cookies"
            className="fixed inset-x-0 bottom-0 z-[100000] border-t border-[var(--border-color)] bg-[var(--background)] px-4 py-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
                <p>
                    Statistiques Google ?{" "}
                    <Link href="/mentions-legales" className="underline hover:text-[var(--foreground)]">
                        En savoir plus
                    </Link>
                </p>
                <div className="flex gap-2 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-3 py-1.5 rounded-full border border-[var(--border-color)] text-[var(--foreground)] hover:border-[var(--foreground)]"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-3 py-1.5 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
