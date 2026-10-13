import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/data/guides";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLdScript } from "@/components/JsonLd";

export function generateStaticParams() {
    return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const guide = getGuide(slug);
    if (!guide) return { title: "Guide introuvable" };
    return pageMetadata({ title: guide.metaTitle, description: guide.description, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guide = getGuide(slug);
    if (!guide) notFound();

    const url = `${SITE_URL}/guides/${guide.slug}`;
    const others = guides.filter((g) => g.slug !== guide.slug);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[var(--background)] text-[var(--foreground)] select-text">
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": guide.title,
                "description": guide.description,
                "url": url,
                "mainEntityOfPage": url,
                "datePublished": guide.publishedAt,
                "dateModified": guide.updatedAt,
                "inLanguage": "fr-FR",
                "image": `${SITE_URL}/opengraph-image`,
                "author": { "@id": `${SITE_URL}/#person` },
                "publisher": { "@id": `${SITE_URL}/#business` },
            }} />
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{ question: guide.title, answer: guide.answer }, ...guide.faq].map((item) => ({
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
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${SITE_URL}/guides` },
                    { "@type": "ListItem", "position": 3, "name": guide.title, "item": url },
                ],
            }} />

            <article className="max-w-3xl mx-auto">
                <nav className="text-sm text-[var(--text-tertiary)] mb-10" aria-label="Fil d'Ariane">
                    <Link href="/guides" className="hover:text-[var(--foreground)] transition-colors">Guides</Link>
                    <span className="mx-2">/</span>
                    <span>{guide.readingMinutes} min de lecture</span>
                </nav>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-6">{guide.title}</h1>
                <p className="text-sm text-[var(--text-tertiary)] mb-12">
                    Par <Link href="/a-propos" className="underline hover:text-[var(--foreground)]">Ambroise Boutrin</Link>, développeur web à Orléans · Mis à jour le{" "}
                    <time dateTime={guide.updatedAt}>{new Date(guide.updatedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
                </p>

                <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-16">
                    <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-3">La réponse courte</p>
                    <p className="text-lg md:text-xl leading-relaxed">{guide.answer}</p>
                </div>

                {guide.sections.map((section) => (
                    <section key={section.heading} className="mb-14">
                        <h2 className="text-2xl md:text-3xl font-serif mb-6">{section.heading}</h2>
                        {section.paragraphs?.map((paragraph) => (
                            <p key={paragraph} className="text-lg text-[var(--text-secondary)] leading-relaxed mb-5">{paragraph}</p>
                        ))}
                        {section.list && (
                            <ul className="list-disc pl-6 space-y-3 text-lg text-[var(--text-secondary)] leading-relaxed">
                                {section.list.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </section>
                ))}

                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif mb-6">Questions fréquentes</h2>
                    <div className="space-y-6">
                        {guide.faq.map((item) => (
                            <div key={item.question}>
                                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="p-8 md:p-10 rounded-3xl bg-[var(--foreground)] text-[var(--background)] text-center mb-20">
                    <p className="text-xl md:text-2xl font-serif mb-6">{guide.cta.text}</p>
                    <Link href={guide.cta.href} className="inline-block px-8 py-4 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform">
                        {guide.cta.label}
                    </Link>
                </div>

                {others.length > 0 && (
                    <aside>
                        <h2 className="text-xl font-serif mb-6">À lire aussi</h2>
                        <ul className="space-y-3">
                            {others.map((other) => (
                                <li key={other.slug}>
                                    <Link href={`/guides/${other.slug}`} className="text-lg underline hover:opacity-70">{other.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </article>
        </main>
    );
}
