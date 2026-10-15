import React from 'react';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

// Un seul graphe d'entités reliées par @id : le site, la personne et l'activité.
// Google et les IA génératives s'en servent pour comprendre qui est Ambroise Boutrin,
// ce qu'il propose, à quel prix et où.
const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = [
    "https://www.linkedin.com/in/ambroise-boutrin/",
    "https://github.com/ambroise-boutrin",
];

// unitCode (UN/CEFACT, ex. "MON" = mois) : prix récurrent, exprimé en UnitPriceSpecification
const offer = (name: string, description: string, price: number, path: string, unitCode?: string) => ({
    "@type": "Offer",
    "url": `${SITE_URL}${path}`,
    "priceCurrency": "EUR",
    "priceSpecification": unitCode
        ? {
            "@type": "UnitPriceSpecification",
            "minPrice": price,
            "priceCurrency": "EUR",
            "unitCode": unitCode,
        }
        : {
            "@type": "PriceSpecification",
            "minPrice": price,
            "priceCurrency": "EUR",
        },
    "itemOffered": { "@type": "Service", "name": name, "description": description },
});

export const graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            "url": SITE_URL,
            "name": SITE_NAME,
            "description": "Site d'Ambroise Boutrin, développeur web freelance à Orléans : création de sites internet pour artisans, commerçants et PME.",
            "inLanguage": "fr-FR",
            "publisher": { "@id": BUSINESS_ID },
        },
        {
            "@type": "Person",
            "@id": PERSON_ID,
            "name": "Ambroise Boutrin",
            "url": `${SITE_URL}/a-propos`,
            "image": `${SITE_URL}/images/IMG_4128.jpeg`,
            "jobTitle": "Développeur web freelance",
            "description": "Développeur web freelance basé à Orléans. Crée des sites internet et des outils sur mesure pour les artisans, commerçants et PME.",
            "worksFor": { "@id": BUSINESS_ID },
            "alumniOf": { "@type": "CollegeOrUniversity", "name": "Université d'Orléans" },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orléans",
                "postalCode": "45000",
                "addressRegion": "Centre-Val de Loire",
                "addressCountry": "FR",
            },
            "knowsAbout": ["Création de sites internet", "Référencement local", "Next.js", "React", "Node.js", "TypeScript", "E-commerce", "Applications métier"],
            "sameAs": sameAs,
        },
        {
            "@type": "ProfessionalService",
            "@id": BUSINESS_ID,
            "name": "Ambroise Boutrin, développeur web à Orléans",
            "url": SITE_URL,
            "image": `${SITE_URL}/opengraph-image`,
            "logo": `${SITE_URL}/icon.svg`,
            "description": "Création de sites internet vitrines, refonte, e-commerce, maintenance et applications métier pour artisans, commerçants et PME à Orléans, dans le Loiret et partout en France.",
            "founder": { "@id": PERSON_ID },
            "email": "contact@ambroise-boutrin.fr",
            "telephone": "+33759878334",
            "priceRange": "€€",
            "currenciesAccepted": "EUR",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orléans",
                "postalCode": "45000",
                "addressRegion": "Centre-Val de Loire",
                "addressCountry": "FR",
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.902964,
                "longitude": 1.909251,
            },
            "areaServed": [
                { "@type": "City", "name": "Orléans" },
                { "@type": "AdministrativeArea", "name": "Loiret" },
                { "@type": "State", "name": "Centre-Val de Loire" },
                { "@type": "Country", "name": "France" },
            ],
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:30",
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Offres de création et maintenance de sites web",
                "itemListElement": [
                    offer("Pack Visibilité : site vitrine", "Site vitrine de 1 à 5 pages pour artisans et TPE, formulaire de devis, fiche Google et SEO local.", 1490, "/creation-site-artisan"),
                    offer("Pack Conversion : refonte ou e-commerce", "Refonte de site existant ou boutique en ligne avec paiement sécurisé, audit SEO avant et après.", 1990, "/services"),
                    offer("Pack Sérénité : maintenance", "Hébergement, SSL, sauvegardes, sécurité et mises à jour. Formules à 49, 89 et 149 € par mois.", 49, "/maintenance-site-web", "MON"),
                    offer("Application métier sur mesure", "ERP, portail client ou automatisation de processus pour PME.", 5000, "/application-metier-pme"),
                    {
                        "@type": "Offer",
                        "url": `${SITE_URL}/contact`,
                        "price": 0,
                        "priceCurrency": "EUR",
                        "itemOffered": { "@type": "Service", "name": "Audit gratuit de site internet", "description": "Rapport d'une page sur la vitesse, l'affichage mobile, le référencement local et la fiche Google de votre site actuel." },
                    },
                ],
            },
            "sameAs": sameAs,
        },
    ],
};

export function JsonLdScript({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    );
}

const JsonLd = () => <JsonLdScript data={graph} />;

export default JsonLd;
