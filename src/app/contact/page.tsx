import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Contact et audit gratuit de votre site | Ambroise Boutrin, Orléans",
    description: "Parlez-moi de votre projet de site internet ou demandez un audit gratuit de votre site actuel. Développeur web freelance à Orléans.",
    path: "/contact",
});

export default function ContactPage() {
    return <ContactContent />;
}
