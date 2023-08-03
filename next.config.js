/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["files.stripe.com", "wunderlustguitars.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
