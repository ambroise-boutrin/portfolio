import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// Page conservée mais retirée du sitemap et de Google
export const metadata: Metadata = {
    ...pageMetadata({
        title: "Certifications | Ambroise Boutrin, développeur web",
        description: "Certifications d'Ambroise Boutrin, développeur web à Orléans : OpenClassrooms, W3C, ANSSI et autres formations suivies en continu.",
        path: "/certifications",
    }),
    robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
