import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // RoadLens was renamed to Project Z; keep old links and search results working.
  async redirects() {
    return [
      { source: "/ventures/roadlens", destination: "/ventures/project-z", permanent: true },
      { source: "/ventures/roadlens/:path*", destination: "/ventures/project-z/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
