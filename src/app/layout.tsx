import type { Metadata, Viewport } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ambroise Boutrin | Développeur web freelance à Orléans, création de sites internet",
  description: "Développeur web freelance à Orléans (45). Création de sites internet pour artisans, commerçants et PME : site vitrine dès 1 490 €, refonte, e-commerce, maintenance et applications métier.",
  keywords: ["Développeur web Orléans", "Création site internet Orléans", "Création site vitrine artisan", "Freelance web Loiret", "Refonte site internet Orléans", "Application métier PME", "Développeur Next.js", "Ambroise Boutrin"],
  authors: [{ name: "Ambroise Boutrin", url: SITE_URL }],
  creator: "Ambroise Boutrin",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: "Ambroise Boutrin | Développeur web freelance à Orléans",
    description: "Création de sites internet pour artisans, commerçants et PME à Orléans et dans le Loiret. Prix annoncés d'avance, un seul interlocuteur.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ambroise Boutrin | Développeur web freelance à Orléans",
    description: "Création de sites internet pour artisans, commerçants et PME à Orléans et dans le Loiret. Prix annoncés d'avance, un seul interlocuteur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import GoogleTagManager from "@/components/GoogleTagManager";
import VercelAnalytics from "@/components/VercelAnalytics";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--foreground)] selection:text-[var(--background)] select-none overflow-x-hidden" suppressHydrationWarning>
        <GoogleTagManager GTM_ID="GTM-PKMDC4HR" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-black text-white font-bold rounded-md">Passer au contenu</a>
        <Navbar />
        <SmoothScroll>
          <div id="page-transition-curtain" className="fixed inset-0 bg-[var(--bg-inverse)] z-[99999] opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out"></div>
          <div id="main-content" className="relative z-0 min-h-screen"> {/* Main Content Container */}
            {children}
          </div>
          <div className="relative z-10">
            <Footer />
            <ScrollToTop />
          </div>
          <CookieBanner />
        </SmoothScroll>
        <JsonLd />
        <VercelAnalytics />
      </body>
    </html>
  );
}
