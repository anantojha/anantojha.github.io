/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
}


