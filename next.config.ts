import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a self-contained server.js in .next/standalone for Docker
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://76.13.17.59:9090/:path*",
      },
    ];
  },
};

export default nextConfig;
