import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Use unoptimized images for local files to avoid dev server hanging on large JPGs
    unoptimized: true,
  },
};

export default nextConfig;
