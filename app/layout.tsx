import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/toaster";
import { GrainOverlay } from "@/components/grain-overlay";
import { Cursor } from "@/components/cursor";
import { Suspense } from "react";
import "./globals.css";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
	display: "swap",
	axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
	title: "Askia James Manjares — Index 001",
	description:
		"Full-stack engineer building systems across AI/LLM, commerce, and enterprise.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`dark ${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
		>
			<body className="font-sans antialiased bg-ink text-bone selection:bg-acid selection:text-ink">
				<Suspense fallback={null}>
					{children}
					<Toaster />
					<Analytics />
				</Suspense>
				<GrainOverlay />
				<Cursor />
			</body>
		</html>
	);
}
