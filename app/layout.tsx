import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
	title: "Askia James Manjares — Full-Stack Engineer",
	description:
		"Full-stack engineer with 2+ years building production systems across AI/LLM, commerce, and enterprise. Available for work.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
		>
			<body className="font-sans antialiased bg-paper text-ink">
				<Suspense fallback={null}>
					{children}
					<Analytics />
				</Suspense>
				<GrainOverlay />
				<Cursor />
			</body>
		</html>
	);
}
