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

// Google affiche environ 60 caractères de titre et 155 de description.
// fitTitle prend la première variante entre 50 et 60 caractères, sinon la plus longue
// qui tient en 60, sinon la dernière (la plus courte, à écrire en dernier).
export function fitTitle(...candidates: string[]): string {
    const ideal = candidates.find((t) => t.length >= 50 && t.length <= 60);
    if (ideal) return ideal;
    const fitting = candidates.filter((t) => t.length <= 60).sort((a, b) => b.length - a.length);
    return fitting[0] ?? candidates[candidates.length - 1];
}
