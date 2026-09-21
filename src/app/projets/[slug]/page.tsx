import { projects } from "@/data/projects";
import { ExternalLink, Github, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { Metadata } from "next";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Projet non trouvé",
        };
    }

    return {
        title: `${project.title} - Portfolio Ambroise B.`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [{ url: project.image }] : [],
        },
        alternates: { canonical: `/projets/${slug}` },
    };
}
import ProjectJsonLd from "@/components/ProjectJsonLd";

const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, index) => {
        if (part.startsWith('```')) {
            const lines = part.split('\n');
            const language = lines[0].replace('```', '').trim();
            const code = lines.slice(1, -1).join('\n');
            return (
                <div key={index} className="my-4 bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#333]">
                    {language && (
                        <div className="px-4 py-1.5 bg-[#2d2d2d] text-xs text-gray-400 font-mono border-b border-[#333]">
                            {language}
                        </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-sm text-gray-300 font-mono">
                        <code>{code}</code>
                    </pre>
                </div>
            );
        }
        const formatText = (text: string) => {
            const boldRegex = /\*\*(.*?)\*\*/g;
            const segments = text.split(boldRegex);
            return segments.map((segment, i) => {
                if (i % 2 === 1) return <strong key={i} className="text-[var(--foreground)] font-bold">{segment}</strong>;
                return segment;
            });
        };
        return <p key={index} className="whitespace-pre-wrap leading-relaxed mb-6">{formatText(part)}</p>;
    });
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <ProjectJsonLd project={project} />

            {/* Hero Section */}
            <header className="bg-[var(--background)] text-[var(--foreground)] pt-32 pb-20 mb-20 transition-colors duration-300 border-b border-[var(--border-color)]">
                <div className="px-6 container mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="flex flex-wrap gap-4 items-center mb-4">
                            <span className="px-4 py-1.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-xs font-bold uppercase tracking-wider">
                                {project.category}
                            </span>
                            {project.role && (
                                <span className="px-4 py-1.5 border border-[var(--border-color)] rounded-full text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                                    {project.role}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
                            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight order-2 md:order-1">
                                {project.title}
                            </h1>
                            {project.logo && (
                                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 order-1 md:order-2">
                                    <Image
                                        src={project.logo}
                                        alt={`Logo ${project.title}`}
                                        fill
                                        className="object-contain"
                                        style={{ filter: project.invertLogo ? "brightness(0) invert(var(--logo-invert))" : "none" }}
                                    />
                                </div>
                            )}
                        </div>

                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="px-6 pb-32 container mx-auto max-w-4xl">

                {/* Long Description */}
                {project.longDescription && (
                    <div className="mb-16 text-lg text-[var(--text-secondary)]">
                        {renderContent(project.longDescription)}
                    </div>
                )}

                {/* Case Study / Étude de cas */}
                {project.caseStudy && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">
                            Étude de Cas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Problem */}
                            <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <AlertTriangle size={80} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 text-red-500">
                                        <AlertTriangle size={24} />
                                    </div>
                                    <h3 className="font-bold text-xl text-[var(--foreground)] mb-6">{project.caseStudy.problem.title}</h3>
                                    <ul className="space-y-4">
                                        {project.caseStudy.problem.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Lightbulb size={80} className="text-blue-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
                                        <Lightbulb size={24} />
                                    </div>
                                    <h3 className="font-bold text-xl text-[var(--foreground)] mb-6">{project.caseStudy.solution.title}</h3>
                                    <ul className="space-y-4">
                                        {project.caseStudy.solution.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Result */}
                            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp size={80} className="text-emerald-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-500">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3 className="font-bold text-xl text-[var(--foreground)] mb-6">{project.caseStudy.result.title}</h3>
                                    <ul className="space-y-4">
                                        {project.caseStudy.result.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Compétences / Points Clés */}
                {project.competences && project.competences.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">
                            Points Clés du Projet
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.competences.map((comp: any, i: number) => (
                                <div
                                    key={i}
                                    className="p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--foreground)]/20 transition-all duration-300 group"
                                >
                                    <div className="mb-5">
                                        <h3 className="font-bold text-lg text-[var(--foreground)] leading-snug">{comp.bloc}</h3>
                                    </div>
                                    <ul className="space-y-3 pl-1">
                                        {comp.items.map((item: string, j: number) => (
                                            <li key={j} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30 shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tech Stack Details */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Stack Technique</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.stackDetails ? (
                            project.stackDetails.map((item: any, i: number) => (
                                <div key={i} className="p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--foreground)]/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{item.name}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">{item.reason}</p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-[var(--text-secondary)] italic">Détails techniques non disponibles.</div>
                        )}
                    </div>
                </div>

                {/* Project Gallery */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Galerie</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((imgUrl: string, index: number) => (
                                <div key={index} className={`relative w-full overflow-hidden rounded-xl border border-[var(--border-color)] ${index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[16/9]"}`}>
                                    <Zoom wrapElement="span" classDialog="custom-zoom-overlay">
                                        <div className="relative w-full h-full aspect-[16/9]">
                                            <Image
                                                src={imgUrl}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                                sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                            />
                                        </div>
                                    </Zoom>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Project Video */}
                {(project as any).video && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Démonstration Vidéo</h2>
                        <div className="relative w-full overflow-hidden rounded-xl border border-[var(--border-color)] aspect-[16/9] bg-black">
                            <video 
                                src={(project as any).video} 
                                controls 
                                muted
                                className="w-full h-full object-contain"
                                preload="metadata"
                            >
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>
                        </div>
                    </div>
                )}

                {/* Deployment Documentation */}
                {(project as any).deploymentDocs && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Documentation de Déploiement</h2>
                        <div className="space-y-8">
                            {(project as any).deploymentDocs.map((doc: any, i: number) => (
                                <div key={i} className="p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)]">
                                    <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">{doc.step}</h3>
                                    <div className="text-[var(--text-secondary)]">
                                        {renderContent(doc.content)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA / Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                        >
                            Voir la Démo
                            <ExternalLink size={18} />
                        </a>
                    )}

                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-full font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[var(--bg-secondary)]/80 transition-colors text-[var(--foreground)]"
                        >
                            Voir le Code
                            <Github size={18} />
                        </a>
                    ) : (
                        <div className="px-8 py-4 bg-[var(--bg-secondary)] rounded-full font-bold uppercase tracking-wider text-[var(--text-secondary)]/50 flex items-center gap-3 cursor-not-allowed">
                            Code Privé (NDA)
                        </div>
                    )}
                </div>
            </section>

        </main>
    );
}
