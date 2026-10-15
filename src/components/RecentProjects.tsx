"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function RecentProjects() {
    // Get the first 4 projects for the homepage
    const recentProjects = projects.slice(0, 4);

    return (
        <section className="py-24 md:py-32 bg-[var(--background)] relative z-10 overflow-hidden border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-8 block w-12"
                        >
                            02
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--foreground)] tracking-tight mb-6 leading-tight"
                        >
                            Travaux <span className="text-[var(--text-secondary)] italic">Sélectionnés.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pb-2 md:pb-6"
                    >
                        <Link
                            href="/projets"
                            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--foreground)] hover:text-[var(--text-secondary)] transition-colors"
                        >
                            <span className="relative overflow-hidden pb-1">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">Voir l’archive complète</span>
                                <span className="absolute inset-0 top-full transition-transform duration-300 group-hover:-translate-y-full">Voir l’archive complète</span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--foreground)] scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-300"></span>
                            </span>
                            <span className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-all duration-300">
                                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Asymmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {recentProjects.map((project, index) => {
                        // Determine spanning for asymmetrical layout:
                        // 1st: large (8 cols), 2nd: small (4 cols)
                        // 3rd: small (4 cols), 4th: large (8 cols)
                        const isLarge = index === 0 || index === 3;
                        const colSpanClass = isLarge ? "md:col-span-8" : "md:col-span-4";

                        // Adjust aspect ratios based on size.
                        // Since all images are now 16:9 desktop captures, we should use 16:9 for all of them to prevent cropping or awkward empty spaces.
                        // The primary difference will just be the column span (size on screen)
                        const aspectRatioClass = "aspect-[16/9]";

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className={`${colSpanClass} group flex flex-col`}
                            >
                                <Link href={`/projets/${project.slug}`} className="block h-full flex flex-col">
                                    <div className={`relative ${aspectRatioClass} w-full rounded-sm overflow-hidden mb-6 ${project.color} flex items-center justify-center border border-[var(--border-color)] bg-clip-border`}>

                                        {/* Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-20" />

                                        {/* Border reveal effect */}
                                        <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 z-20 pointer-events-none rounded-sm"></div>

                                        {project.image ? (
                                            <div className="relative w-full h-full p-4 md:p-8">
                                                <Image
                                                    src={project.image}
                                                    alt={project.imageAlt || project.title}
                                                    fill
                                                    className={`object-contain p-2 md:p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] z-0`}
                                                    sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                                                />
                                            </div>
                                        ) : (
                                            <div className={`text-6xl md:text-8xl font-serif ${project.textColor} opacity-30 select-none group-hover:scale-110 transition-transform duration-1000`}>
                                                {project.title.charAt(0)}
                                            </div>
                                        )}

                                        {/* Floating Badge (Tech) inside image area */}
                                        <div className="absolute top-6 left-6 z-20 overflow-hidden rounded-full">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                                {project.mainTech}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-1 px-2">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl md:text-3xl font-serif text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors duration-300 line-clamp-2 pr-6">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest opacity-70">
                                                {project.category}
                                            </span>
                                            <span className="h-px flex-1 bg-[var(--border-color)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
