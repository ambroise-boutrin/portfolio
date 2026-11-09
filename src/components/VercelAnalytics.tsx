"use client";

import { Analytics } from "@vercel/analytics/next";

// Vercel Analytics ne pose aucun cookie et ne stocke pas d'identifiant : la mesure d'audience
// reste active sans consentement (exemption CNIL pour la mesure d'audience anonyme).
// Seul Google Tag Manager attend l'accord du visiteur (voir GoogleTagManager.tsx).
export default function VercelAnalytics() {
    return <Analytics />;
}
