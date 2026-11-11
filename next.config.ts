import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old signed PDF terms were replaced by the public /terms page.
      { source: "/terms-of-service.pdf", destination: "/terms", permanent: true },
      // RoadLens was renamed to Project Z; keep old links and search results working.
      { source: "/ventures/roadlens", destination: "/ventures/project-z", permanent: true },
      { source: "/ventures/roadlens/:path*", destination: "/ventures/project-z/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
