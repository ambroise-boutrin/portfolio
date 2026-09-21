"use client";

import TransitionLink from "@/components/TransitionLink";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-[var(--border-color)] mt-20 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                <div className="text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] text-center md:text-left order-2 md:order-1 flex flex-col gap-1">
                    <span>&copy; 2026 Ambroise Boutrin</span>
                    <span className="text-[10px] opacity-70">Orléans, France</span>
                    <span className="text-[10px] opacity-70">SIRET : 101 033 504 00016</span>
                    <TransitionLink href="/mentions-legales" className="text-[10px] hover:text-[var(--foreground)] transition-colors underline mt-2">
                        Mentions Légales
                    </TransitionLink>
                </div>

                {/* Aesthetic Button - Centered */}
                <div className="flex justify-center order-1 md:order-2">
                    <TransitionLink
                        href="/contact"
                        className="group relative px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium overflow-hidden flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-[var(--text-secondary)] opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            Me Contacter
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </TransitionLink>
                </div>

                <div className="flex gap-4 text-sm font-medium items-center justify-center md:justify-end order-3 text-[var(--foreground)]">
                    <a href="https://github.com/ambroise-boutrin" target="_blank" rel="noopener noreferrer" aria-label="Github" className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/ambroise-boutrin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"><Linkedin size={18} /></a>
                    <a href="mailto:contact@ambroise-boutrin.fr" aria-label="Email" className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"><Mail size={18} /></a>
                </div>

            </div>
        </footer>
    );
}
