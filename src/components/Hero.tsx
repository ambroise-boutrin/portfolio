"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ParallaxItem from "@/components/ParallaxItem";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            // Title Reveal (Staggered lines)
            // Title Reveal (Staggered lines)
            if (titleRef.current) {
                const titleLines = titleRef.current.querySelectorAll(".reveal-text");
                tl.fromTo(titleLines,
                    { y: "100%" },
                    { y: "0%", duration: 1.5, stagger: 0.1, delay: 0.2 }
                );
            }

            // Subtitle Reveal
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=1"
                );
            }

            // Links
            if (linksRef.current) {
                tl.fromTo(linksRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.8"
                );
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen py-16 flex items-center justify-center relative overflow-hidden">

            {/* Fond Grid Géométrique */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,var(--background),transparent)]"></div>

            <div className="flex flex-col items-center justify-center text-center z-10 relative px-4">

                {/* Titre Principal */}
                <h1 ref={titleRef} className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[var(--foreground)] leading-[0.9] tracking-tighter mb-4">
                    <div className="overflow-hidden">
                        <span className="block reveal-text">Ambroise</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="block italic text-[var(--text-secondary)] reveal-text">Boutrin</span>
                    </div>
                </h1>

                <h2 ref={subtitleRef} className="text-xl md:text-3xl font-light mb-6 text-[var(--foreground)] mt-4 max-w-3xl">
                    Développeur Web Freelance à Orléans | Des sites performants pour générer plus de <span className="font-semibold text-[var(--text-secondary)]">chiffre d'affaires</span>.
                </h2>

                {/* Localisation */}
                <div className="flex items-center gap-2 text-[var(--foreground)] text-sm font-medium uppercase tracking-wide mb-6">
                    <MapPin size={16} />
                    <span>Orléans, France</span>
                </div>

                {/* Boutons d'action */}
                <ParallaxItem offset={0} className="w-full">
                    <div ref={linksRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full opacity-0">

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