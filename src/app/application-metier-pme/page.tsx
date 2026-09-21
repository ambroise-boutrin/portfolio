import ServiceLandingPage from "@/components/ServiceLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Développement d'Application Métier et Logiciel PME - Ambroise Boutrin",
    description: "Digitalisez vos processus internes. Développement d'applications métiers sur-mesure, portails clients, ERP et outils SaaS pour PME. Solutions robustes et évolutives.",
    alternates: { canonical: "/application-metier-pme" },
};

export default function ApplicationMetierPME() {
    return (
        <ServiceLandingPage
            targetAudience="PME et Startups"
            title={<>Application <br className="hidden md:block"/> <span className="opacity-40">Métier pour PME</span></>}
            subtitle="Digitalisez vos processus avec un outil sur-mesure, rapide et sécurisé."
            description="Les fichiers Excel à rallonge et les logiciels obsolètes freinent votre croissance. Le Pack Conversion est pensé pour les PME qui ont besoin de centraliser leurs données. Que ce soit un ERP personnalisé, un portail client sécurisé ou une application métier complexe, je développe une architecture robuste (React/Node.js) parfaitement adaptée à vos règles métiers."
            priceStartingAt="2 000€"
            primaryCtaText="Discuter de mon application"
            benefits={[
                {
                    image: "/images/gallery/erp/accueil-dashboard-erp.png",
                    title: "Automatisation des Processus",
                    description: "Éliminez les doubles saisies et les erreurs humaines en connectant vos différents outils via API ou en créant un workflow automatisé sur-mesure."
                },
                {
                    image: "/images/logiciel-erp-pme-stocko.png",
                    title: "Sécurité et Robustesse",
                    description: "Contrairement aux outils No-Code limités, je code votre application de A à Z. Vous êtes propriétaire de vos données et l'architecture est prête à supporter votre croissance (scalabilité)."
                },
                {
                    image: "/images/gallery/erp/dashboard-ventes-erp.png",
                    title: "Expérience Utilisateur (UX)",
                    description: "Un outil métier ne doit pas être austère. Je conçois des interfaces intuitives qui réduisent le temps de formation de vos équipes et maximisent l'adoption de l'outil."
                }
            ]}
            deliverables={[
                "Analyse des besoins et modélisation de la base de données",
                "Maquettage (UI/UX) interactif avant développement",
                "Développement Frontend réactif (React / Next.js)",
                "Développement Backend sécurisé (Node.js / Express)",
                "Connexion sécurisée aux bases de données (PostgreSQL / MongoDB)",
                "Panel d'administration complet et gestion des rôles",
                "Déploiement sur un environnement cloud privé et sécurisé",
                "Documentation technique et formation des équipes"
            ]}
        />
    );
}
