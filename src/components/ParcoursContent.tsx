"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";

const timeline = [
    {
        year: "2026",
        date: "Septembre 2026 - Juin 2027",
        title: "Licence MIAGE",
        company: "Université d'Orléans",
        type: "edu",
        description: "Formation en Méthodes Informatiques Appliquées à la Gestion des Entreprises. Double sensibilité technique et fonctionnelle pour les projets SI.",
        stack: ["Gestion de Projet", "SI", "Développement"]
    },
    {
        year: "2026",
        date: "2026",
        title: "Stage — Sopra Steria",
        company: "Sopra Steria, Paris La Défense",
        type: "work",
        description: "Automatisation de la sécurité : workflow de récupération d'alertes et génération automatique de rapports d'audit. DevOps : déploiement d'un outil de recherche par trigramme optimisé sur GitLab.",
        stack: ["Sécurité", "DevOps", "GitLab", "Automatisation"]
    },
    {
        year: "2026",
        date: "Depuis Janvier 2026",
        title: "Micro-entreprise — Solutions Web",
        company: "Freelance, Orléans",
        type: "work",
        description: "Conception et mise en ligne de sites web sur-mesure (vitrines et e-commerce). Gestion de projet client : recueil des besoins, cahiers des charges, devis et facturation.",
        stack: ["Next.js", "React", "E-commerce", "Gestion Client"]
    },
    {
        year: "2024",
        date: "Septembre 2024 - Juin 2026",
        title: "BTS SIO Option SLAM (Obtenu)",
        company: "Lycée Benjamin Franklin",
        type: "edu",
        description: "Brevet de Technicien Supérieur en Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.",
        stack: ["Java", "SQL", "C#", "Gestion de Projet"]
    },
    {
        year: "2024",
        date: "2024 - 2025",
        title: "Stage Développeur Fullstack",
        company: "ADENES, Lyon",
        type: "work",
        description: "Création d'un Add-in Outlook et d'une API REST pour l'archivage automatique de pièces jointes. Développement d'interfaces (HTML5/CSS3/W3C) et application des protocoles de sécurité.",
        stack: ["C#", ".NET", "API REST", "HTML5/CSS3"]
    },
    {
        year: "2023",
        date: "Septembre 2023 - Juin 2024",
        title: "BUT Informatique (1ère année)",
        company: "IUT d'Orléans",
        type: "edu",
        description: "Validation de la première année. Apprentissage des bases de l'algorithmique, du développement web et de la programmation système.",
        stack: ["C++", "HTML/CSS", "Linux"]
    },
    {
        year: "2019",
        date: "2019 - 2023",
        title: "Baccalauréat STI2D — Option SIN",
        company: "Lycée Sainte Croix - Sainte Euverte",
        type: "edu",
        description: "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable, option Systèmes d'Information et Numérique. Mention Assez Bien.",
        stack: ["Électronique", "Programmation", "SIN"]
    },
];

export default function ParcoursContent() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-24 md:pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[var(--foreground)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <ScrollReveal className="max-w-6xl mx-auto relative z-10">

                <header className="mb-16 md:mb-32 text-center">
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-8xl font-serif mb-6 text-[var(--foreground)] tracking-tight">
                            Parcours<span className="text-[var(--text-secondary)]">.</span>
                        </h1>
                        <p className="text-sm md:text-base font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                            Évolution constante &mdash; Du code à l'infrastructure.
                        </p>
                    </div>
                </header>

                <div className="relative">
                    {/* Central Line Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block"></div>
                    {/* Left Line Mobile - HIDDEN for Centered Layout */}
                    <div className="hidden"></div>

                    <div className="space-y-16 md:space-y-32">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ willChange: "transform, opacity" }}
                                className={`flex flex-col md:flex-row items-center gap-6 md:gap-20 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Mobile Dot - HIDDEN */}
                                <div className="hidden"></div>

                                {/* Year / Visual Side */}
                                <div className={`md:w-1/2 flex justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} w-full`}>
                                    <div className="relative z-20 w-full md:w-auto flex justify-center md:block">
                                        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4 md:p-6 rounded-2xl shadow-sm w-full md:max-w-sm relative group hover:scale-[1.02] transition-transform duration-300 text-center md:text-left">
                                            <span className="inline-block px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-md text-xs font-bold font-mono uppercase tracking-wider mb-2">
                                                {item.date}
                                            </span>
                                            <p className="text-xs md:text-sm text-[var(--text-secondary)] font-medium uppercase tracking-widest">{item.company}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`md:w-1/2 w-full text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--foreground)]">{item.title}</h3>
                                    <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md mx-auto md:mx-0 inline-block">
                                        {item.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        {item.stack.map((stack) => (
                                            <span key={stack} className="text-[10px] md:text-xs font-bold px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 flex justify-center">
                    <a
                        href="/images/fichiers/CV_Ambroise_Boutrin_MIAGE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-xl font-serif border-b border-[var(--text-secondary)] pb-1 hover:opacity-50 transition-opacity text-[var(--foreground)]"
                    >
                        <span className="w-12 h-12 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Download size={20} />
                        </span>
                        Voir version CV imprimable
                    </a>
                </div>

            </ScrollReveal>
        </main>
    );
}
