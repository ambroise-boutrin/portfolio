import ProjectsContent from "../../components/ProjectsContent";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Réalisations : sites web et applications | Ambroise Boutrin, Orléans",
    description: "Portfolio d'Ambroise Boutrin, développeur web à Orléans : sites vitrines d'artisans, boutiques e-commerce, ERP et outils métier. Chaque projet avec le problème, la solution et le résultat.",
    path: "/projets",
});

export default function ProjectsPage() {
    return <ProjectsContent />;
}