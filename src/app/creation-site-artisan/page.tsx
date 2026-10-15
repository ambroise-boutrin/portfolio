import ServiceLandingPage from "@/components/ServiceLandingPage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import Link from "next/link";
import { metiers } from "@/data/metiers";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Création de site internet pour artisan à Orléans dès 1 490 € | Ambroise Boutrin",
    description: "Site vitrine pour artisans et TPE à Orléans et dans le Loiret : 1 à 5 pages, formulaire de devis, fiche Google optimisée, SEO local. Dès 1 490 €, livré en 2 à 4 semaines.",
    path: "/creation-site-artisan",
});

export default function CreationSiteArtisan() {
    return (
        <>
            <ServiceJsonLd
                name="Création de site vitrine pour artisans et TPE"
                description="Site vitrine de 1 à 5 pages pour artisans et TPE à Orléans et dans le Loiret : formulaire de devis, fiche Google optimisée et référencement local."
                path="/creation-site-artisan"
                minPrice={1490}
            />
        <ServiceLandingPage
            targetAudience="Artisans et Indépendants"
            title={<>Création de <br className="hidden md:block"/> <span className="opacity-40">Site Web Vitrine</span></>}
            subtitle="Un site vitrine rapide et clair, qui présente votre travail et facilite les demandes de devis."
            description="La plupart des artisans perdent des clients locaux parce que leur site est obsolète, invisible sur Google ou inexistant. Mon offre Pack Visibilité est spécialement conçue pour résoudre ce problème : un design soigné, un référencement local travaillé et des boutons de contact bien visibles pour que vos visiteurs vous demandent un devis."
            priceStartingAt="1 490€"
            priceNote="Offre de lancement : 800 € pour mes 3 prochains projets, en échange d'un témoignage."
            primaryCtaText="Démarrer mon projet"
            benefits={[
                {
                    image: "/images/site-web-agence-creative-offtime.webp",
                    title: "Acquisition Locale (SEO)",
                    description: "J'optimise votre site et votre fiche Google Business Profile pour que les clients qui cherchent votre métier dans votre ville vous trouvent plus facilement."
                },
                {
                    image: "/images/site-e-commerce-vetements-garanches.webp",
                    title: "Image de Marque Soignée",
                    description: "Fini les sites 'faits maison' qui dévalorisent votre expertise. Je crée un design sur mesure qui inspire confiance à vos futurs clients."
                },
                {
                    image: "/images/shots/site-web-assainissement-orleans.webp",
                    title: "Contact Facilité",
                    description: "L'interface est pensée pour faciliter le premier contact : boutons d'appels visibles, formulaires de devis et de contact simplifiés."
                }
            ]}
            deliverables={[
                "Site vitrine sur-mesure (1 à 5 pages)",
                "Développement ultra-rapide avec Next.js",
                "Optimisation totale pour téléphones mobiles (Mobile-first)",
                "Configuration SEO Local et Google Business Profile",
                "Intégration d'un formulaire de contact et/ou demande de devis",
                "1re année d'hébergement incluse (avec certificat SSL)",
                "Formation à la modification des contenus de base"
            ]}
        />
        <section className="pb-24 px-6 bg-[var(--background)]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] mb-6">Un site pensé pour votre métier</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">Chaque métier a ses propres clients et ses propres recherches sur Google. Voyez ce que je propose pour le vôtre :</p>
                <ul className="flex flex-wrap justify-center gap-3">
                    {metiers.map((metier) => (
                        <li key={metier.slug}>
                            <Link href={`/creation-site-artisan/${metier.slug}`} className="inline-block px-5 py-3 rounded-full border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors text-[var(--foreground)]">
                                {metier.namePlural.charAt(0).toUpperCase() + metier.namePlural.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    );
}
