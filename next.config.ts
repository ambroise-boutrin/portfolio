import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Documents privés servis par une route protégée, hors de public/ */
  outputFileTracingIncludes: {
    "/prive/guide-azure-stack": ["./private/**/*"],
  },
  /* En-têtes de sécurité sur toutes les routes (pas de CSP : incompatible avec GTM en l'état) */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  /* Redirect non-www to www (fixes GSC "Page with redirect" issue) */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ambroise-boutrin.fr",
          },
        ],
        destination: "https://www.ambroise-boutrin.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
