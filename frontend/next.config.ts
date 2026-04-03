import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactCompiler: !isDev,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
