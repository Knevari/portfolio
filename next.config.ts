import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: "/home/knevari/Desktop/Projects/portfolio",
  },
};

export default withNextIntl(nextConfig);
