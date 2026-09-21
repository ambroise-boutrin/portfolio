"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";


export interface ServiceLandingProps {
    title: ReactNode;
    subtitle: string;
    description: string;
    benefits: { title: string; description: string; image?: string; imageAlt?: string }[];
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
                                href="/contact"
                                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform flex items-center gap-3 w-full sm:w-auto justify-center"
                            >
                                {primaryCtaText} <ArrowRight size={16} />
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {benefits.map((benefit, index) => {
                            // Asymmetric grid: First item spans 8 cols, second 4, third spans 12 (or whatever fits 3 items best).
                            // Let's do: 1st item = 7 cols, 2nd = 5 cols, 3rd = 12 cols for a nice bento look.
                            let colSpan = "md:col-span-4";
                            if (benefits.length === 3) {
                                if (index === 0) colSpan = "md:col-span-7";
                                else if (index === 1) colSpan = "md:col-span-5";
                                else if (index === 2) colSpan = "md:col-span-12";
                            }

                            return (
                                <div key={index} className={`group relative p-8 md:p-12 rounded-3xl bg-[var(--background)] border border-[var(--border-color)] overflow-hidden flex flex-col justify-between ${colSpan}`}>
                                    {/* Image background if provided */}
                                    {benefit.image && (
                                        <div className="absolute inset-0 z-0 pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/90 to-transparent z-10"></div>
                                            <div className="absolute inset-0 bg-[var(--background)]/40 z-10"></div>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img 
                                                src={benefit.image} 
                                                alt={benefit.imageAlt || benefit.title} 
                                                className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                    )}

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="text-5xl md:text-7xl font-serif text-[var(--border-color)] opacity-50 mb-12 group-hover:text-[var(--foreground)] group-hover:opacity-20 transition-all duration-500">
                                            0{index + 1}
                                        </div>
                                        
                                        <div className="mt-auto md:max-w-xl">
                                            <h3 className="text-2xl md:text-3xl font-serif text-[var(--foreground)] mb-4">{benefit.title}</h3>
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
                            href="/contact"
                            className="inline-block px-10 py-5 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform relative z-10"
                        >
                            {primaryCtaText}
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
