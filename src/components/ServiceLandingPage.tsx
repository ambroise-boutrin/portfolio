"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import ContactContent from "./ContactContent";

export interface ServiceLandingProps {
    title: ReactNode;
    subtitle: string;
    description: string;
    benefits: { title: string; description: string; icon?: ReactNode }[];
    targetAudience: string;
    priceStartingAt: string;
    primaryCtaText: string;
    secondaryCtaText?: string;
    deliverables: string[];
}

export default function ServiceLandingPage({
    title,
    subtitle,
    description,
    benefits,
    targetAudience,
    priceStartingAt,
    primaryCtaText,
    deliverables
}: ServiceLandingProps) {
    return (
        <main className="bg-[var(--background)] min-h-screen">
            {/* Hero Section */}
            <header className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[var(--border-color)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--foreground),transparent)] opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] block mb-6">
                            {targetAudience}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif text-[var(--foreground)] mb-8 tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                            {subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform flex items-center gap-3 w-full sm:w-auto justify-center"
                            >
                                {primaryCtaText} <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#details"
                                className="px-8 py-4 border border-[var(--border-color)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[var(--bg-secondary)] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
                            >
                                En savoir plus <ChevronDown size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Description & Intro */}
            <section id="details" className="py-24 md:py-32 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] mb-8">L'enjeu.</h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        {description}
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--text-tertiary)] block mb-4">Valeur Ajoutée</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)]">Pourquoi choisir cette offre ?</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group relative p-8 md:p-10 rounded-3xl bg-[var(--background)] border border-[var(--border-color)] hover:border-[var(--foreground)]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Decorative background gradient */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--foreground)] opacity-0 group-hover:opacity-5 blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm">
                                    {benefit.icon || <CheckCircle2 size={24} />}
                                </div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)] mb-4">{benefit.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables & Pricing */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] mb-8">Ce qui est inclus</h2>
                        <ul className="space-y-6">
                            {deliverables.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 text-[var(--foreground)]">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-lg text-[var(--text-secondary)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="p-10 rounded-3xl bg-[var(--foreground)] text-[var(--background)] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-serif mb-2 relative z-10">Investissement</h3>
                        <p className="text-white/60 mb-8 relative z-10">Budget transparent et adapté.</p>
                        <div className="text-6xl font-serif mb-4 relative z-10">
                            À partir de {priceStartingAt}
                        </div>
                        <p className="text-white/80 text-sm mb-10 relative z-10">Paiement échelonné possible. Pas de frais cachés.</p>
                        
                        <Link
                            href="#contact"
                            className="inline-block px-10 py-5 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform relative z-10"
                        >
                            {primaryCtaText}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="border-t border-[var(--border-color)]">
                <ContactContent />
            </section>
        </main>
    );
}
