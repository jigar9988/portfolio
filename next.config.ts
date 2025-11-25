import type { NextConfig } from "next";




const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  // reactCompiler: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
