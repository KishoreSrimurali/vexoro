import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old signed PDF terms were replaced by the public /terms page.
      { source: "/terms-of-service.pdf", destination: "/terms", permanent: true },
      // RoadLens became Project Z, which was renamed Bolio ai. The road-data buyer page was retired.
      { source: "/ventures/roadlens/:path*", destination: "/ventures/bolio-ai", permanent: true },
      { source: "/ventures/project-z/:path*", destination: "/ventures/bolio-ai", permanent: true },
    ];
  },
};

export default nextConfig;
