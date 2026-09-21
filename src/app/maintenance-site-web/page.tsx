import ServiceLandingPage from "@/components/ServiceLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maintenance et Sécurité de Site Web - Ambroise Boutrin",
    description: "Confiez-moi la maintenance, la sécurité et l'hébergement de votre site web. Mises à jour, sauvegardes et support technique prioritaire pour dormir sur vos deux oreilles.",
    alternates: { canonical: "/maintenance-site-web" },
};

export default function MaintenanceSiteWeb() {
    return (
        <ServiceLandingPage
            targetAudience="Toutes Entreprises"
            title={<>Maintenance de <br className="hidden md:block"/> <span className="opacity-40">Site Web et Sécurité</span></>}
            subtitle="Une assurance indispensable pour garantir la disponibilité de votre outil de travail."
            description="Avoir un beau site c'est bien, mais s'il se fait pirater ou s'il tombe en panne pendant une campagne de communication, c'est une perte sèche pour votre activité. Le Pack Sérénité vous libère de toute la gestion technique : je m'occupe de l'hébergement, des mises à jour complexes, des sauvegardes quotidiennes et de la sécurité. Vous pouvez vous concentrer sur votre métier."
            priceStartingAt="49€ / mois"
            primaryCtaText="Sécuriser mon site"
            benefits={[
                {
                    image: "/images/hound-search.webp",
                    title: "Protection Anti-Piratage",
                    description: "Je déploie des pare-feux avancés et je mets à jour les failles de sécurité potentielles avant même qu'elles ne soient exploitées."
                },
                {
                    image: "/images/serveur-minecraft-sur-mesure.webp",
                    title: "Disponibilité 99.9% (Uptime)",
                    description: "Je supervise (monitoring) votre site 24h/24. Si le serveur tombe en panne, je suis alerté immédiatement pour intervenir."
                },
                {
                    image: "/images/gallery/erp/gestion-utilisateurs-erp.png",
                    title: "Temps d'Intervention Inclus",
                    description: "Besoin de modifier un texte, d'ajouter un nouvel article ou de changer une image ? Le pack inclut du temps d'intervention chaque mois pour vos petites modifications."
                }
            ]}
            deliverables={[
                "Hébergement sur serveur privé ultra-rapide (VPS)",
                "Renouvellement automatique du nom de domaine et SSL",
                "Sauvegardes chiffrées automatiques (quotidiennes)",
                "Mises à jour des technologies et dépendances (Node.js, React, CMS)",
                "Monitoring du site (alertes de pannes 24/7)",
                "Correction de bugs critiques prioritaire",
                "1 heure de modification de contenu offerte chaque mois",
                "Support technique par email avec réponse sous 24h"
            ]}
        />
    );
}
