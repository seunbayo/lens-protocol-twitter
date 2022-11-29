/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_SITE_URL : "",
};
