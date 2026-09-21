"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Check, SlidersHorizontal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data/projects";
import ScrollIndicator from "@/components/ScrollIndicator";

// Register ScrollTrigger for GSAP
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ALL_CATEGORY = "Tous";
const categories = [
    ALL_CATEGORY,
    ...Array.from(new Set(projects.map((p) => p.category)))
];

const sortOptions = [
    { value: "default", label: "Plus récents" },
    { value: "oldest", label: "Plus anciens" },
    { value: "az", label: "Nom de A à Z" },
    { value: "za", label: "Nom de Z à A" }
];

const ProjectCard = ({ project, index }: any) => {
    const isLightBg = ['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
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

export default function ProjectsContent() {
    const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
    const [sortOrder, setSortOrder] = useState("default");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredAndSortedProjects = useMemo(() => {
        let result = activeCategory === ALL_CATEGORY
            ? [...projects]
            : projects.filter((p) => p.category === activeCategory);

        if (sortOrder === "az") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === "za") {
            result.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortOrder === "oldest") {
            result.sort((a, b) => (parseInt(a.id) || 0) - (parseInt(b.id) || 0));
        } else {
            result.sort((a, b) => (parseInt(b.id) || 0) - (parseInt(a.id) || 0));
        }

        return result;
    }, [activeCategory, sortOrder]);

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { [ALL_CATEGORY]: projects.length };
        projects.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, []);

    const handleCategoryChange = useCallback((category: string) => {
        setActiveCategory(category);
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);
    }, []);

    const activeSortLabel = useMemo(() => {
        return sortOptions.find(o => o.value === sortOrder)?.label || "Trier";
    }, [sortOrder]);

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
                    <p className="text-sm md:text-base font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                        Sélection R&D et Clients &mdash; Problèmes complexes, solutions simples.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <ScrollIndicator />
                    </div>
                </div>
            </div>

            {/* Sticky Filter & Sort Bar */}
            <div className="sticky top-[64px] z-30 backdrop-blur-xl bg-[var(--background)]/80 border-y border-[var(--border-color)]">
                <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    {/* Category Filter Navigation */}
                    <div className="flex items-center w-full md:w-auto overflow-x-auto no-scrollbar py-1">
                        <div className="flex gap-1 md:gap-2 mx-auto md:mx-0">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryChange(cat)}
                                        className={`
                                            relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider
                                            transition-colors duration-300 ease-out cursor-pointer whitespace-nowrap
                                            ${isActive ? "text-[var(--background)]" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}
                                        `}
                                    >
                                        {/* Animated background bubble */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCategoryBg"
                                                className="absolute inset-0 bg-[var(--foreground)] rounded-full z-0"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            {cat}
                                            <span className={`
                                                text-[9px] font-bold px-1.5 py-0.5 rounded-full
                                                ${isActive ? "bg-[var(--background)]/20 text-[var(--background)]" : "bg-[var(--foreground)]/5 text-[var(--text-tertiary)]"}
                                            `}>
                                                {categoryCounts[cat] || 0}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Premium Sorting Dropdown */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[var(--border-color)] pt-3 md:pt-0">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
                            {filteredAndSortedProjects.length} projet{filteredAndSortedProjects.length > 1 ? "s" : ""}
                        </span>

                        <div ref={dropdownRef} className="relative z-40">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] hover:border-[var(--foreground)] rounded-full text-xs font-mono uppercase tracking-wider text-[var(--foreground)] transition-colors duration-300 cursor-pointer"
                            >
                                <SlidersHorizontal size={12} className="opacity-60" />
                                <span>{activeSortLabel}</span>
                                <ChevronDown size={14} className={`opacity-60 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute right-0 mt-2 w-48 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] shadow-2xl p-2"
                                    >
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => {
                                                    setSortOrder(option.value);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                                            >
                                                <span>{option.label}</span>
                                                {sortOrder === option.value && <Check size={14} className="text-[var(--foreground)]" />}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Asymmetric Grid */}
            <div className="container mx-auto px-6 mt-16 max-w-[1400px]">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <AnimatePresence>
                        {filteredAndSortedProjects.length > 0 ? (
                            filteredAndSortedProjects.map((project, i) => (
                                <ProjectCard key={project.id} index={i} project={project} />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="col-span-1 md:col-span-2 flex items-center justify-center py-32 text-center w-full"
                            >
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif text-[var(--text-tertiary)] mb-4">∅</p>
                                    <p className="text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                                        Aucun projet trouvé
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

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
