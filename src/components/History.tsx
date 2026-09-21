"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function History() {
    return (
        <section className="py-32 px-6 bg-[var(--background)] relative overflow-hidden">
            <ScrollReveal className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4 text-[var(--foreground)]">À Propos</h2>
                    <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-[0.2em]">Philosophie & Méthode</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Story Side */}
                    <div className="order-2 md:order-1 space-y-8 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ willChange: "transform, opacity" }}
                        >
                            <h3 className="text-2xl font-serif italic mb-4 text-[var(--foreground)]">Futur étudiant en L3 MIAGE, passionné par l'innovation.</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                                Après l'obtention d'un BTS SIO et un an de BUT Informatique, je m'oriente vers la L3 MIAGE à l'Université d'Orléans. Fort de stages chez Sopra Steria (Paris La Défense) et ADENES (Lyon), je maîtrise le développement d'applications, l'intégration d'APIs et l'automatisation de processus. En parallèle, je gère ma micro-entreprise de création de sites web.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ willChange: "transform, opacity" }}
                        >
                            <h4 className="text-xl font-bold mb-2 text-[var(--foreground)]">Ma Vision</h4>
                            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                                La MIAGE me permet d'allier rigueur technique et sensibilité fonctionnelle. Je vois chaque projet comme une opportunité de combiner développement logiciel, gestion de projet Agile et compréhension des enjeux métiers. Mon objectif : créer des solutions SI concrètes, performantes et élégantes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ willChange: "transform, opacity" }}
                        >
                            <div className="p-6 bg-[var(--bg-secondary)] border-l-4 border-[var(--foreground)] italic text-[var(--text-primary)]">
                                "Mon ambition ? Allier technique et fonctionnel pour concevoir des systèmes d'information qui font la différence."
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual/Key Points Side */}
                    <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
                        {[
                            { title: "Apprentissage", desc: "Une soif constante de nouvelles connaissances et de défis techniques." },
                            { title: "Curiosité", desc: "Explorer au-delà des cours pour maîtriser les outils de demain." },
                            { title: "Engagement", desc: "S'investir à 100% dans chaque projet, scolaire ou personnel." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                style={{ willChange: "transform, opacity" }}
                                className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)] hover:border-[var(--foreground)] transition-colors"
                            >
                                <h4 className="text-xl font-serif font-bold mb-2 text-[var(--foreground)]">{item.title}</h4>
                                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </ScrollReveal>
        </section>
    );
}
