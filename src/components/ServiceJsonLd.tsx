import { JsonLdScript } from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';

// Données structurées d'une page d'offre : le service, son prix de départ et le fil d'Ariane.
export default function ServiceJsonLd({ name, description, path, minPrice, unitCode, unitText }: {
    name: string;
    description: string;
    path: string;
    minPrice: number;
    /** Code UN/CEFACT de l'unité de facturation (ex. "MON" = par mois). */
    unitCode?: string;
    /** @deprecated utiliser unitCode ; conservé pour compatibilité, traité comme un unitCode. */
    unitText?: string;
}) {
    const url = `${SITE_URL}${path}`;
    const code = unitCode ?? unitText;
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
                    "priceSpecification": code
                        ? {
                            "@type": "UnitPriceSpecification",
                            "minPrice": minPrice,
                            "priceCurrency": "EUR",
                            "unitCode": code,
                        }
                        : {
                            "@type": "PriceSpecification",
                            "minPrice": minPrice,
                            "priceCurrency": "EUR",
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
