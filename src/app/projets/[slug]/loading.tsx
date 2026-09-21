import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--foreground)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-6">
                <Loader2 className="w-12 h-12 text-[var(--foreground)] animate-spin" />
                <h1 className="text-2xl md:text-3xl font-serif text-[var(--foreground)] animate-pulse tracking-tight">
                    Chargement du projet...
                </h1>
            </div>
        </main>
    );
}
