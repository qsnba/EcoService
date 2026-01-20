/** @type {import('next').NextConfig} */
const repo = "EcoService"; // ⚠️ 改成你 GitHub 仓库的名字（不是用户名）

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  //basePath: `/${repo}`,
  //assetPrefix: `/${repo}/`,
};

module.exports = nextConfig;
