/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
