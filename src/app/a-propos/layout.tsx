import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mon Parcours | Ambroise B. - Développeur Web",
    description: "Découvrez mon parcours académique et professionnel, mes expériences en développement et mes certifications.",
    alternates: { canonical: '/parcours' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
