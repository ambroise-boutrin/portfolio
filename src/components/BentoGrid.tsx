"use client";

import { motion } from "framer-motion";

const pillars = [
    {
        id: "01",
        title: "Stratégie",
        items: ["Audit UX/UI", "Architecture de Marque", "Roadmap Produit"]
    },
    {
        id: "02",
        title: "Design",
        items: ["Direction Artistique", "UI et Web Design", "Interactions (Motion)"]
    },
    {
        id: "03",
        title: "Engineering",
        items: ["Next.js et React", "Headless CMS", "Performance Green IT"]
    },
    {
        id: "04",
        title: "Growth",
        items: ["SEO Technique", "Conversion (CRO)", "Scalabilité"]
    }
];

export default function BentoGrid() {
    return (
        <section className="w-full pt-8 pb-20 border-t border-[var(--border-color)] mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-8">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex flex-col group pr-4"
                    >
                        <span className="text-[10px] font-mono text-[var(--text-secondary)] mb-4 block opacity-50 uppercase tracking-widest border-b border-[var(--border-color)] pb-2 w-10 group-hover:w-full transition-all duration-700">
                            {pillar.id}
                        </span>
                        <h3 className="text-xl font-serif text-[var(--foreground)] mb-4">
                            {pillar.title}
                        </h3>
                        <ul className="space-y-2">
                            {pillar.items.map((item, i) => (
                                <li key={i} className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wide opacity-70 group-hover:opacity-100 group-hover:text-[var(--foreground)] transition-opacity duration-300">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
