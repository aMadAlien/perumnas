import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  sassOptions: {},
  images: {
    domains: ['images.pexels.com', 'www.pexels.com'],
  }
};

export default nextConfig;
