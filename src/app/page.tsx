import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import RecentProjects from "@/components/RecentProjects";
import HomeOffers from "@/components/HomeOffers";
import { Metadata } from 'next';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Développeur web freelance à Orléans | Ambroise Boutrin",
    description: "Développeur web freelance à Orléans (45) : sites internet pour artisans, commerçants et PME, refonte, e-commerce et applications métier. Prix fixé d'avance.",
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
