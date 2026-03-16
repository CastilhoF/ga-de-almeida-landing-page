import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	allowedDevOrigins: ["http://192.168.15.11:3000"],
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
