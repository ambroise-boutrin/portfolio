import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import ParallaxItem from "@/components/ParallaxItem";
import ScrollIndicator from "@/components/ScrollIndicator";

// Animation d'apparition en CSS pur (keyframes dans globals.css), easing proche du "expo.out" de GSAP.
// motion-safe : aucune animation si prefers-reduced-motion. fill-mode "both" : l'état initial
// masqué n'existe que pendant l'animation, le contenu reste visible sans JS.
// Classes écrites en entier : Tailwind les détecte statiquement (pas d'interpolation).
const LINE_1 = "motion-safe:animate-[hero-line-reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]";
const LINE_2 = "motion-safe:animate-[hero-line-reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]";
const LINKS = "motion-safe:animate-[hero-fade-up_1s_cubic-bezier(0.16,1,0.3,1)_1s_both]";

export default function Hero() {
    return (
        <section className="min-h-screen py-16 flex items-center justify-center relative overflow-hidden">

            {/* Fond Grid Géométrique */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,var(--background),transparent)]"></div>

            <div className="flex flex-col items-center justify-center text-center z-10 relative px-4">

                {/* Titre Principal */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[var(--foreground)] leading-[0.9] tracking-tighter mb-4">
                    <div className="overflow-hidden">
                        <span className={`block ${LINE_1}`}>Ambroise</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className={`block italic text-[var(--text-secondary)] ${LINE_2}`}>Boutrin</span>
                    </div>
                </h1>

                <h2 className="text-xl md:text-3xl font-light mb-6 text-[var(--foreground)] mt-4 max-w-3xl">
                    Développeur Web Freelance à Orléans | Des sites performants pour générer plus de <span className="font-semibold text-[var(--text-secondary)]">chiffre d’affaires</span>.
                </h2>

                {/* Localisation */}
                <div className="flex items-center gap-2 text-[var(--foreground)] text-sm font-medium uppercase tracking-wide mb-6">
                    <MapPin size={16} />
                    <span>Orléans, France</span>
                </div>

                {/* Boutons d'action */}
                <ParallaxItem offset={0} className="w-full">
                    <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center w-full ${LINKS}`}>

                        {/* Bouton Projets (Inverse) */}
                        <Link href="/contact" className="group relative">
                            <div className="bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all cursor-pointer hover:scale-105 active:scale-95">
                                Démarrer mon projet
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Bouton Contact (Outline interactif) */}
                        <Link href="/projets">
                            <div className="px-8 py-4 rounded-full font-medium border border-[var(--border-color)] hover:border-[var(--foreground)] bg-[var(--bg-secondary)] backdrop-blur-sm text-[var(--foreground)] transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
                                Voir mes réalisations
                            </div>
                        </Link>
                    </div>
                </ParallaxItem>

                {/* Réseaux Sociaux */}
                <div className="mt-8 flex gap-6 text-[var(--text-secondary)] justify-center pb-4">
                    <a href="https://github.com/ambroise-boutrin" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] hover:scale-110 transition-all duration-300 p-2" aria-label="Profil GitHub d'Ambroise Boutrin">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ambroise-boutrin/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] hover:scale-110 transition-all duration-300 p-2" aria-label="Profil LinkedIn d'Ambroise Boutrin">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIndicator />
            </div>

        </section >
    );
}