"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ children, href, className, onClick, ...props }: TransitionLinkProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Ouverture dans un nouvel onglet / fenêtre : laisser le navigateur faire
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
            if (onClick) onClick();
            return;
        }

        e.preventDefault();

        // Call any additional onClick handler (e.g. closing mobile menu)
        if (onClick) onClick();

        // If already on the target page, skip the transition entirely
        if (pathname === href) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const body = document.querySelector("body");
        body?.classList.add("page-transition-exit");

        // Attente du rideau (sa transition CSS dure 0,5 s, cf. globals.css)
        await sleep(450);

        // Navigate
        router.push(href);

        // Safety fallback: if template doesn't unmount/remount (edge case),
        // force-remove the curtain class after a generous timeout
        setTimeout(() => {
            document.querySelector("body")?.classList.remove("page-transition-exit");
        }, 1500);
    };

    return (
        <Link
            onClick={handleTransition}
            href={href}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}
