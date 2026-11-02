import ServiceLandingPage from "@/components/ServiceLandingPage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Application métier sur mesure pour PME à Orléans | Ambroise Boutrin",
    description: "Remplacez vos fichiers Excel par un outil sur mesure : ERP, portail client, automatisation. Développement d'applications métier pour PME, dès 5 000 €, par un développeur basé à Orléans.",
    path: "/application-metier-pme",
});

export default function ApplicationMetierPME() {
    return (
        <>
            <ServiceJsonLd
                name="Développement d'application métier pour PME"
                description="Application métier sur mesure pour PME : ERP, portail client, automatisation de processus, en remplacement des fichiers Excel et logiciels obsolètes."
                path="/application-metier-pme"
                minPrice={5000}
            />
        <ServiceLandingPage
            targetAudience="PME et TPE"
            title={<>Application <br className="hidden md:block"/> <span className="opacity-40">Métier pour PME</span></>}
            subtitle="Remplacez vos tableurs par un outil sur mesure, rapide et sécurisé."
            description="Les fichiers Excel à rallonge et les logiciels dépassés font perdre du temps à vos équipes. Cette offre est pensée pour les entreprises qui veulent réunir leurs données au même endroit : suivi des stocks, des commandes, des clients ou des interventions. Je construis l'outil autour de votre façon de travailler, pas l'inverse. Pour démarrer sans risque, on peut commencer par un premier module limité."
            priceStartingAt="5 000€"
            primaryCtaText="Discuter de mon application"
            benefits={[
                {
                    image: "/images/gallery/erp/accueil-dashboard-erp.png",
                    title: "Moins de saisies",
                    description: "Fini les doubles saisies et les erreurs de copier-coller : vos outils se parlent et les tâches répétitives se font toutes seules."
                },
                {
                    image: "/images/complement-outlook-entreprise.webp",
                    title: "Vos données chez vous",
                    description: "Je code votre application de A à Z. Les données et le code sont à vous, avec une documentation pour qu'un autre développeur puisse reprendre l'outil si besoin. Il peut grandir avec votre entreprise."
                },
                {
                    image: "/images/plateforme-web-freelance-nomad.webp",
                    title: "Simple à prendre en main",
                    description: "Un outil que vos équipes ont envie d'utiliser : des écrans clairs, peu de formation nécessaire."
                }
            ]}
            deliverables={[
                "Analyse des besoins et modélisation de la base de données",
                "Maquette cliquable à valider avant de développer",
                "Écrans adaptés à chaque poste (bureau, atelier, terrain)",
                "Accès sécurisés et droits par utilisateur",
                "Espace d'administration pour gérer les comptes",
                "Hébergement sécurisé, sauvegardes comprises",
                "Documentation technique et formation des équipes"
            ]}
        />
        </>
    );
}
