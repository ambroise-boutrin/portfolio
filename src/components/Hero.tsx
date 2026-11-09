import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
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

            <div className="flex flex-col items-center justify-center text-center z-10 relative px-4">

                {/* Qui je suis, en petit : le titre parle du client */}
                <div className="flex items-center gap-2 text-[var(--foreground)] text-xs sm:text-sm font-medium uppercase tracking-wide mb-6">
                    <MapPin size={16} />
                    <span>Ambroise Boutrin · Développeur web à Orléans</span>
                </div>

                {/* Titre Principal */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--foreground)] leading-[0.95] tracking-tighter mb-4">
                    <div className="overflow-hidden">
                        <span className={`block ${LINE_1}`}>Des sites qui font</span>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <span className={`block text-[var(--text-secondary)] ${LINE_2}`}>venir des clients.</span>
                    </div>
                </h1>

                <p className="text-lg md:text-2xl font-light mb-8 text-[var(--foreground)] mt-4 max-w-3xl">
                    Pour les artisans, commerçants et TPE du Loiret : un site clair, trouvé sur Google, qui donne envie de vous appeler. Le prix est fixé avant de commencer.
                </p>

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
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIndicator />
            </div>

        </section >
    );
}