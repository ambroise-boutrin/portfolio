import AboutPage from "@/components/CV";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos - Ambroise Boutrin",
    description: "Développeur web freelance expert B2B. Transformation de problématiques complexes en outils digitaux ultra-performants.",
    alternates: { canonical: '/a-propos' }
};

export default function AProposPage() {
    return <AboutPage />;
}
