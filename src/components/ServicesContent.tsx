"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Zap, Shield, Sparkles, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const packages = [
    {
        name: "Pack Visibilité",
        subtitle: "L'impact immédiat.",
        price: "800€",
        priceSuffix: "min.",
        description: "Idéal pour les artisans locaux. Un site vitrine performant pour présenter votre activité et capturer des leads.",
        features: ["Site Vitrine 1 à 5 pages", "Développement Next.js / Tailwind", "Formulaire de Contact et Calendly", "Optimisation Google My Business", "Optimisé Mobile et SEO Local", "Hébergement premium inclus"],
        cta: "Découvrir l'offre",
        link: "/creation-site-artisan",
        icon: <Zap className="w-5 h-5" />,
        isPopular: false
    },
    {
        name: "Pack Conversion",
        subtitle: "L'expérience e-commerce.",
        price: "2 000€",
        priceSuffix: "min.",
        description: "E-commerce ou refonte complexe. Une architecture solide et une direction artistique poussée pour maximiser vos ventes.",
        features: ["Boutique en Ligne / Refonte", "Intégration Paiement Sécurisé", "CMS (Gestion de contenu)", "Interactions Avancées", "Analytics et Conformité RGPD", "Optimisation des Performances"],
        cta: "Découvrir l'offre",
        link: "/application-metier-pme",
        icon: <Sparkles className="w-5 h-5" />,
        isPopular: true
    },
    {
        name: "Pack Sérénité",
        subtitle: "Maintenance et Assurance.",
        price: "49€",
        priceSuffix: "/ mois",
        description: "Une assurance indispensable pour votre activité en ligne. Sécurité, mises à jour et disponibilité garanties.",
        features: ["Hébergement Premium et SSL", "Sauvegardes Quotidiennes", "Mises à jour de Sécurité", "Monitoring Serveur 24/7", "1h d'intervention / mois", "Support Technique Prioritaire"],
        cta: "Découvrir l'offre",
        link: "/maintenance-site-web",
        icon: <Shield className="w-5 h-5" />,
        isPopular: false
    }
];

const steps = [
    { title: "Discovery", desc: "Analyse de vos besoins, audit et définition de la stratégie business.", icon: "01" },
    { title: "Design", desc: "Direction artistique et prototypage interactif pour valider l'expérience.", icon: "02" },
    { title: "Development", desc: "Intégration pixel-perfect, animations et développement backend robuste.", icon: "03" },
    { title: "Delivery", desc: "Tests rigoureux, mise en production et accompagnement post-lancement.", icon: "04" }
];

const faqs = [
    {
        question: "Comment facturez-vous vos prestations ?",
        answer: "Je ne facture pas au temps passé (TJM), mais au projet. Mes tarifs sont des forfaits clairs basés sur la valeur et le retour sur investissement que l'outil va vous apporter. Pas de mauvaise surprise ni de dépassement de budget."
    },
    {
        question: "Quels sont les délais habituels pour un projet ?",
        answer: "Pour un Pack Visibilité (site vitrine), comptez entre 2 et 4 semaines. Pour un Pack Conversion (e-commerce ou application métier), le délai varie de 1 à 3 mois selon la complexité. Un planning précis est validé dès le lancement."
    },
    {
        question: "Je n'y connais rien en informatique, allez-vous m'accompagner ?",
        answer: "Absolument. Mon rôle n'est pas de vous noyer sous un jargon technique. Je traduis vos enjeux business en solutions concrètes et je vous forme à l'utilisation de votre nouvel outil une fois celui-ci terminé."
    },
    {
        question: "Que se passe-t-il une fois le site en ligne ?",
        answer: "La livraison ne marque pas la fin de notre collaboration. Je propose un Pack Sérénité (maintenance) pour gérer l'hébergement, la sécurité et les mises à jour régulières. Vous pouvez vous concentrer sur votre métier, je m'occupe de la technique."
    },
    {
        question: "Acceptez-vous des clients en dehors de la région d'Orléans ?",
        answer: "Oui. Bien que je sois basé à Orléans et disponible pour des rendez-vous en présentiel dans le Centre-Val de Loire, je travaille régulièrement avec des entreprises dans toute la France grâce à des outils de collaboration à distance."
    }
];

