import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mes Services | Développement Web et Design | Ambroise B.",
    description: "Découvrez mes services en développement web, design d'interfaces et solutions numériques sur mesure à Orléans.",
    alternates: { canonical: '/services' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
