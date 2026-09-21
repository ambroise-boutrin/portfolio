"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)]" : "bg-transparent"}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TransitionLink href="/" className="font-serif text-xl font-bold tracking-tighter text-[var(--foreground)] z-50">
                    AB.
                </TransitionLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-[var(--bg-secondary)]/50 backdrop-blur-sm p-1 rounded-full border border-[var(--border-color)] relative">
                    {[
                        { name: "Accueil", path: "/" },
                        { name: "Services", path: "/services" },
                        { name: "Projets", path: "/projets" },
                        { name: "À propos", path: "/a-propos" }
                    ].map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <TransitionLink
                                key={item.path}
                                href={item.path}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors z-10 ${isActive ? "text-[var(--background)]" : "text-[var(--foreground)] hover:text-[var(--text-secondary)]"}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-[var(--foreground)] rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item.name}
                            </TransitionLink>
                        );
                    })}

                    <div className="w-px h-4 bg-[var(--border-color)] mx-2"></div>

                    <TransitionLink href="/contact" className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity ml-2">
                        Contact
                    </TransitionLink>
                </div>
            </motion.nav>

            {/* Mobile Menu Button - Fixed to Top Right (OUTSIDE NAV) - Clean Icon Only */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center p-2 text-[var(--foreground)] hover:scale-105 transition-transform"
                style={{
                    position: 'fixed',
                    top: '0.75rem', // Moved up as requested
                    right: '0.75rem', // Moved right as requested
                    zIndex: 2147483647
                }}
                aria-label="Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2147483646] bg-[var(--background)]/95 backdrop-blur-xl flex flex-col justify-between p-6"
                    >
                        <div className="flex justify-end">
                            {/* Close button space reserved for fixed button */}
                        </div>

                        <nav className="flex flex-col gap-3 mt-16">
                            {[
                                { name: "Accueil", path: "/" },
                                { name: "Services", path: "/services" },
                                { name: "Projets", path: "/projets" },
                                { name: "À propos", path: "/a-propos" },
                                { name: "Contact", path: "/contact" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    <TransitionLink
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-serif font-bold text-[var(--foreground)] hover:opacity-50 transition-opacity block"
                                    >
                                        {item.name}
                                    </TransitionLink>
                                    <div className="h-px bg-[var(--border-color)] mt-2 w-full"></div>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mb-6"
                        >
                            <p className="text-sm font-mono uppercase text-[var(--text-secondary)] mb-2">Socials</p>
                            <div className="flex gap-4">
                                <a href="https://github.com" className="text-[var(--foreground)] text-lg underline">GitHub</a>
                                <a href="https://linkedin.com" className="text-[var(--foreground)] text-lg underline">LinkedIn</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
