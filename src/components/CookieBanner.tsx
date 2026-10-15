"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { clearAnalyticsCookies } from "@/lib/consent";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Small delay to not overwhelm user immediately
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShowBanner(false);
        // Dispatch custom event so other components (like GTM) can react without reload
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        clearAnalyticsCookies();
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-sm z-[100000]"
                >
                    <div className="bg-[var(--background)]/75 backdrop-blur-xl border border-[var(--border-color)] p-5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            {/* Animated circular Cookie icon container */}
                            <motion.div 
                                whileHover={{ rotate: 15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--foreground)]/5 border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)]"
                            >
                                <svg 
                                    className="w-5 h-5" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                                    <path d="M8.5 8.5v.01" />
                                    <path d="M16 15.5v.01" />
                                    <path d="M12 12v.01" />
                                    <path d="M11 17v.01" />
                                    <path d="M7 14v.01" />
                                </svg>
                            </motion.div>
                            
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold tracking-wide text-[var(--foreground)] font-serif mb-1">
                                    Confidentialité des Cookies
                                </h3>
                                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                                    Nous utilisons des cookies pour analyser l&apos;audience anonymement et améliorer votre navigation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-t border-[var(--border-color)]/50 pt-3">
                            <Link 
                                href="/mentions-legales"
                                className="text-[11px] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] underline transition-colors"
                            >
                                En savoir plus
                            </Link>
                            
                            <div className="flex gap-2">
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-1.5 rounded-full text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--foreground)]/30 transition-all duration-300 active:scale-[0.97]"
                                >
                                    Refuser
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-5 py-1.5 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 rounded-full text-xs font-bold transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
                                >
                                    Accepter
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

