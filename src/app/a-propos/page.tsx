import AboutPage from "@/components/CV";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos - Ambroise Boutrin, développeur web à Orléans",
    description: "Développeur web freelance à Orléans, je crée des sites et des outils pour les artisans, commerçants et PME. Un seul interlocuteur, un prix annoncé d'avance.",
    alternates: { canonical: '/a-propos' }
};

export default function AProposPage() {
    return <AboutPage />;
}
