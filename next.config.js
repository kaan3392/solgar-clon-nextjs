/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['assets.vercel.com',"online.solgar.com.tr","st.myideasoft.com","www.solgar.com"],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
