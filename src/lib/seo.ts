import type { Metadata } from "next";

export const SITE_URL = "https://www.ambroise-boutrin.fr";
export const SITE_NAME = "Ambroise Boutrin";

// Next remplace l'objet openGraph du layout dès qu'une page en définit un :
// ce helper redonne à chaque page un openGraph complet (url, titre, description propres).
export function pageMetadata({
    title,
    description,
    path,
    images,
}: {
    title: string;
    description: string;
    path: string;
    images?: { url: string; alt?: string }[];
}): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            locale: "fr_FR",
            siteName: SITE_NAME,
            url: path,
            title,
            description,
            images: images ?? [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ambroise Boutrin, développeur web freelance à Orléans" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
