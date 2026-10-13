import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Tarifs sur l'accueil, présentés comme une liste éditoriale dans le style des autres sections.
const offers = [
    { name: "Site vitrine", detail: "1 à 5 pages, fiche Google, référencement local", price: "dès 1 490 €", href: "/creation-site-artisan" },
    { name: "Refonte, e-commerce", detail: "Un site lent ou invisible, ou une boutique en ligne", price: "dès 1 990 €", href: "/services" },
    { name: "Maintenance", detail: "Hébergement, sauvegardes, sécurité, mises à jour", price: "dès 49 € / mois", href: "/maintenance-site-web" },
    { name: "Application métier", detail: "ERP, portail client, automatisation", price: "dès 5 000 €", href: "/application-metier-pme" },
];

export default function HomeOffers() {
    return (
        <section className="py-24 md:py-32 bg-[var(--background)] relative z-10 border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-8 block w-12">
                            03
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--foreground)] tracking-tight leading-tight">
                            Mes <span className="text-[var(--text-secondary)] italic">Tarifs.</span>
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-[var(--text-secondary)] font-light max-w-sm md:pb-4">
                        Un prix fixé avant de commencer. Site vitrine à 800 € pour mes trois prochains projets, en échange d&apos;un témoignage.
                    </p>
                </div>

                <ul className="border-t border-[var(--border-color)]">
                    {offers.map((offer) => (
                        <li key={offer.name} className="border-b border-[var(--border-color)]">
                            <Link href={offer.href} className="group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_12rem] items-baseline gap-2 md:gap-8 py-8">
                                <span className="text-2xl md:text-4xl font-serif text-[var(--foreground)] group-hover:italic transition-all">{offer.name}</span>
                                <span className="text-[var(--text-secondary)] font-light">{offer.detail}</span>
                                <span className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[var(--foreground)] whitespace-nowrap md:justify-end">
                                    {offer.price}
                                    <ArrowUpRight size={14} className="text-[var(--text-tertiary)] group-hover:text-[var(--foreground)] group-hover:rotate-45 transition-all duration-300" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/contact?audit=1" className="inline-block mt-10 text-xs font-mono uppercase tracking-widest text-[var(--foreground)] border-b border-[var(--foreground)] pb-1 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors">
                    Déjà un site ? Audit gratuit
                </Link>
            </div>
        </section>
    );
}
