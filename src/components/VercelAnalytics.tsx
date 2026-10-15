"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function VercelAnalytics() {
    const [consentGranted, setConsentGranted] = useState(false);

    useEffect(() => {
        // Check consent status on mount and listen for updates
        const checkConsent = () => {
            const consent = localStorage.getItem("cookie_consent");
            if (consent === "granted") {
                setConsentGranted(true);
            }
        };

        checkConsent();

        // "storage" : changement depuis un autre onglet ; "cookie_consent_updated" : émis par CookieBanner dans cet onglet
        window.addEventListener("storage", checkConsent);
        window.addEventListener("cookie_consent_updated", checkConsent);
        return () => {
            window.removeEventListener("storage", checkConsent);
            window.removeEventListener("cookie_consent_updated", checkConsent);
        };
    }, []);

    if (!consentGranted) return null;

    return <Analytics />;
}
