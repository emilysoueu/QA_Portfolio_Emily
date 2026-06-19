/** @type {import('next').NextConfig} */

// IMPORTANT (GitHub Pages):
// If you deploy to https://<user>.github.io/<repo>/ (project page), GitHub Pages
// serves your site from a sub-path, so basePath/assetPrefix MUST match your repo name.
// If you deploy to a custom domain or to <user>.github.io (user/org page), set
// BASE_PATH to an empty string instead.
const REPO_NAME = 'QA_Portfolio_Emily'; // <-- change to your exact GitHub repo name
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? `/${REPO_NAME}` : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
