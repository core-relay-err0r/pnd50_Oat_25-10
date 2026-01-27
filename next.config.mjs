/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // React Compiler disabled - requires babel-plugin-react-compiler package
  // reactCompiler: true,
  cacheComponents: true,
}

export default nextConfig
