"use client";

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import Image from "next/image";

export default function Manifesto() {
    return (
        <section id="manifesto" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">

            {/* Background Texture over the whole section */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>


            <div className="container mx-auto px-6 relative z-10">

                {/* Intro / Profile Split */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 md:mb-32 items-center">

                    {/* Portrait Slot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3 aspect-[3/4] relative group"
                    >
                        <div className="absolute inset-0 border border-[var(--border-color)] rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                        <div className="absolute inset-0 border border-[var(--border-color)] rounded-sm bg-[var(--background)] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Placeholder Image - User can replace src */}
                            <Image
                                src="/images/IMG_4128.jpeg"
                                alt="Ambroise Boutrin"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Fallback visual if no image */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-[var(--foreground)]/10 font-serif text-9xl">A.</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Manifesto Text */}
                    <div className="md:w-2/3">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-6xl lg:text-7xl font-serif text-[var(--foreground)] leading-[1.1] mb-6 md:mb-8 text-balance"
                        >
                            Je construis des écosystèmes digitaux <span className="text-[var(--text-secondary)] italic">remarquables.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 md:space-y-6 text-base md:text-xl text-[var(--text-secondary)] font-light max-w-2xl"
                        >
                            <p className="md:hidden">
                                Au-delà du code, je façonne des identités digitales.
                            </p>
                            <p className="hidden md:block">
                                Au-delà du code et du design, je façonne des identités.
                                Mon approche fusionne rigueur technique et sensibilité artistique pour créer des plateformes qui convertissent.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <span className="h-px w-12 bg-[var(--border-color)]"></span>
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)]">Ambroise Boutrin</span>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className="w-full mb-10">
                    <BentoGrid />
                </div>

            </div>
        </section>
    );
}
