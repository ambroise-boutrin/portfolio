import ServicesContent from "@/components/ServicesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Création Site Internet Orléans | Services Web et Mobile - Ambroise B.",
    description: "Ambroise Boutrin, développeur web à Orléans (45). Création de sites internet vitrines, E-commerce et applications mobiles sur mesure. Devis gratuit.",
    alternates: { canonical: '/services' }
};

export default function ServicesPage() {
    return (
        <ServicesContent />
    );
}
