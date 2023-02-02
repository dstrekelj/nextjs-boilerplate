/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    /** @see https://github.com/vercel/next.js/discussions/11113#discussioncomment-1727286 */
    tsconfigPath: './tsconfig.build.json',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
