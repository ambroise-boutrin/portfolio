import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { faqs } from "@/data/faq";

// Résumé des offres et des prix sur l'accueil : le visiteur voit tout de suite
// ce que je propose, pour qui et combien ça coûte.
const offers = [
    {
        name: "Site vitrine",
        pack: "Pack Visibilité",
        price: "1 490 €",
        note: "800 € pour mes 3 prochains projets",
        description: "Un site de 1 à 5 pages pour artisans et TPE, avec formulaire de devis, fiche Google et référencement local.",
        href: "/creation-site-artisan",
    },
    {
        name: "Refonte ou e-commerce",
        pack: "Pack Conversion",
        price: "1 990 €",
        note: "à partir de",
        description: "Votre site actuel est lent ou invisible sur Google, ou vous voulez vendre en ligne.",
        href: "/services",
    },
    {
        name: "Maintenance",
        pack: "Pack Sérénité",
        price: "49 €/mois",
        note: "à partir de",
        description: "Hébergement, sauvegardes, sécurité et mises à jour. Vous ne vous occupez de rien.",
        href: "/maintenance-site-web",
    },
];

export default function HomeOffers() {
    return (
        <section className="relative z-10 py-24 md:py-32 px-6 bg-[var(--background)] border-t border-[var(--border-color)]">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mb-14">
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] block mb-4">Offres et tarifs</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] mb-6">Un prix annoncé avant de commencer</h2>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        Pour les artisans, commerçants et PME d&apos;Orléans et du Loiret. Un seul interlocuteur, du premier appel à la mise en ligne.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {offers.map((offer) => (
                        <Link
                            key={offer.name}
                            href={offer.href}
                            className="group flex flex-col p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors"
                        >
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-4">{offer.pack}</span>
                            <h3 className="text-2xl font-serif text-[var(--foreground)] mb-3">{offer.name}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{offer.description}</p>
                            <div className="mt-auto">
                                <p className="text-xs text-[var(--text-tertiary)] mb-1">{offer.note}</p>
                                <p className="text-3xl font-serif text-[var(--foreground)] flex items-center justify-between">
                                    {offer.price}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-3xl bg-[var(--foreground)] text-[var(--background)] mb-24">
                    <div className="flex items-start gap-4">
                        <Search size={24} className="shrink-0 mt-1" />
                        <div>
                            <p className="text-xl font-serif mb-1">Vous avez déjà un site ?</p>
                            <p className="opacity-80">Je l&apos;analyse gratuitement : vitesse, mobile, référencement local et fiche Google, dans un rapport d&apos;une page.</p>
                        </div>
                    </div>
                    <Link href="/contact?audit=1" className="shrink-0 text-center px-8 py-4 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform">
                        Audit gratuit
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--foreground)] mb-4">Questions fréquentes</h2>
                        <Link href="/services" className="underline text-[var(--text-secondary)] hover:text-[var(--foreground)]">Toutes les questions</Link>
                    </div>
                    <div className="space-y-8">
                        {faqs.slice(0, 3).map((faq) => (
                            <div key={faq.question}>
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{faq.question}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
