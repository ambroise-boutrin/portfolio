import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import RecentProjects from "@/components/RecentProjects";
import HomeOffers from "@/components/HomeOffers";
import { Metadata } from 'next';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Ambroise Boutrin | Développeur web freelance à Orléans, création de sites internet",
    description: "Développeur web freelance à Orléans (45). Création de sites internet pour artisans, commerçants et PME : site vitrine dès 1 490 €, refonte, e-commerce, maintenance et applications métier.",
    path: "/",
});

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Manifesto />
      <RecentProjects />
      <HomeOffers />
      {/* Services Component removed as requested, replaced by Packages in Services page */}
    </main>
  );
}
