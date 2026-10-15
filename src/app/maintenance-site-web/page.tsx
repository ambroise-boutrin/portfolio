import ServiceLandingPage from "@/components/ServiceLandingPage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Maintenance de site internet dès 49 €/mois | Ambroise Boutrin, Orléans",
    description: "Hébergement, sauvegardes, sécurité et mises à jour de votre site web. Formules Essentiel 49 €, Pro 89 € et Croissance 149 € par mois, par un développeur web à Orléans.",
    path: "/maintenance-site-web",
});

export default function MaintenanceSiteWeb() {
    return (
        <>
            <ServiceJsonLd
                name="Maintenance de site internet"
                description="Hébergement, certificat SSL, sauvegardes, sécurité et mises à jour de votre site. Formules Essentiel 49 €, Pro 89 € et Croissance 149 € par mois."
                path="/maintenance-site-web"
                minPrice={49} unitText="MON"
            />
        <ServiceLandingPage
            targetAudience="Toutes Entreprises"
            title={<>Maintenance de <br className="hidden md:block"/> <span className="opacity-40">Site Web et Sécurité</span></>}
            subtitle="Je m'occupe de la partie technique de votre site pour qu'il reste en ligne et à jour."
            description="Avoir un beau site c'est bien, mais s'il se fait pirater ou s'il tombe en panne pendant une campagne de communication, c'est une perte sèche pour votre activité. Le Pack Sérénité vous libère de toute la gestion technique : je m'occupe de l'hébergement, des mises à jour, des sauvegardes et de la sécurité. Vous pouvez vous concentrer sur votre métier."
            priceStartingAt="49€ / mois"
            priceNote="Essentiel 49 € · Pro 89 € · Croissance 149 € par mois. Sans engagement, résiliable chaque mois."
            primaryCtaText="Sécuriser mon site"
            benefits={[
                {
                    image: "/images/hound-search.webp",
                    title: "Sécurité et mises à jour",
                    description: "Certificat SSL actif en permanence et mises à jour de sécurité appliquées rapidement après leur publication pour les outils utilisés par votre site."
                },
                {
                    image: "/images/analyse-graphes-python.png",
                    title: "Hébergement et sauvegardes",
                    description: "Votre site est hébergé sur Vercel et son code est sauvegardé sur GitHub. Je vérifie qu'il reste en ligne et j'interviens en cas de problème."
                },
                {
                    image: "/images/gallery/erp/gestion-catalogue-erp.png",
                    title: "Temps d'Intervention Inclus",
                    description: "Besoin de modifier un texte, d'ajouter un nouvel article ou de changer une image ? Les formules Pro et Croissance incluent du temps d'intervention chaque mois pour vos petites modifications."
                }
            ]}
            deliverables={[
                "Hébergement sur Vercel",
                "Renouvellement automatique du nom de domaine et SSL",
                "Code versionné et sauvegardé sur GitHub",
                "Mises à jour des technologies et dépendances (Node.js, React, CMS)",
                "Surveillance de la disponibilité du site",
                "Correction des bugs bloquants en priorité",
                "Formule Pro (89 €/mois) : 1 heure de modifications et un rapport mensuel",
                "Formule Croissance (149 €/mois) : 2 heures de modifications et un article SEO par mois",
                "Support technique par email avec réponse sous 24 h ouvrées",
                "Sans engagement, résiliable chaque mois"
            ]}
        />
        </>
    );
}
