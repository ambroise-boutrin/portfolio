import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Contact | Ambroise Boutrin, développeur web à Orléans",
    description: "Parlez-moi de votre projet de site internet ou d'application : réponse sous 24 h ouvrées, devis gratuit. Développeur web freelance à Orléans.",
    path: "/contact",
});

export default function ContactPage() {
    return <ContactContent />;
}
