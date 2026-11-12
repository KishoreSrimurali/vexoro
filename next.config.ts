import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old signed PDF terms were replaced by the public /terms page.
      { source: "/terms-of-service.pdf", destination: "/terms", permanent: true },
      // RoadLens was replaced by Project Z, and the road-data buyer page was retired.
      { source: "/ventures/roadlens/:path*", destination: "/ventures/project-z", permanent: true },
      { source: "/ventures/project-z/data", destination: "/ventures/project-z", permanent: true },
    ];
  },
};

export default nextConfig;
