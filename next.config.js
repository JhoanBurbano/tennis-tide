/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'burbanostudio-assets.s3.us-east-2.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
  },
};

module.exports = nextConfig;
