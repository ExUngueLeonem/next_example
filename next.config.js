/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  reactStrictMode: true,
}

module.exports = nextConfig