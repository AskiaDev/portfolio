"use client";

import { useState } from "react";
import Lanyard from "../blocks/Components/Lanyard/Lanyard";
import { sendEmail } from "../actions/email";

type FormState = "idle" | "loading" | "success" | "error";

export default function Home() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [formState, setFormState] = useState<FormState>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !message) {
			setFormState("error");
			return;
		}

		setFormState("loading");

		try {
			await sendEmail(email, message);
			setFormState("success");
			setEmail("");
			setMessage("");
		} catch (error) {
			console.error("Error sending email:", error);
			setFormState("error");
		}
	};

	// Reset form state after showing success/error
	const handleInputChange = () => {
		if (formState === "success" || formState === "error") {
			setFormState("idle");
		}
	};

	return (
		<div className="h-screen bg-black overflow-hidden">
			{/* Main Grid Container - Two Columns */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] h-full">
				{/* Left Column - Lanyard Component + Introduction */}
				<div className="bg-black border border-white/20 relative overflow-hidden flex flex-col">
					{/* Social Links - Top Left Corner */}
					<div className="absolute top-4 left-4 z-10 flex gap-2">
						{/* LinkedIn */}
						<a
							href="https://www.linkedin.com/in/askia-james-manjares-33232324b/"
							target="_blank"
							className="group w-10 h-10 bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg flex items-center justify-center hover:border-blue-400/50 transition-all duration-300 hover:bg-blue-900/50 backdrop-blur-sm"
						>
							<div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-xs">
									in
								</span>
							</div>
						</a>

						{/* GitHub */}
						<a
							href="https://github.com/AskiaDev"
							target="_blank"
							className="group w-10 h-10 bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-500/30 rounded-lg flex items-center justify-center hover:border-gray-400/50 transition-all duration-300 hover:bg-gray-900/50 backdrop-blur-sm"
						>
							<div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
								<svg
									className="w-3 h-3 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
								</svg>
							</div>
						</a>

						{/* Resume */}
						{/* <a
							href="#"
							className="group w-10 h-10 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg flex items-center justify-center hover:border-purple-400/50 transition-all duration-300 hover:bg-purple-900/50 backdrop-blur-sm"
						>
							<div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
								<svg
									className="w-3 h-3 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
						</a> */}
					</div>

					{/* Lanyard Container - 3/4 height */}
					<div className="flex-[3] relative overflow-hidden">
						<Lanyard
							position={[0, 0, 20]}
							gravity={[0, -50, 0]}
							imageScale={[1.8, 1.6]}
							imageOffset={[-0.4, -0.1]}
							imageRotation={Math.PI * 1}
							height="h-full"
						/>
					</div>

					{/* Introduction Section - 1/4 height */}
					<div className="flex-1 p-6 border-t border-white/20 bg-black/90 backdrop-blur-sm min-h-0">
						<div className="space-y-3">
							<h1 className="text-2xl font-bold text-white">
								Hi, I&apos;m Askia 👋
							</h1>
							<p className="text-sm text-gray-300 leading-relaxed">
								Software Engineer residing in the Philippines
								with a degree in Computer Engineering.
								Passionate about Full Stack Development and
								building innovative web applications that solve
								real-world problems.
							</p>
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									<span className="text-xs text-green-400">
										Available for opportunities
									</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<span className="text-xs text-blue-400">
										BS Computer Engineering (2020-2024)
									</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<span className="text-xs text-purple-400">
										Philippines 🇵🇭
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Column - Two Stacked Sections */}
				<div className="grid grid-rows-[2fr_1fr] h-full min-h-0">
					{/* Top Section - Work & Experience */}
					<div className="bg-black border border-white/20 p-6 overflow-y-auto min-h-0">
						<h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							Work & Experience
						</h2>

						<div className="space-y-6">
							{/* Experience Item 1 - TristynTech with Tree Structure */}
							<div className="border-l-2 border-blue-500/30 pl-4 space-y-4">
								{/* Company Header */}
								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-white font-medium text-lg">
											TristynTech
										</h3>
										<p className="text-xs text-gray-400">
											Aug 2024 - Present
										</p>
									</div>
									<span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
										1+ years
									</span>
								</div>

								{/* Lead Software Engineer - Current Role */}
								<div className="ml-4 border-l-2 border-green-500/40 pl-4 space-y-3">
									<div className="flex justify-between items-start">
										<h4 className="text-green-400 font-medium">
											Lead Software Engineer
										</h4>
										<span className="text-xs text-gray-400 bg-green-900/20 px-2 py-1 rounded">
											Apr 2025 - Present
										</span>
									</div>

									{/* Pomjuice Project */}
									<div className="bg-gray-900/30 border border-green-500/20 rounded-lg p-3 space-y-2">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full"></div>
											<h5 className="text-white font-medium text-sm">
												Pomjuice - AI Bookkeeper
												Assistant
											</h5>
										</div>
										<p className="text-xs text-gray-300 leading-relaxed">
											Leading development of an AI-powered
											bookkeeper assistant that helps
											business owners manage their
											finances. Implementing advanced
											prompt engineering and system design
											for optimal AI interactions with
											Plaid and QuickBooks integrations.
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
												OpenAI API
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												Google Gen AI
											</span>
											<span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
												Firebase
											</span>
											<span className="text-xs bg-gray-900/30 text-gray-300 px-2 py-1 rounded">
												Next.js
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												TypeScript
											</span>
											<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
												Node.js
											</span>
											<span className="text-xs bg-slate-900/30 text-slate-300 px-2 py-1 rounded">
												Shadcn
											</span>
										</div>
										<div className="flex flex-wrap gap-1 mt-2">
											<span className="text-xs bg-pink-900/30 text-pink-300 px-2 py-1 rounded">
												Prompt Engineering
											</span>
											<span className="text-xs bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded">
												System Design
											</span>
											<span className="text-xs bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded">
												Plaid Integration
											</span>
											<span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">
												QuickBooks API
											</span>
										</div>
										<div className="flex flex-wrap gap-1 mt-2">
											<span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
												Google Cloud Run
											</span>
											<span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
												Docker
											</span>
											<span className="text-xs bg-violet-900/30 text-violet-300 px-2 py-1 rounded">
												CI/CD Pipeline
											</span>
											<span className="text-xs bg-teal-900/30 text-teal-300 px-2 py-1 rounded">
												Artifact Registry
											</span>
										</div>
									</div>
								</div>

								{/* Full Stack Developer - Previous Role */}
								<div className="ml-4 border-l-2 border-blue-500/30 pl-4 space-y-2">
									<div className="flex justify-between items-start">
										<h4 className="text-blue-400 font-medium">
											Fullstack Developer
										</h4>
										<span className="text-xs text-gray-400 bg-blue-900/20 px-2 py-1 rounded">
											Aug 2024 - Apr 2025
										</span>
									</div>
									<p className="text-xs text-gray-300 leading-relaxed">
										Developed a full-stack monitoring system
										for geologists to track seismic events.
										Built efficient backend APIs serving
										millions of data points from Google
										Storage.
									</p>
									<div className="flex flex-wrap gap-1">
										<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
											Full-stack
										</span>
										<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
											Google Cloud
										</span>
										<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
											SEO
										</span>
									</div>
								</div>
							</div>

							{/* Experience Item 2 - Freelance Fullstack */}
							<div className="border-l-2 border-green-500/30 pl-4 space-y-2">
								<div className="flex justify-between items-start">
									<h3 className="text-white font-medium">
										Fullstack Developer
									</h3>
									<span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
										Jan 2024 - May 2024
									</span>
								</div>
								<p className="text-sm text-green-400">
									Freelance
								</p>
								<p className="text-xs text-gray-300 leading-relaxed">
									Built an Options Trading app with Next.js,
									TypeScript, and FastAPI. Integrated Supabase
									for auth, designed prediction algorithms,
									and implemented Cypress testing.
								</p>
								<div className="flex flex-wrap gap-1">
									<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
										Next.js
									</span>
									<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
										FastAPI
									</span>
									<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
										Supabase
									</span>
								</div>
							</div>

							{/* Experience Item 3 - Frontend Freelance */}
							<div className="border-l-2 border-purple-500/30 pl-4 space-y-2">
								<div className="flex justify-between items-start">
									<h3 className="text-white font-medium">
										Frontend Developer
									</h3>
									<span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
										Aug 2023 - May 2024
									</span>
								</div>
								<p className="text-sm text-purple-400">
									Freelance
								</p>
								<p className="text-xs text-gray-300 leading-relaxed">
									Developed reusable React components,
									integrated role-based authentication, and
									built CRUD APIs for seamless data
									management.
								</p>
								<div className="flex flex-wrap gap-1">
									<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
										React
									</span>
									<span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
										Authentication
									</span>
									<span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
										CRUD APIs
									</span>
								</div>
							</div>

							{/* Experience Item 4 - Internship */}
							<div className="border-l-2 border-yellow-500/30 pl-4 space-y-2">
								<div className="flex justify-between items-start">
									<h3 className="text-white font-medium">
										Frontend Engineer Intern
									</h3>
									<span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
										Sep 2023 - Dec 2023
									</span>
								</div>
								<p className="text-sm text-yellow-400">
									Lophils Inc.
								</p>
								<p className="text-xs text-gray-300 leading-relaxed">
									Implemented AWS Cognito authentication,
									integrated GraphQL APIs with AWS Amplify,
									and built responsive interfaces for enhanced
									user experience.
								</p>
								<div className="flex flex-wrap gap-1">
									<span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
										AWS Cognito
									</span>
									<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
										GraphQL
									</span>
									<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
										AWS Amplify
									</span>
								</div>
							</div>

							{/* Tech Stack Section */}
							<div className="pt-4 border-t border-white/10">
								<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
									<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
									Current Tech Stack
								</h4>
								<div className="space-y-4">
									{/* Frontend */}
									<div>
										<p className="text-xs text-orange-400 font-medium mb-2">
											Frontend
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												HTML
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												CSS
											</span>
											<span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
												TailwindCSS
											</span>
											<span className="text-xs bg-gray-900/30 text-gray-300 px-2 py-1 rounded">
												Next.js
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												TypeScript
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												React
											</span>
											<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
												Redux
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												MUI
											</span>
										</div>
									</div>

									{/* Backend & Database */}
									<div>
										<p className="text-xs text-green-400 font-medium mb-2">
											Backend & Database
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
												Node.js
											</span>
											<span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
												Go
											</span>
											<span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">
												Python
											</span>
											<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
												FastAPI
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												REST
											</span>
											<span className="text-xs bg-pink-900/30 text-pink-300 px-2 py-1 rounded">
												GraphQL
											</span>
											<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
												Supabase
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												PostgreSQL
											</span>
										</div>
									</div>

									{/* AI & Integrations */}
									<div>
										<p className="text-xs text-purple-400 font-medium mb-2">
											AI & Integrations
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
												OpenAI API
											</span>
											<span className="text-xs bg-pink-900/30 text-pink-300 px-2 py-1 rounded">
												Prompt Engineering
											</span>
											<span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
												Cloud Vision API
											</span>
										</div>
									</div>

									{/* APIs & Third-Party Integrations */}
									<div>
										<p className="text-xs text-yellow-400 font-medium mb-2">
											APIs & Third-Party Integrations
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded">
												Plaid API
											</span>
											<span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">
												QuickBooks API
											</span>
										</div>
									</div>

									{/* Cloud & DevOps */}
									<div>
										<p className="text-xs text-blue-400 font-medium mb-2">
											Cloud & DevOps
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
												AWS
											</span>
											<span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
												Google BigQuery
											</span>
											<span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">
												Google Cloud Run
											</span>
											<span className="text-xs bg-teal-900/30 text-teal-300 px-2 py-1 rounded">
												Artifact Registry
											</span>
											<span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
												Docker
											</span>
											<span className="text-xs bg-gray-900/30 text-gray-300 px-2 py-1 rounded">
												Git
											</span>
											<span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
												Cypress
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Section - Contact & Links */}
					<div className="bg-black border border-white/20 p-6 flex-shrink-0 overflow-y-auto">
						<div className="space-y-4">
							<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
								<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
								Send a Message
							</h3>

							{formState === "success" && (
								<div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mb-3">
									<p className="text-xs text-green-400 flex items-center gap-2">
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										Message sent successfully! I&apos;ll get
										back to you soon.
									</p>
								</div>
							)}

							{formState === "error" && (
								<div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 mb-3">
									<p className="text-xs text-red-400 flex items-center gap-2">
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
										Failed to send message. Please try again
										or contact me directly.
									</p>
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-3">
								<div>
									<label
										htmlFor="email"
										className="block text-xs text-gray-400 mb-1"
									>
										Your Email
									</label>
									<input
										type="email"
										id="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											handleInputChange();
										}}
										placeholder="your.email@example.com"
										required
										disabled={formState === "loading"}
										className="w-full bg-gray-900/50 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-xs text-gray-400 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										value={message}
										onChange={(e) => {
											setMessage(e.target.value);
											handleInputChange();
										}}
										placeholder="Tell me about your project or just say hello..."
										required
										disabled={formState === "loading"}
										className="w-full bg-gray-900/50 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
									></textarea>
								</div>

								<button
									type="submit"
									disabled={formState === "loading"}
									className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-lg transition-all duration-300 border border-white/20 font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{formState === "loading" ? (
										<>
											<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
											Sending...
										</>
									) : (
										<>
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
												/>
											</svg>
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
