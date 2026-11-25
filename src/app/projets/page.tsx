import ProjectsContent from "../../components/ProjectsContent";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Réalisations : sites et applications web | Ambroise Boutrin",
    description: "Sites vitrines, boutiques en ligne et outils métier réalisés par un développeur web à Orléans : pour chaque projet, le problème, la solution et le résultat.",
    path: "/projets",
});

export default function ProjectsPage() {
    return <ProjectsContent />;
}
