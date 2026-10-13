import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// Page conservée mais retirée des menus, du sitemap et de Google
export const metadata: Metadata = {
    ...pageMetadata({
        title: "Veille technologique IA et web | Ambroise Boutrin",
        description: "Veille technologique d'Ambroise Boutrin, développeur web à Orléans : les actualités marquantes de l'intelligence artificielle et du web, résumées chaque mois.",
        path: "/veille",
    }),
    robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
