import ServiceLandingPage from "@/components/ServiceLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Création de Site Web pour Artisans et TPE - Ambroise Boutrin",
    description: "Développeur web expert pour les artisans. Obtenez un site vitrine performant, optimisé pour le SEO local et conçu pour capturer des prospects dans votre région.",
    alternates: { canonical: "/creation-site-artisan" },
};

export default function CreationSiteArtisan() {
    return (
        <ServiceLandingPage
            targetAudience="Artisans et Indépendants"
            title={<>Création de <br className="hidden md:block"/> <span className="opacity-40">Site Web Vitrine</span></>}
            subtitle="Un site vitrine ultra-performant qui agit comme votre meilleur commercial 24h/24."
            description="La plupart des artisans perdent des clients locaux parce que leur site est obsolète, invisible sur Google ou inexistant. Mon offre Pack Visibilité est spécialement conçue pour résoudre ce problème : un design premium, un référencement local agressif et des appels à l'action clairs pour transformer vos visiteurs en chantiers signés."
            priceStartingAt="800€"
            primaryCtaText="Démarrer mon projet"
            benefits={[
                {
                    image: "/images/site-web-agence-creative-offtime.webp",
                    title: "Acquisition Locale (SEO)",
                    description: "J'optimise votre site et votre fiche Google My Business pour que vous apparaissiez en premier quand un client cherche votre métier dans votre ville."
                },
                {
                    image: "/images/site-e-commerce-vetements-garanches.webp",
                    title: "Image de Marque Premium",
                    description: "Fini les sites 'faits maison' qui dévalorisent votre expertise. Je crée un design sur-mesure qui rassure vos prospects instantanément."
                },
                {
                    image: "/images/shots/site-web-assainissement-orleans.webp",
                    title: "Conversion Maximisée",
                    description: "L'interface est pensée pour faciliter le premier contact : boutons d'appels visibles, formulaires de devis simplifiés, intégration Calendly."
                }
            ]}
            deliverables={[
                "Site vitrine sur-mesure (1 à 5 pages)",
                "Développement ultra-rapide avec Next.js",
                "Optimisation totale pour téléphones mobiles (Mobile-first)",
                "Configuration SEO Local et Google My Business",
                "Intégration d'un formulaire de contact et/ou demande de devis",
                "Hébergement premium et sécurisé (Certificat SSL)",
                "Formation à la modification des contenus de base"
            ]}
        />
    );
}
