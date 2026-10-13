import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Documents privés servis par une route protégée, hors de public/ */
  outputFileTracingIncludes: {
    "/prive/guide-azure-stack": ["./private/**/*"],
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
