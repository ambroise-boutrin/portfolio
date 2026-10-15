"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    offset?: number; // How much it moves (e.g. 50px)
}

export default function ParallaxItem({ children, className = "", offset = 50 }: ParallaxProps) {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false); // Default to false to match server SS

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={isMobile ? undefined : { y }}>
                {children}
            </motion.div>
        </div>
    );
}
