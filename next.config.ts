import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old signed PDF terms were replaced by the public /terms page.
  async redirects() {
    return [{ source: "/terms-of-service.pdf", destination: "/terms", permanent: true }];
  },
};

export default nextConfig;