export default function ServicesContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    return (
        <main className="bg-[var(--background)] min-h-screen pb-24 transition-colors duration-300">
            {/* Hero Section - Theme Aware */}
            <header className="bg-[var(--background)] text-[var(--foreground)] pt-32 pb-20 md:pb-32 mb-16 md:mb-24 border-b border-[var(--border-color)] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--foreground),transparent)] opacity-[0.03] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-9xl font-serif mb-6 md:mb-8 tracking-tight">
                            Services<span className="opacity-30">.</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-light">
                            Trois niveaux d'excellence pour transformer vos ambitions en <span className="text-[var(--foreground)] font-normal">solutions digitales d'exception</span>.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={`group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 md:p-10 ${pkg.isPopular ? 'shadow-2xl ring-1 ring-[var(--foreground)]/5 border-[var(--foreground)]/20' : ''}`}
                    >

                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                {pkg.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)]">{pkg.name}</h3>
                                <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)]">{pkg.subtitle}</p>
                            </div>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">{pkg.price}</span>
                            {pkg.priceSuffix && <span className="text-sm font-mono text-[var(--text-tertiary)] uppercase tracking-wider">{pkg.priceSuffix}</span>}
                        </div>

                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 min-h-[60px]">
                            {pkg.description}
                        </p>

                        <div className="h-px w-full bg-[var(--border-color)] mb-8"></div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {pkg.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 text-sm text-[var(--foreground)] group/item transition-colors">
                                    <div className="mt-1 p-0.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border-color)]">
                                        <Check size={12} className="text-[var(--text-tertiary)]" />
                                    </div>
                                    <span className="opacity-80 group-hover/item:opacity-100 transition-opacity">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={pkg.link}
                            className={`w-full py-4 flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-500 rounded-xl border ${pkg.isPopular
                                    ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] hover:bg-transparent hover:text-[var(--foreground)] shadow-lg'
                                    : 'border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]'
                                }`}
                        >
                            {pkg.cta} <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Visual Process Section */}
            <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div>
                        <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">Workflow Professionnel</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-8 leading-tight">
                            Une approche méticuleuse du <span className="opacity-30">Pixel au Code.</span>
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                            Chaque projet suit une méthodologie rigoureuse pour garantir des performances optimales et une expérience utilisateur inégalée.
                        </p>
                    </div>

                    <div className="space-y-8 relative">
                        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--border-color)] via-[var(--border-hover)] to-[var(--border-color)] hidden md:block"></div>

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 relative group"
                            >
                                <div className="w-14 h-14 shrink-0 rounded-full border border-[var(--border-color)] bg-[var(--background)] flex items-center justify-center font-serif text-xl text-[var(--text-tertiary)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-all duration-500 z-10 glass-panel shadow-xl">
                                    {step.icon}
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-xl font-serif text-[var(--foreground)] mb-2 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 mt-32 md:mt-48">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight">
                        Questions Fréquentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[var(--bg-secondary)] border-[var(--foreground)]/20' : 'bg-transparent border-[var(--border-color)] hover:border-[var(--border-hover)]'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-6 text-left"
                                >
                                    <h3 className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-[var(--foreground)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--foreground)]'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]' : 'bg-[var(--background)] text-[var(--foreground)] border-[var(--border-color)]'}`}>
                                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-2 text-[var(--text-secondary)] leading-relaxed text-sm md:text-base border-t border-[var(--border-color)]/50 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Final High-Impact CTA */}
            <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl md:rounded-[3rem] bg-[var(--foreground)] text-[var(--background)] p-8 md:p-24 text-center border border-[var(--border-color)] shadow-3xl"
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--background)] opacity-[0.03] blur-[120px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-[10px] md:text-xs font-mono opacity-40 uppercase tracking-[0.4em] block mb-6 md:mb-8 text-[var(--background)]">Prêt à passer au niveau supérieur ?</span>
                        <h2 className="text-3xl md:text-8xl font-serif mb-8 md:mb-12 tracking-tight leading-tight text-[var(--background)]">
                            Donnez à votre vision <br className="hidden md:block" /> la <span className="opacity-40">vitesse</span> qu'elle mérite.
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 group"
                            >
                                Commencer un projet <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <a
                                href="mailto:contact@ambroise-boutrin.fr"
                                className="opacity-60 hover:opacity-100 border-b border-[var(--background)]/20 pb-1 transition-all text-base md:text-lg font-light tracking-wide truncate max-w-full text-[var(--background)]"
                            >
                                contact@ambroise-boutrin.fr
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
