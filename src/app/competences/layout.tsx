import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Compétences techniques | Ambroise Boutrin, développeur web",
    description: "Technologies maîtrisées par Ambroise Boutrin, développeur web à Orléans : Next.js, React, Node.js, TypeScript, bases de données et outils de design.",
    path: "/competences",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
