"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, Terminal, PenTool, ArrowUpRight } from "lucide-react";
import Link from "next/link";


// Updated Data Structure: No arbitrary percentages, focused on "Stacks"
const skillStacks = [
    {
        title: "Architecture et Backend",
        icon: <Database className="w-6 h-6" />,
        description: "Des fondations solides et sécurisées pour vos applications.",
        tags: ["Node.js", "Express", "Symfony / PHP", "PostgreSQL", "Supabase", "REST API", "Docker"]
    },
    {
        title: "Frontend et Expérience",
        icon: <Layout className="w-6 h-6" />,
        description: "Interfaces réactives et animations fluides pixel-perfect.",
        tags: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"]
    },
    {
        title: "Outils et Design",
        icon: <PenTool className="w-6 h-6" />,
        description: "Un workflow optimisé de la conception au déploiement.",
        tags: ["Figma", "Git / GitHub", "Vercel", "Agile / Scrum", "CI/CD", "VS Code"]
    }
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden bg-[var(--background)]">
            {/* Ambient Light */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[var(--foreground)] opacity-[0.02] blur-[200px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header - Compact et Impactful */}
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-8xl font-serif mb-6 tracking-tight text-[var(--foreground)]"
                    >
                        Expertise<span className="text-[var(--foreground)]/20">.</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-[var(--foreground)] w-24 mb-8 md:mx-0 mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-[var(--text-secondary)] max-w-2xl"
                    >
                        Une approche pragmatique du développement moderne. Pas de pourcentages arbitraires, juste une maîtrise des technologies qui comptent.
                    </motion.p>
                </div>

                {/* Innovative "Bento" Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {skillStacks.map((stack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[var(--bg-secondary)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-sm hover:shadow-2xl hover:border-[var(--foreground)]/20 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-10 -bottom-10 opacity-[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                                {index === 0 ? <Database size={200} /> : index === 1 ? <Layout size={200} /> : <Terminal size={200} />}
                            </div>

                            <div>
                                <div className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {stack.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">{stack.title}</h3>
                                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed text-sm md:text-base pr-4">
                                    {stack.description}
                                </p>
                            </div>

                            {/* Tags "Cloud" */}
                            <div className="flex flex-wrap gap-2 z-10">
                                {stack.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm font-medium text-[var(--foreground)]/80 shadow-sm group-hover:border-[var(--foreground)]/30 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>




                {/* Detailed Technical Arsenal */}
                <div className="mt-32">
                    <h2 className="text-4xl md:text-5xl font-serif mb-12 border-b border-[var(--border-color)] pb-6 text-[var(--foreground)]">Arsenal Technique Détaillé</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Frontend Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]">
                                <span className="w-2 h-2 bg-white rounded-full"></span> Frontend
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="React.js" level="Avancé" detail="Hooks, Context, Performance" />
                                <SkillItem name="Next.js" level="Avancé" detail="App Router, SSR, Server Actions" />
                                <SkillItem name="TypeScript" level="Intermédiaire" detail="Typage strict, Interfaces" />
                                <SkillItem name="Tailwind CSS" level="Note 10/10" detail="Design System, Responsive" />
                                <SkillItem name="Framer Motion" level="Passionné" detail="Micro-interactions, Layout animations" />
                                <SkillItem name="Vue.js" level="Basique" detail="Options API, Composition API" />
                            </ul>
                        </div>

                        {/* Backend Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span> Backend
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="Node.js" level="Intermédiaire" detail="Express, API REST" />
                                <SkillItem name="PHP / Symfony" level="Scolaire" detail="MVC, Doctrine, Twig" />
                                <SkillItem name="C# / .NET" level="Professionnel" detail="VSTO, WinForms, LINQ" />
                                <SkillItem name="Supabase" level="Fan" detail="Auth, Realtime DB, Edge Functions" />
                                <SkillItem name="Java" level="Scolaire" detail="POO, Swing, JDBC" />
                            </ul>
                        </div>

                        {/* Database et DevOps Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]">
                                <span className="w-2 h-2 bg-gray-600 rounded-full"></span> Ops et Data
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="PostgreSQL" level="Solide" detail="Relations, Indexing" />
                                <SkillItem name="MySQL" level="Standard" detail="Projets scolaires" />
                                <SkillItem name="Git" level="Quotidien" detail="Flow, Rebasing, Conflicts" />
                                <SkillItem name="Docker" level="Apprentissage" detail="Conteneurisation basique" />
                                <SkillItem name="Vercel" level="Expert" detail="Déploiement continu, Analytics" />
                            </ul>
                        </div>

                        {/* Tools et Soft Skills Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]">
                                <span className="w-2 h-2 border border-white/50 rounded-full"></span> Outils &+
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="Figma" level="Créatif" detail="Maquettage, Prototypage" />
                                <SkillItem name="VS Code" level="IDE" detail="Extensions, Debugging" />
                                <SkillItem name="Anglais" level="B2" detail="Documentation technique" />
                                <SkillItem name="Agile / Scrum" level="Vécu" detail="Sprints, Dailies" />
                                <SkillItem name="Curiosité" level="Infini" detail="Veille techno permanente" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final CTA - Business Oriented */}
                <div className="mt-32 mb-20 p-12 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-[var(--foreground)]">Un projet en tête ?</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 text-lg">
                            Transformons vos objectifs commerciaux en solution technique performante.
                            Devis gratuit et réponse sous 24h.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                        >
                            Demander un Devis <ArrowUpRight size={20} />
                        </Link>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--foreground)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
                </div>

                {/* Bottom spacer is minimal because Footer is right there */}
                <div className="h-20 md:h-0"></div>
            </div>
        </main >
    );
}

// Helper Component for the detailed list
function SkillItem({ name, level, detail }: { name: string, level: string, detail: string }) {
    return (
        <li className="border-b border-[var(--border-color)] pb-3 hover:pl-2 transition-all duration-300">
            <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-lg text-[var(--foreground)]">{name}</span>
                <span className="text-xs font-mono bg-[var(--foreground)]/5 px-2 py-0.5 rounded text-[var(--text-secondary)]">{level}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]/70 italic">{detail}</p>
        </li>
    );
}
