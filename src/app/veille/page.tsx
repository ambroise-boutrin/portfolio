"use client";

import { motion } from "framer-motion";

interface Article {
    title: string;
    pubDate: string;
    thumbnail?: string;
    description: string;
    link: string;
}

const curatedArticles: Article[] = [
    {
        title: "Mistral AI tient son AI Now Summit au Carrousel du Louvre",
        pubDate: "2026-05-28T00:00:00Z",
        link: "https://ainowsummit.com/",
        thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
        description: "Le 28 mai 2026, la pépite française Mistral AI a réuni plus de 1 400 leaders au Carrousel du Louvre pour son premier AI Now Summit. La société a annoncé Vibe, sa nouvelle plateforme d'agents IA, des partenariats avec Airbus, BMW et ASML, et la construction d'un datacenter de 10 MW aux Ulis."
    },
    {
        title: "OpenAI lance GPT-5.5 et Google dévoile ses TPUs de 8e génération",
        pubDate: "2026-04-23T00:00:00Z",
        link: "https://openai.com/index/introducing-gpt-5-5/",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        description: "Le 23 avril 2026, OpenAI déploie GPT-5.5 (nom de code Spud), axé sur les capacités agentiques : planification multi-étapes, utilisation d'outils et travail complexe. Dans la foulée, Google tient son Cloud Next '26 et présente ses TPUs de 8e génération pour concurrencer Nvidia."
    },
    {
        title: "GPT-5.4 : l'IA prend le contrôle de votre ordinateur",
        pubDate: "2026-03-05T00:00:00Z",
        link: "https://openai.com/index/introducing-gpt-5-4/",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        description: "Le 5 mars 2026, OpenAI lance GPT-5.4 avec le contrôle natif d'ordinateur : le modèle peut cliquer, taper au clavier et naviguer dans les logiciels de manière autonome. Il obtient 75% au benchmark OSWorld. NVIDIA, à sa conférence GTC, mise sur les infrastructures pour systèmes agentiques."
    },
    {
        title: "GPT-5.3-Codex : le modèle de code qui participe à son propre entraînement",
        pubDate: "2026-02-05T00:00:00Z",
        link: "https://openai.com/index/introducing-gpt-5-3-codex/",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        description: "Le 5 février 2026, OpenAI dévoile GPT-5.3-Codex, un modèle de codage agentique capable de participer à sa propre boucle d'entraînement. C'est le premier modèle classifié « haute capacité » en cybersécurité. En parallèle, l'IA Act européen entre dans sa phase d'application concrète."
    },
    {
        title: "L'IA Act entre en application : les pratiques interdites sont désormais sanctionnées",
        pubDate: "2026-01-15T00:00:00Z",
        link: "https://artificialintelligenceact.eu/",
        thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
        description: "Début 2026, la réglementation européenne sur l'IA entre dans sa phase contraignante. Depuis février 2025, les pratiques interdites (scoring social, surveillance biométrique de masse) sont passibles de sanctions. Les entreprises doivent classifier leurs systèmes par niveau de risque. Meta suspend l'IA pour les adolescents."
    },
    {
        title: "GPT-5.2 et Gemini 3 Flash : la guerre des modèles de raisonnement",
        pubDate: "2025-12-11T00:00:00Z",
        link: "https://openai.com/index/introducing-gpt-5-2/",
        thumbnail: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800&auto=format&fit=crop",
        description: "Le 11 décembre 2025, OpenAI lance GPT-5.2 en urgence face à Google, qui déploie Gemini 3 Flash le 17 décembre. 2025 aura été l'année des modèles de raisonnement : 60% des jetons traités sont liés au raisonnement, contre 0% un an plus tôt. L'IA passe du simple chat à l'agent actif."
    },
    {
        title: "ChatGPT fête ses 3 ans : 800 millions d'utilisateurs et partenariat AWS de 38 Mds$",
        pubDate: "2025-11-30T00:00:00Z",
        link: "https://openai.com/index/chatgpt/",
        thumbnail: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800&auto=format&fit=crop",
        description: "Fin novembre 2025, ChatGPT célèbre ses trois ans avec plus de 800 millions d'utilisateurs hebdomadaires. OpenAI signe un partenariat de 38 milliards de dollars avec AWS pour l'infrastructure cloud. Google lance Gemini 3 Pro qui domine les classements. La première cyberattaque entièrement pilotée par IA est détectée."
    },
    {
        title: "OpenAI DevDay : ChatGPT devient une plateforme d'apps et lève 500 Mds$ de valorisation",
        pubDate: "2025-10-06T00:00:00Z",
        link: "https://openai.com/devday/",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        description: "Le 6 octobre 2025 à San Francisco, OpenAI transforme ChatGPT en plateforme avec un Apps SDK intégrant Spotify, Figma et Canva. La société lance GPT-5 Pro, Codex en disponibilité générale et AgentKit. OpenAI atteint une valorisation de 500 milliards de dollars et signe un accord massif avec AMD."
    },
    {
        title: "Sora 2 : OpenAI lance la génération vidéo avec audio synchronisé",
        pubDate: "2025-09-30T00:00:00Z",
        link: "https://openai.com/index/sora-2/",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
        description: "Le 30 septembre 2025, OpenAI lance Sora 2 avec génération vidéo synchronisée à l'audio et la fonction Cameo pour insérer son image dans les vidéos. Une app mobile type TikTok est lancée sur iOS. ChatGPT franchit les 750 millions d'utilisateurs hebdomadaires. 40% des travailleurs américains utilisent l'IA au quotidien."
    }
];

export default function VeillePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[var(--foreground)]">
                        Veille <span className="text-[var(--text-secondary)] italic">Technologique</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-3xl leading-relaxed">
                        Ma sélection d’articles et tendances majeures autour de l’intelligence artificielle et de son impact sur notre quotidien.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {curatedArticles.map((article, i) => (
                        <motion.a
                            key={i}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col group overflow-hidden relative h-full transition-all duration-300 hover:border-[var(--text-secondary)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {article.thumbnail && (
                                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-[var(--bg-secondary)] shrink-0">
                                    <img
                                        src={article.thumbnail}
                                        alt={article.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[10px] text-white uppercase tracking-widest font-bold">
                                        <span>Source</span>
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            <div className="flex-1 flex flex-col">
                                <p className="text-xs text-[var(--text-tertiary)] font-mono mb-3 uppercase tracking-tighter">
                                    {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                                <h2 className="text-xl font-bold mb-4 line-clamp-2 text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors leading-tight">
                                    {article.title}
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                                        {article.description}
                                    </p>
                                    <div className="pt-2 flex items-center text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] group-hover:text-[var(--foreground)] transition-colors">
                                        Consulter l’article original
                                        <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
}
