"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, Receipt, KeyRound, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const facts = [
    { value: "Orléans", label: "Basé dans le Loiret" },
    { value: "13", label: "Projets réalisés" },
    { value: "MIAGE", label: "Informatique et gestion" },
    { value: "24h", label: "Délai de réponse" }
];

const story = [
    {
        year: "2019",
        title: "Les débuts",
        text: "Bac STI2D option numérique à Orléans. Je découvre que j'aime construire des choses qui servent vraiment."
    },
    {
        year: "2024",
        title: "Le terrain",
        text: "BTS SIO et stage chez ADENES à Lyon : un complément Outlook qui archive automatiquement les pièces jointes. Mon premier outil utilisé au quotidien par une équipe."
    },
    {
        year: "2026",
        title: "La grande entreprise",
        text: "Stage chez Sopra Steria à La Défense : automatisation de rapports de sécurité et déploiement d'outils internes. J'y apprends la rigueur des gros projets."
    },
    {
        year: "Aujourd'hui",
        title: "Le freelance",
        text: "Je mets cette expérience au service des artisans, TPE et PME, tout en poursuivant une Licence MIAGE à l'Université d'Orléans."
    }
];

const commitments = [
    {
        icon: <MessageCircle className="w-5 h-5" />,
        title: "Un seul interlocuteur",
        text: "Vous parlez directement à la personne qui fabrique votre site. Pas de commercial, pas de sous-traitance cachée."
    },
    {
        icon: <Receipt className="w-5 h-5" />,
        title: "Un prix annoncé d'avance",
        text: "Un devis forfaitaire clair avant de commencer. Ce qui est signé est ce que vous payez."
    },
    {
        icon: <KeyRound className="w-5 h-5" />,
        title: "Votre site vous appartient",
        text: "Code, nom de domaine, contenus : tout est à votre nom. Vous restez libre, même si nous arrêtons de travailler ensemble."
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: "Disponible près de chez vous",
        text: "Basé à Orléans, je peux vous rencontrer en personne dans le Loiret et le Centre-Val de Loire."
    }
];

export default function AboutPage() {
    return (
        <main className="bg-[var(--background)] min-h-screen pb-24 transition-colors duration-300">
            {/* Hero */}
            <header className="pt-32 pb-16 md:pb-24 border-b border-[var(--border-color)]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">
                            À propos
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-tight leading-tight text-[var(--foreground)]">
                            Bonjour, moi c’est Ambroise<span className="opacity-30">.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                            Je suis développeur web freelance à Orléans. Je crée des sites et des outils pour les artisans, les commerçants et les PME qui veulent être trouvés sur internet et gagner du temps au quotidien.
                        </p>
                        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
                            Je viens de l’informatique de gestion : avant d’écrire une ligne de code, je cherche à comprendre comment votre entreprise fonctionne et ce qui vous ferait gagner des clients.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                            >
                                Parlons de votre projet <ArrowUpRight size={16} />
                            </Link>
                            <Link
                                href="/projets"
                                className="px-8 py-4 border border-[var(--border-color)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:border-[var(--foreground)] transition-colors"
                            >
                                Voir mes réalisations
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-sm mx-auto"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-[var(--border-color)] shadow-2xl">
                            <Image
                                src="/images/IMG_4128.jpeg"
                                alt="Ambroise Boutrin, développeur web freelance à Orléans"
                                fill
                                sizes="(max-width: 1024px) 100vw, 380px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Key facts */}
            <section className="border-b border-[var(--border-color)]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
                    {facts.map((fact, i) => (
                        <div
                            key={i}
                            className={`py-10 md:py-12 px-4 text-center border-[var(--border-color)] ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
                        >
                            <div className="text-3xl md:text-4xl font-serif text-[var(--foreground)] mb-2">{fact.value}</div>
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{fact.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
                <div>
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">Mon parcours</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] leading-tight mb-6">
                        De l’école <span className="opacity-30">au terrain.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        J’ai appris le métier en entreprise, sur des outils utilisés tous les jours. C’est cette exigence que j’applique à chaque site.
                    </p>
                    <a href="/images/fichiers/CV_Ambroise_Boutrin_MIAGE.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--foreground)] border-b border-[var(--border-color)] hover:border-[var(--foreground)] pb-1 transition-colors">
                        Télécharger mon CV <ArrowUpRight size={14} />
                    </a>
                </div>

                <ol className="relative border-l border-[var(--border-color)] ml-2 space-y-10">
                    {story.map((step, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="pl-8 relative"
                        >
                            <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[var(--foreground)]"></span>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{step.year}</span>
                            <h3 className="text-xl md:text-2xl font-serif text-[var(--foreground)] mt-1 mb-2">{step.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">{step.text}</p>
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* Commitments */}
            <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-32">
                <div className="mb-12">
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">Travailler ensemble</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] leading-tight">
                        Ce que je vous garantis<span className="opacity-30">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {commitments.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="flex gap-5 rounded-3xl border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 transition-colors"
                        >
                            <div className="shrink-0 h-fit p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-[var(--foreground)] mb-2">{item.title}</h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl md:rounded-[3rem] bg-[var(--foreground)] text-[var(--background)] p-10 md:p-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight leading-tight text-[var(--background)]">
                        Votre site actuel vous rapporte-t-il des clients ?
                    </h2>
                    <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto mb-10 text-[var(--background)]">
                        Je vous envoie gratuitement un audit d’une page : vitesse, affichage mobile, référencement local et fiche Google. Sans engagement.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform"
                    >
                        Demander mon audit gratuit <ArrowUpRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
