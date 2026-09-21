"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck, Cpu, Code2, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const certifications = [
    {
        category: "Programmation et Fondamentaux",
        icon: <Code2 className="w-6 h-6" />,
        items: [
            { title: "W3C HTML / CSS", issuer: "W3Cx", date: "2024", detail: "Maîtrise des standards web et de l'accessibilité." },
            { title: "W3C Java / Python / SQL", issuer: "W3Cx", date: "2024", detail: "Bases solides en programmation impérative et structurée." },
            { title: "W3C C++", issuer: "W3Cx", date: "2024", detail: "Programmation système et gestion mémoire." }
        ]
    },
    {
        category: "Développement Moderne (OpenClassrooms)",
        icon: <Globe className="w-6 h-6" />,
        items: [
            { title: "JavaScript Évolué", issuer: "OpenClassrooms", date: "2024", detail: "ES6+, programmation asynchrone et manipulation du DOM." },
            { title: "Java et Programmation Orientée Objet", issuer: "OpenClassrooms", date: "2024", detail: "Conception logicielle et design patterns." },
            { title: "SQL et Bases de Données", issuer: "OpenClassrooms", date: "2024", detail: "Modélisation et optimisation de requêtes complexes." }
        ]
    },
    {
        category: "Méthodologies et Outils",
        icon: <Cpu className="w-6 h-6" />,
        items: [
            { title: "Agile et SCRUM", issuer: "OpenClassrooms", date: "2024", detail: "Gestion de projet itérative et travail en équipe." },
            { title: "Git et Versioning", issuer: "OpenClassrooms", date: "2024", detail: "Gestion de flux de travail collaboratifs." },
            { title: "Système Linux", issuer: "OpenClassrooms", date: "2024", detail: "Administration système de base et ligne de commande." }
        ]
    },
    {
        category: "Cybersécurité et Réseaux",
        icon: <ShieldCheck className="w-6 h-6" />,
        items: [
            { title: "SecNumacadémie", issuer: "ANSSI", date: "2024", detail: "Sensibilisation à la sécurité du numérique." },
            { title: "Réseaux TCP/IP", issuer: "OpenClassrooms", date: "2024", detail: "Compréhension des couches réseaux et protocoles." }
        ]
    }
];

export default function CertificationsContent() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-24 md:pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--foreground)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--foreground)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

            <ScrollReveal className="max-w-6xl mx-auto relative z-10">
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-serif mb-6 text-[var(--foreground)] tracking-tight">
                            Certifications<span className="text-[var(--text-secondary)]">.</span>
                        </h1>
                        <p className="text-sm md:text-base font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                            Validation des acquis &mdash; Apprentissage continu.
                        </p>
                    </motion.div>
                </header>

                <div className="space-y-24">
                    {certifications.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="relative">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] shadow-sm">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[var(--foreground)]">{section.category}</h2>
                                <div className="flex-grow h-px bg-[var(--border-color)] ml-4 opacity-50"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((cert, certIdx) => (
                                    <motion.div
                                        key={certIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: certIdx * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="group bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 rounded-3xl hover:border-[var(--foreground)]/20 transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors">
                                                    <Award size={24} />
                                                </div>
                                                <span className="font-mono text-xs text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full italic">
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:translate-x-1 transition-transform">{cert.title}</h3>
                                            <p className="text-sm text-[var(--text-secondary)] font-medium mb-4 italic uppercase tracking-wider">{cert.issuer}</p>
                                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                                                {cert.detail}
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex justify-between items-center">
                                            <span className="flex items-center gap-2 text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest">
                                                <CheckCircle size={14} className="text-green-500" /> Certifié
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA or Info */}
                <div className="mt-32 text-center">
                    <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-[0.3em] mb-8">Plus de certifications en cours...</p>
                    <div className="inline-block p-1 bg-[var(--bg-secondary)] rounded-full border border-[var(--border-color)]">
                        <div className="px-6 py-3 rounded-full bg-[var(--background)] flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-sm font-medium text-[var(--foreground)]">Actuellement en préparation du AZ-900 (Azure Fundamentals)</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
}
