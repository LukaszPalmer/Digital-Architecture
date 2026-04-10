import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactCompiler: !isDev,
  // pdfkit reads AFM font data files via fs.readFileSync at runtime.
  // Turbopack/Webpack cannot follow those dynamic reads, so the module must
  // be left external and loaded through Node's native require.
  serverExternalPackages: ["pdfkit"],
};

export default nextConfig;
