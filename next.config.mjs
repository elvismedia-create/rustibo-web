/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  // Cualquier otra configuración que ya tuvieras fuera de experimental
};

export default nextConfig;
