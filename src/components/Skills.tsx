"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Développement Logiciel et POO",
        skills: ["Java", "C#", "Python", "HTML/CSS", "JavaScript", "API REST"]
    },
    {
        name: "DevOps et Base de données",
        skills: ["Git", "GitLab CI", "MySQL", "MariaDB", "Docker", "Automatisation"]
    },
    {
        name: "Méthodes et Sécurité",
        skills: ["Agile / SCRUM", "Cybersécurité", "Gestion de Projet", "W3C", "Linux"]
    }
];

export default function Skills() {
    return (
        <section className="py-32 bg-[var(--background)] px-6">
            <ScrollReveal className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4 text-[var(--foreground)]">Stack Technique</h2>
                    <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-[0.2em]">Mon Arsenal de Développement</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[var(--bg-secondary)] rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[var(--foreground)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--foreground)]"></span>
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-sm font-medium text-[var(--foreground)] shadow-sm hover:scale-105 hover:border-[var(--foreground)]/50 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </ScrollReveal>
        </section>
    );
}
