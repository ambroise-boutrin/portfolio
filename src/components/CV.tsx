"use client";

import Image from "next/image";
import { ArrowUpRight, Zap, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
    { title: "Cadrage strict", desc: "Avant de coder, nous définissons vos objectifs, votre cible et le cahier des charges. Pas de mauvaises surprises, tout est validé.", icon: "01" },
    { title: "Transparence totale", desc: "Vous avez accès à un espace de suivi de projet. Vous êtes impliqué à chaque étape via des points réguliers. Vous gardez le contrôle.", icon: "02" },
    { title: "Livraison et Formation", desc: "La livraison inclut systématiquement une formation pour vous rendre autonome sur la gestion de votre outil.", icon: "03" }
];

export default function AboutPage() {
    return (
        <main className="bg-[var(--background)] min-h-screen pb-24 transition-colors duration-300">
            {/* Hero Section */}
            <header className="bg-[var(--background)] text-[var(--foreground)] pt-32 pb-20 md:pb-32 mb-16 md:mb-24 border-b border-[var(--border-color)] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--foreground),transparent)] opacity-[0.03] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-3/5"
                        >
                            <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6 border-b border-[var(--border-color)] pb-2 inline-block">
                                Le partenaire de votre croissance
                            </span>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 tracking-tight leading-tight">
                                Du code pour <span className="opacity-30 italic">développer</span> votre chiffre d'affaires.
                            </h1>
                            <p className="text-lg md:text-2xl text-[var(--text-secondary)] max-w-2xl leading-relaxed font-light mb-8">
                                Je suis Ambroise Boutrin. Mon objectif n'est pas seulement de créer une "jolie vitrine", mais de concevoir un <span className="text-[var(--foreground)] font-normal">outil digital ultra-performant avec un vrai retour sur investissement (ROI)</span>.
                            </p>
                            <p className="text-sm md:text-base text-[var(--text-tertiary)] max-w-xl leading-relaxed font-mono opacity-80">
                                // Profil Hybride : Freelance et Licence 3 MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises). Une compréhension intime de vos enjeux de rentabilité et de vos process métiers.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-2/5 w-full max-w-md mx-auto"
                        >
                            <div className="relative aspect-[3/4] w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-[var(--border-color)] group shadow-2xl glass-panel">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                                <Image
                                    src="/images/IMG_4128.jpeg"
                                    alt="Ambroise Boutrin - Développeur Web B2B"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
                                    priority
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border-color)] text-[var(--foreground)] px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-lg">
                                        Basé à Orléans, France
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>



            {/* La Stack Technique (Bénéfices) */}
            <div className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
                <div className="mb-16">
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-4">Architecture Technique</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] tracking-tight">
                        La technologie au service <br className="hidden md:block"/><span className="opacity-30">de vos résultats.</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-xl">
                        Je ne vends pas des langages de programmation, je fournis des bénéfices concrets pour votre entreprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 md:p-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)]">Vitesse et Conversion</h3>
                            </div>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-1">
                            Un site lent fait fuir vos clients. Je garantis des temps de chargement éclair, réduisant le taux de rebond et augmentant vos ventes.
                        </p>
                        <div className="h-px w-full bg-[var(--border-color)] mb-8"></div>
                        <ul className="space-y-4">
                            {["Next.js", "React", "Tailwind CSS"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--foreground)] opacity-80">
                                    <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 md:p-10 shadow-2xl ring-1 ring-[var(--foreground)]/5 border-[var(--foreground)]/20"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                <Target className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)]">Logique Métier</h3>
                            </div>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-1">
                            Espace client, CRM sur-mesure ou gestion de données complexes. Une fiabilité à toute épreuve pour vos processus critiques.
                        </p>
                        <div className="h-px w-full bg-[var(--border-color)] mb-8"></div>
                        <ul className="space-y-4">
                            {["Node.js", "Python", "C# .NET"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--foreground)] opacity-80">
                                    <div className="w-1 h-1 bg-[var(--foreground)] rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 md:p-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)]">Sécurité et Continuité</h3>
                            </div>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-1">
                            Vos données sont précieuses. Architectures robustes, sécurisées et prêtes à évoluer avec la croissance de votre activité.
                        </p>
                        <div className="h-px w-full bg-[var(--border-color)] mb-8"></div>
                        <ul className="space-y-4">
                            {["Docker", "MySQL", "GitLab CI"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--foreground)] opacity-80">
                                    <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Visual Process Section */}
            <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div>
                        <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">Méthodologie</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-8 leading-tight">
                            Un accompagnement <span className="opacity-30">de A à Z.</span>
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                            Une approche transparente en 3 étapes pour garantir la réussite de votre transformation digitale.
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
                        <span className="text-[10px] md:text-xs font-mono opacity-40 uppercase tracking-[0.4em] block mb-6 md:mb-8 text-[var(--background)]">Prêt à digitaliser votre entreprise ?</span>
                        <h2 className="text-3xl md:text-6xl lg:text-8xl font-serif mb-8 md:mb-12 tracking-tight leading-tight text-[var(--background)]">
                            Réservez un <span className="opacity-40 italic font-serif">Audit Gratuit</span> <br className="hidden md:block" /> de 15 minutes.
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 group"
                            >
                                Voir les disponibilités <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
