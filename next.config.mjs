/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['github.com', 'avatars.githubusercontent.com'] },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] }
}
export default nextConfig
