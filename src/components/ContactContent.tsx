"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import Script from "next/script";

export default function ContactContent() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--foreground)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

            <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 relative z-10">

                {/* Left: Info */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-serif mb-10 tracking-tighter text-[var(--foreground)]">
                        Parlons <br />
                        <span className="italic text-[var(--text-secondary)]">Projets</span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-md leading-relaxed">
                        Vous avez une idée en tête ou vous cherchez un développeur pour rejoindre votre équipe ? N'hésitez pas à me contacter.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Email</span>
                                <a href="mailto:boutrinambroise@gmail.com" className="text-xl md:text-2xl font-serif text-[var(--foreground)]">boutrinambroise@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Téléphone</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">07 59 87 83 34</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Localisation</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">Orléans, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-1/2 bg-[var(--bg-secondary)] p-2 rounded-3xl md:mt-20 border border-[var(--border-color)] overflow-hidden">
                    <div className="calendly-inline-widget" data-url="https://calendly.com/boutrinambroise/30min" style={{ minWidth: "320px", height: "700px" }}></div>
                    <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                </div>

            </ScrollReveal>
        </main>
    );
}
