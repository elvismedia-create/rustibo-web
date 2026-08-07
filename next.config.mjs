/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_OUTPUT === "export" ? { output: "export" } : {}),
  trailingSlash: true,
  images: {
    unoptimized: process.env.NEXT_OUTPUT === "export",
  },
  reactCompiler: true,
  // Cualquier otra configuración que ya tuvieras fuera de experimental
};

export default nextConfig;
