import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack: (config, { isServer }) => {
		// Handle GLB and GLTF files
		config.module.rules.push({
			test: /\.(glb|gltf)$/,
			type: "asset/resource",
			generator: {
				filename: "static/models/[name].[hash][ext]",
			},
		});

		// Handle binary files that GLB might reference
		config.module.rules.push({
			test: /\.(bin)$/,
			type: "asset/resource",
			generator: {
				filename: "static/models/[name].[hash][ext]",
			},
		});

		return config;
	},
	// Disable static optimization for pages using Three.js
	experimental: {
		esmExternals: false,
	},
};

export default nextConfig;
