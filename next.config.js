/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // 1. 保留原本 2025 的專屬路徑 (例如： /2025/about)
      {
        source: '/2025/:path*',
        destination: '/2025/:path*',
      },
      // 2. 將未指定年份的所有主網址請求，預設全都導向 2025 的全新網站
      {
        source: '/:path*',
        destination: '/2025/:path*',
      },
    ];
  },
}

module.exports = nextConfig
