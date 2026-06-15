import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization in dev to reduce memory usage
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  // Prevent Next from scanning the parent monorepo
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
