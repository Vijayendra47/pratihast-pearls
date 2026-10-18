/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚡ रेज़रपे पैकेज को सर्वर बिल्ड ऑप्टिमाइज़र से बाहर रखने की मुख्य सेटिंग
  serverExternalPackages: ['razorpay'],
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
