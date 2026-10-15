const GA_COOKIE_NAMES = new Set(["_ga", "_gid", "_gat"]);

const isGaCookie = (name: string) => GA_COOKIE_NAMES.has(name) || name.startsWith("_ga_");

/**
 * Efface les cookies Google Analytics (_ga, _gid, _gat, _ga_*) sur le chemin /
 * pour le host courant et pour le domaine parent (ex. .ambroise-boutrin.fr).
 * À appeler côté client quand le visiteur refuse ou retire son consentement.
 */
export function clearAnalyticsCookies(): void {
    if (typeof document === "undefined") return;

    const hostname = window.location.hostname;
    const parentDomain = hostname.replace(/^www\./, "");
    const domains: (string | null)[] = [null];
    // Pas d'attribut domain pour localhost ou une IP : le navigateur le refuserait.
    if (parentDomain.includes(".") && !/^\d+(\.\d+){3}$/.test(parentDomain)) {
        domains.push(`.${parentDomain}`);
    }

    const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
    const names = document.cookie
        .split(";")
        .map((part) => part.split("=")[0]?.trim())
        .filter((name): name is string => !!name && isGaCookie(name));

    for (const name of new Set([...GA_COOKIE_NAMES, ...names])) {
        for (const domain of domains) {
            document.cookie = `${name}=; ${expires}; max-age=0; path=/${domain ? `; domain=${domain}` : ""}`;
        }
    }
}
