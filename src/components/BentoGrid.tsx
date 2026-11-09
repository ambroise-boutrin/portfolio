"use client";

import { motion } from "framer-motion";

const pillars = [
    {
        id: "01",
        title: "Conseil",
        items: ["Audit du site actuel", "Plan des pages", "Devis et planning"]
    },
    {
        id: "02",
        title: "Design",
        items: ["Maquettes sur mesure", "Pensé mobile d'abord", "Animations sobres"]
    },
    {
        id: "03",
        title: "Développement",
        items: ["Fait sur mesure, sans modèle", "Textes et photos modifiables", "Pages légères et rapides"]
    },
    {
        id: "04",
        title: "Référencement",
        items: ["Bien placé sur Google dans votre ville", "Fiche Google à jour", "Un site qui peut évoluer"]
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
                        <h3 className="text-xl font-serif text-[var(--foreground)] mb-4">
                            {pillar.title}
                        </h3>
                        <ul className="space-y-2">
                            {pillar.items.map((item, i) => (
                                <li key={i} className="text-base text-[var(--text-secondary)]">
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
