import { JsonLdScript } from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';

// Données structurées d'une page d'offre : le service, son prix de départ et le fil d'Ariane.
export default function ServiceJsonLd({ name, description, path, minPrice, unitText }: {
    name: string;
    description: string;
    path: string;
    minPrice: number;
    unitText?: string;
}) {
    const url = `${SITE_URL}${path}`;
    return (
        <>
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": name,
                "description": description,
                "url": url,
                "provider": { "@id": `${SITE_URL}/#business` },
                "areaServed": [
                    { "@type": "City", "name": "Orléans" },
                    { "@type": "AdministrativeArea", "name": "Loiret" },
                    { "@type": "Country", "name": "France" },
                ],
                "offers": {
                    "@type": "Offer",
                    "url": url,
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": minPrice,
                        "priceCurrency": "EUR",
                        ...(unitText ? { "unitText": unitText } : {}),
                    },
                },
            }} />
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                    { "@type": "ListItem", "position": 3, "name": name, "item": url },
                ],
            }} />
        </>
    );
}
