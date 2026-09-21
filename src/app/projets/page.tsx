import ProjectsContent from "../../components/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Projets Web et Design | Ambroise B. Orléans",
    description: "Découvrez mon portfolio de projets web : Sites E-commerce de luxe, Applications SaaS et Design UI/UX. Réalisations concrètes d'un développeur freelance.",
    alternates: { canonical: '/projets' }
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}