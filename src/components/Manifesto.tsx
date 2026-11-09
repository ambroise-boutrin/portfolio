"use client";

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import Image from "next/image";

export default function Manifesto() {
    return (
        <section id="manifesto" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">



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
                        <div className="absolute inset-0 border border-[var(--border-color)] rounded-lg bg-[var(--background)] overflow-hidden">
                                                        <Image
                                src="/images/IMG_4128.jpeg"
                                alt="Ambroise Boutrin"
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Manifesto Text */}
                    <div className="md:w-2/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-6xl lg:text-7xl font-serif text-[var(--foreground)] leading-[1.1] mb-6 md:mb-8 text-balance"
                        >
                            Je crée des sites et des outils web sur mesure
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 md:space-y-6 text-base md:text-xl text-[var(--text-secondary)] font-light max-w-2xl"
                        >
                            <p className="md:hidden">
                                Du design au code, je m&apos;occupe de tout.
                            </p>
                            <p className="hidden md:block">
                                Je m&apos;occupe du design comme du code, de la maquette à la mise en ligne.
                                Mon objectif : un site simple à utiliser, qui donne envie de vous contacter.
                            </p>
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
