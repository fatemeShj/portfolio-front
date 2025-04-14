/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "185.80.196.199",
        port: "1340",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
