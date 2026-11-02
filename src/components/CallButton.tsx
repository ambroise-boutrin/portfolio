"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

// Bouton « Appeler » flottant, uniquement sur mobile : beaucoup d'artisans préfèrent appeler qu'écrire.
// En bas à gauche pour ne pas gêner le bouton « Retour en haut » (en bas à droite).
// Masqué sur /contact (le numéro y est déjà) et tant que le bandeau cookies est affiché (il le recouvrirait).
export default function CallButton() {
    const pathname = usePathname();
    const [consentAnswered, setConsentAnswered] = useState(false);

    useEffect(() => {
        const check = () => {
            try {
                setConsentAnswered(localStorage.getItem("cookie_consent") !== null);
            } catch {
                setConsentAnswered(true);
            }
        };
        check();
        // Émis par CookieBanner quand le visiteur accepte ou refuse
        window.addEventListener("cookie_consent_updated", check);
        return () => window.removeEventListener("cookie_consent_updated", check);
    }, []);

    if (pathname === "/contact" || !consentAnswered) return null;

    return (
        <a
            href="tel:+33759878334"
            className="md:hidden fixed bottom-8 left-6 z-[998] flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] pl-4 pr-5 py-3 rounded-full shadow-2xl font-medium text-sm active:scale-95 transition-transform"
            aria-label="Appeler Ambroise Boutrin au 07 59 87 83 34"
        >
            <Phone size={18} />
            Appeler
        </a>
    );
}
