import Link from "next/link";
import { Metadata } from "next";
import { guides } from "@/data/guides";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLdScript } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
    title: "Guides pour artisans et TPE : site internet, Google, prix | Ambroise Boutrin",
    description: "Guides pratiques pour artisans, commerçants et TPE : prix d'un site internet, quand refaire son site, fiche Google Business Profile. Réponses claires par un développeur web à Orléans.",
    path: "/guides",
});

export default function GuidesPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[var(--background)] text-[var(--foreground)] select-text">
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Guides pour artisans et TPE",
                "url": `${SITE_URL}/guides`,
                "hasPart": guides.map((guide) => ({
                    "@type": "Article",
                    "headline": guide.title,
                    "url": `${SITE_URL}/guides/${guide.slug}`,
                })),
            }} />
            <div className="max-w-4xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] block mb-6">Guides</span>
                <h1 className="text-4xl md:text-7xl font-serif tracking-tight mb-6">Les réponses à vos questions sur le web</h1>
                <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-16 max-w-2xl">
                    Prix, refonte, visibilité sur Google : des réponses directes, sans jargon, pour les artisans, commerçants et TPE.
                </p>
                <div className="space-y-6">
                    {guides.map((guide) => (
                        <Link
                            key={guide.slug}
                            href={`/guides/${guide.slug}`}
                            className="block p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors"
                        >
                            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-3">{guide.readingMinutes} min de lecture</p>
                            <h2 className="text-2xl md:text-3xl font-serif mb-3">{guide.title}</h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">{guide.description}</p>
                        </Link>
                    ))}
                </div>
                <div className="mt-16 p-8 rounded-3xl bg-[var(--foreground)] text-[var(--background)] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <p className="text-xl font-serif">Vous préférez un avis sur votre propre site ? Je l&apos;analyse gratuitement.</p>
                    <Link href="/contact?audit=1" className="shrink-0 text-center px-8 py-4 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform">
                        Audit gratuit
                    </Link>
                </div>
            </div>
        </main>
    );
}
