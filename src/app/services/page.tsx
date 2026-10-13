import ServicesContent from "@/components/ServicesContent";
import { JsonLdScript } from "@/components/JsonLd";
import { faqs } from "@/data/faq";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Tarifs création site internet à Orléans | Ambroise Boutrin",
    description: "Site vitrine dès 1 490 € (800 € en offre de lancement), refonte ou e-commerce dès 1 990 €, maintenance dès 49 €/mois, application métier dès 5 000 €. Développeur web freelance à Orléans.",
    path: "/services",
});

export default function ServicesPage() {
    return (
        <>
            <JsonLdScript data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
                })),
            }} />
            <ServicesContent />
        </>
    );
}
