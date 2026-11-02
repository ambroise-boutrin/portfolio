"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { projects, isClientProject, type Project } from "@/data/projects";
import ScrollIndicator from "@/components/ScrollIndicator";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const isLightBg = ['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5), ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col group h-full"
        >
            <div
                className={`flex flex-col relative w-full h-full rounded-[2rem] p-6 md:p-8 shadow-xl hover:shadow-2xl border border-[var(--border-color)] transition-all duration-500 overflow-hidden ${isLightBg ? 'bg-[var(--bg-secondary)] text-[var(--foreground)]' : `${project.color} ${project.textColor}`}`}
            >
                {/* Clickable Overlay */}
                <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-50 cursor-pointer" aria-label={`Voir le détail du projet ${project.title}`} />

                {/* Card Image Cover Header */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-black/5 border border-white/10">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.imageAlt || `Aperçu du projet ${project.title}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 45vw"
                            priority={index < 2}
                            loading={index < 2 ? undefined : "lazy"}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)]/5 text-[var(--foreground)]/10 font-serif text-7xl select-none">
                            {project.title.charAt(0)}
                        </div>
                    )}

                    {/* Tech tag floating on image */}
                    <div className="absolute top-4 left-4 z-20 overflow-hidden rounded-full">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3.5 py-1 text-[9px] font-mono uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            {project.mainTech}
                        </div>
                    </div>
                </div>

                {/* Card Contents */}
                <div className="flex flex-col flex-1">
                    {/* Header info */}
                    <div className="flex justify-between items-start mb-3 gap-2 relative z-30">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight transition-colors duration-300 pr-6">
                            {project.title}
                        </h3>
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 group-hover:rotate-45 ${isLightBg ? 'bg-[var(--foreground)] text-[var(--background)]' : 'bg-white text-black'}`}
                        >
                            <ArrowUpRight size={18} />
                        </div>
                    </div>

                    {/* Subtitle/Category */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 mb-4 block">
                        {project.category}
                    </span>

                    {/* Brief description */}
                    <p className="text-sm md:text-base opacity-80 leading-relaxed line-clamp-3 mb-6">
                        {project.description}
                    </p>

                    {/* Tech list footer */}
                    <div className="flex flex-wrap gap-1.5 justify-start mt-auto">
                        {project.tech.map((t: string, i: number) => (
                            <span key={i} className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-mono tracking-wider uppercase ${isLightBg ? 'bg-[var(--foreground)]/5 text-[var(--foreground)]/70' : 'bg-white/10 text-white/90'}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const byNewest = (a: Project, b: Project) => (parseInt(b.id) || 0) - (parseInt(a.id) || 0);
const clientProjects = projects.filter(isClientProject).sort(byNewest);
const trainingProjects = projects.filter((p) => !isClientProject(p)).sort(byNewest);

const ProjectSection = ({ title, intro, items }: { title: string; intro: string; items: Project[] }) => (
    <section className="container mx-auto px-6 mt-16 md:mt-24 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-[var(--border-color)] pb-6">
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)]">
                {title} <span className="text-[var(--text-tertiary)] text-xl md:text-2xl align-middle">{items.length}</span>
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-md">{intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {items.map((project, i) => (
                <ProjectCard key={project.id} index={i} project={project} />
            ))}
        </div>
    </section>
);

export default function ProjectsContent() {
    return (
        <main className="relative mt-20 bg-[var(--background)] overflow-x-hidden pb-12">
            {/* Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="container mx-auto px-6 pt-24 md:pt-32 mb-8 md:mb-12">
                <div className="text-center">
                    <h1 className="text-5xl md:text-8xl font-serif mb-6 text-[var(--foreground)] tracking-tight">
                        Travaux<span className="text-[var(--text-secondary)]">.</span>
                    </h1>
                    <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                        D&apos;abord les sites et outils réalisés pour des entreprises et des associations, puis mes projets de formation.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <ScrollIndicator />
                    </div>
                </div>
            </div>

            <ProjectSection
                title="Projets clients"
                intro="Réalisés pour de vraies entreprises et associations, en stage ou en freelance."
                items={clientProjects}
            />

            <ProjectSection
                title="Projets de formation"
                intro="Réalisés pendant mes études ou sur mon temps libre, pour apprendre et tester de nouvelles techniques."
                items={trainingProjects}
            />

            {/* Next Section Cue */}
            <div className="h-[60vh] md:h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center border-t border-[var(--border-color)] mt-20">
                <div className="text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[var(--foreground)]">Vous avez un projet similaire ?</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
                        >
                            Demander un devis <ArrowUpRight size={20} />
                        </Link>
                        <a
                            href="/images/fichiers/CV_Ambroise_Boutrin_MIAGE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[var(--foreground)] pb-1 hover:opacity-50 transition-opacity text-lg text-[var(--foreground)]"
                        >
                            Ou consulter mon CV
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
