import React from 'react';

const JsonLd = () => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ambroise Boutrin - Studio Créatif Orléans",
            "url": "https://www.ambroise-boutrin.fr"
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "SiteNavigationElement", "position": 1, "name": "Accueil", "url": "https://www.ambroise-boutrin.fr/" },
                { "@type": "SiteNavigationElement", "position": 2, "name": "Services", "url": "https://www.ambroise-boutrin.fr/services" },
                { "@type": "SiteNavigationElement", "position": 3, "name": "Projets", "url": "https://www.ambroise-boutrin.fr/projets" },
                { "@type": "SiteNavigationElement", "position": 4, "name": "À propos", "url": "https://www.ambroise-boutrin.fr/a-propos" },
                { "@type": "SiteNavigationElement", "position": 5, "name": "Contact", "url": "https://www.ambroise-boutrin.fr/contact" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ambroise Boutrin - Création de Sites Web Orléans",
            "image": "https://www.ambroise-boutrin.fr/og-image.jpg",
            "@id": "https://www.ambroise-boutrin.fr",
            "url": "https://www.ambroise-boutrin.fr",
            "telephone": "+33759878334",
            "priceRange": "€€€",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Centre Ville",
                "addressLocality": "Orléans",
                "addressRegion": "Centre-Val de Loire",
                "postalCode": "45000",
                "addressCountry": "FR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.902964,
                "longitude": 1.909251
            },
            "areaServed": [
                {
                    "@type": "City",
                    "name": "Orléans"
                },
                {
                    "@type": "State",
                    "name": "Centre-Val de Loire"
                },
                {
                    "@type": "Country",
                    "name": "France"
                }
            ],
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                ],
                "opens": "09:00",
                "closes": "18:30"
            },
            "sameAs": [
                "https://www.linkedin.com/in/ambroise-boutrin/",
                "https://github.com/ambroise-boutrin"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ambroise Boutrin",
            "url": "https://www.ambroise-boutrin.fr",
            "image": "https://www.ambroise-boutrin.fr/me.png",
            "jobTitle": "Développeur Web B2B | Freelance Next.js",
            "worksFor": {
                "@type": "Organization",
                "name": "Ambroise B. Studio"
            },
            "description": "Développeur web freelance expert B2B. Transformation de problématiques complexes en outils digitaux performants avec ROI garanti.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orléans",
                "addressRegion": "Centre-Val de Loire",
                "postalCode": "45000",
                "addressCountry": "FR"
            },
            "sameAs": [
                "https://www.linkedin.com/in/ambroise-boutrin/",
                "https://github.com/ambroise-boutrin",
                "https://twitter.com/ambroise_b"
            ],
            "knowsAbout": ["Next.js", "React", "Node.js", "Développement Web", "Applications Métier", "E-commerce", "SEO", "Architecture Logicielle"]
        },
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contactez Ambroise Boutrin - Développeur B2B",
            "description": "Formulaire de contact pour discuter de vos projets web.",
            "url": "https://www.ambroise-boutrin.fr/contact",
            "mainEntity": {
                "@type": "Person",
                "name": "Ambroise Boutrin",
                "email": "boutrinambroise@gmail.com",
                "telephone": "+33759878334",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Orléans",
                    "addressCountry": "FR"
                }
            }
        }
    ];

    return (
        <section>
            {/* Structured Data for Local SEO (Orléans), Sitelinks & Person */}
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </section>
    );
};

export default JsonLd;

