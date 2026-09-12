import type { NextConfig } from "next";

// When deploying to GitHub Pages (e.g. https://<username>.github.io/portfolio/)
// Next.js needs basePath and assetPrefix so all images, CSS, and JS resolve to /portfolio/...
const isProd = process.env.NODE_ENV === "production";
const getBasePath = () => {
  if (!isProd) return "";
  if (process.env.NEXT_PUBLIC_BASE_PATH) return process.env.NEXT_PUBLIC_BASE_PATH;
  if (process.env.BASE_PATH) return process.env.BASE_PATH;
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    if (repo && !repo.toLowerCase().endsWith(".github.io")) {
      return `/${repo}`;
    }
    return "";
  }
  return "/portfolio";
};

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;


