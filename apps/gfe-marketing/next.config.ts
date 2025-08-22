import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      new URL("https://vaqybtnqyonvlwtskzmv.supabase.co/**"),
      new URL("https://jordhan2k.github.io/**"),
    ],
  },
};

export default nextConfig;
