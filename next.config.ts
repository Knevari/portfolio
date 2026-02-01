import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - reactCompiler is a valid experimental feature
    reactCompiler: true,
  },
};

export default nextConfig;
