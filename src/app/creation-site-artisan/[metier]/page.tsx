import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import { metiers, getMetier } from "@/data/metiers";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLdScript } from "@/components/JsonLd";

export function generateStaticParams() {
    return metiers.map((metier) => ({ metier: metier.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ metier: string }> }): Promise<Metadata> {
    const { metier: slug } = await params;
    const metier = getMetier(slug);
    if (!metier) return { title: "Page introuvable" };
    return pageMetadata({
        title: `Création de site internet pour ${metier.name} à Orléans | Ambroise Boutrin`,
        description: `Site internet pour ${metier.namePlural} à Orléans et dans le Loiret : ${metier.needs.map((n) => n.title.toLowerCase()).join(", ")}. Dès 1 490 €, par un développeur web local.`,
        path: `/creation-site-artisan/${slug}`,
    });
}

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default async function MetierPage({ params }: { params: Promise<{ metier: string }> }) {
    const { metier: slug } = await params;
    const metier = getMetier(slug);
    if (!metier) notFound();

    const url = `${SITE_URL}/creation-site-artisan/${metier.slug}`;
    const others = metiers.filter((m) => m.slug !== metier.slug);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[var(--background)] text-[var(--foreground)] select-text">
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": `Création de site internet pour ${metier.name}`,
                "serviceType": "Création de site internet",
                "audience": { "@type": "BusinessAudience", "name": capitalize(metier.namePlural) },
                "url": url,
                "provider": { "@id": `${SITE_URL}/#business` },
                "areaServed": [
                    { "@type": "City", "name": "Orléans" },
                    { "@type": "AdministrativeArea", "name": "Loiret" },
                    { "@type": "Country", "name": "France" },
                ],
                "offers": {
                    "@type": "Offer",
                    "url": `${SITE_URL}/creation-site-artisan`,
                    "priceCurrency": "EUR",
                    "priceSpecification": { "@type": "PriceSpecification", "minPrice": 1490, "priceCurrency": "EUR" },
                },
            }} />
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": metier.faq.map((item) => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": { "@type": "Answer", "text": item.answer },
                })),
            }} />
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL },
                    { "@type": "ListItem", "position": 2, "name": "Site pour artisans", "item": `${SITE_URL}/creation-site-artisan` },
                    { "@type": "ListItem", "position": 3, "name": capitalize(metier.namePlural), "item": url },
                ],
            }} />

            <div className="max-w-5xl mx-auto">
                <nav className="text-sm text-[var(--text-tertiary)] mb-10" aria-label="Fil d'Ariane">
                    <Link href="/creation-site-artisan" className="hover:text-[var(--foreground)] transition-colors">Site pour artisans</Link>
                    <span className="mx-2">/</span>
                    <span>{capitalize(metier.namePlural)}</span>
                </nav>

                <header className="max-w-3xl mb-20">
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] block mb-6">{capitalize(metier.namePlural)} · Orléans et Loiret</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-8">Création de site internet pour {metier.name}</h1>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10">{metier.intro}</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform">
                        Parler de mon site
                    </Link>
                </header>

                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-serif mb-10">Ce dont un site de {metier.name} a besoin</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {metier.needs.map((need, index) => (
                            <div key={need.title} className="p-8 rounded-3xl border border-[var(--border-color)]">
                                <div className="text-4xl font-serif text-[var(--text-tertiary)] mb-6">0{index + 1}</div>
                                <h3 className="text-xl font-serif mb-3">{need.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">{need.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Exemple de page d&apos;accueil</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                            Voici le haut de page que je proposerais à un {metier.name}, ce que voit un client en arrivant depuis Google sur son téléphone. Les textes sont adaptés à votre entreprise lors du projet.
                        </p>
                        <h3 className="text-lg font-bold mb-3">Les pages du site</h3>
                        <ul className="space-y-3">
                            {metier.pages.map((page) => (
                                <li key={page} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[var(--foreground)]" />
                                    <span>{page}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-8 border-[var(--foreground)] overflow-hidden shadow-2xl" aria-label={`Maquette de page d'accueil pour un ${metier.name}`}>
                        <div className="bg-[var(--bg-secondary)] px-6 py-4 flex items-center justify-between border-b border-[var(--border-color)]">
                            <span className="font-serif font-bold">Votre entreprise</span>
                            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-[var(--foreground)] text-[var(--background)]"><Phone size={12} /> Appeler</span>
                        </div>
                        <div className="p-6 bg-[var(--background)]">
                            <p className="text-2xl font-serif leading-tight mb-3">{metier.example.headline}</p>
                            <p className="text-sm text-[var(--text-secondary)] mb-6">{metier.example.subline}</p>
                            <span className="block text-center text-sm font-bold px-4 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] mb-4">{metier.example.cta}</span>
                            <p className="text-xs text-[var(--text-tertiary)] text-center mb-6">{metier.example.proof}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="aspect-square rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[10px] text-[var(--text-tertiary)]">Photo chantier</div>
                                <div className="aspect-square rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[10px] text-[var(--text-tertiary)]">Photo chantier</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-24 p-8 md:p-12 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <h2 className="text-2xl md:text-3xl font-serif mb-4">Ce que vos clients tapent dans Google</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">Le site est construit pour répondre à ces recherches, avec des pages et des textes qui correspondent à votre métier et à votre zone d&apos;intervention :</p>
                    <ul className="flex flex-wrap gap-3">
                        {metier.searches.map((search) => (
                            <li key={search} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm">« {search} »</li>
                        ))}
                    </ul>
                    {metier.relatedProject && (
                        <p className="text-[var(--text-secondary)] leading-relaxed mt-8">
                            Exemple de site réalisé pour un artisan :{" "}
                            <Link href={`/projets/${metier.relatedProject.slug}`} className="underline text-[var(--foreground)] hover:opacity-70">{metier.relatedProject.label}</Link>.
                        </p>
                    )}
                </section>

                <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Questions fréquentes</h2>
                        <div className="space-y-6">
                            {metier.faq.map((item) => (
                                <div key={item.question}>
                                    <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 rounded-3xl bg-[var(--foreground)] text-[var(--background)] text-center self-start">
                        <p className="text-xl font-serif italic opacity-60 mb-2">Pack Visibilité, à partir de</p>
                        <p className="text-5xl md:text-6xl font-serif mb-4">1 490 €</p>
                        <p className="text-sm mb-8 opacity-80">800 € pour mes 3 prochains projets, en échange d&apos;un témoignage. Site de 1 à 5 pages, fiche Google et référencement local inclus.</p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform">
                            Demander un devis
                        </Link>
                    </div>
                </section>

                <aside>
                    <h2 className="text-xl font-serif mb-6">Sites pour d&apos;autres métiers</h2>
                    <ul className="flex flex-wrap gap-3">
                        {others.map((other) => (
                            <li key={other.slug}>
                                <Link href={`/creation-site-artisan/${other.slug}`} className="inline-block px-4 py-2 rounded-full border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors text-sm">
                                    {capitalize(other.namePlural)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </main>
    );
}
