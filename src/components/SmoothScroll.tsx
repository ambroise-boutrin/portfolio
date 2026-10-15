"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Only initialize Lenis on desktop browsers (width > 1024px)
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease for "heavier" feel
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            // Lenis gère lui-même sa boucle requestAnimationFrame (arrêtée par destroy())
            autoRaf: true,
        });

        lenisRef.current = lenis;

        return () => {
            lenisRef.current = null;
            lenis.destroy();
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
