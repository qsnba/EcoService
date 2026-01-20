/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 确保输出模式为 export
  output: "export",

  // 2. 必须关闭图片优化，否则部署到 GitHub Pages 会报错
  images: { unoptimized: true },

  // 3. 重要：绝对不要在这里写 basePath 或 assetPrefix
  // 这样 Next.js 才会默认把所有资源放在根目录 (/)
};

// 如果你的文件后缀是 .js，用这行：
module.exports = nextConfig;

// 如果你的文件后缀是 .mjs，用下面这行（二选一）：
// export default nextConfig;