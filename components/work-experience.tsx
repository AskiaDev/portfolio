"use client";

import { motion } from "motion/react";

const ease = [0.25, 1, 0.3, 1] as const;

interface AchievementCategory {
	category: string;
	items: string[];
}

interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	description?: string;
	technologies: string[];
	achievementCategories?: AchievementCategory[];
	achievements?: string[];
}

const experiences: Experience[] = [
	{
		id: "1",
		company: "TristynTech",
		position: "Full-Stack Developer (AI/LLM, Node.js, TypeScript)",
		location: "Remote",
		startDate: "Aug 2024",
		endDate: "Present",
		technologies: [
			"OpenAI",
			"Anthropic",
			"Next.js",
			"TypeScript",
			"Node.js",
			"React",
			"Firebase",
			"PostgreSQL",
			"MongoDB",
			"Prisma",
			"Plaid",
			"QuickBooks",
			"Stripe",
			"Shopify",
			"WooCommerce",
			"Wix",
			"GCP",
			"Docker",
			"PHP",
			"MySQL",
		],
		achievementCategories: [
			{
				category: "AI & LLM",
				items: [
					"Built 3+ AI-powered applications (financial assistant, home renovation planner, e-commerce agent) integrating OpenAI and Anthropic APIs — achieving 85% response accuracy and 40% faster onboarding.",
					"Implemented prompt engineering and cost-estimation logic using localized data, improving accuracy by 85%.",
					"Developed automated content generation and SEO tooling increasing merchant content output by 5× and organic impressions by 30%.",
				],
			},
			{
				category: "Full-Stack",
				items: [
					"Architected and deployed scalable applications across finance, geology, and e-commerce sectors using Next.js, React, and Node.js.",
					"Built backend APIs processing 2M+ geological data points from Google Cloud Storage, reducing fetch times by 55%.",
					"Built a custom ERP for a telecom equipment company managing full-cycle operations (procurement, repair, inventory, distribution) across 9 user roles.",
					"Shipped responsive interfaces and multi-step workflows improving user completion rates by 40%.",
				],
			},
			{
				category: "Commerce",
				items: [
					"Built Shopify, WooCommerce, and Wix plugins syncing products with the AgentShop platform, supporting 5 merchants during beta.",
					"Integrated Plaid, Stripe, and QuickBooks APIs for automated transaction categorization — streamlined bookkeeping workflows by 60%.",
					"Delivered storefront analytics (abandoned carts, product views, LLM-attributed revenue) enabling data-driven decisions 40% faster.",
				],
			},
			{
				category: "Data & Perf",
				items: [
					"Integrated PostgreSQL/Prisma and MongoDB, improving retrieval speed by 30%.",
					"Hit 90+ Lighthouse scores and 40% faster page loads via code splitting and caching.",
					"Ran daily Browserbase workflows for real-time LLM querying and brand visibility tracking.",
					"Maintained a MySQL schema (20+ related tables) with role-based permissions, PHP JSON API endpoints including async vendor polling, and a migration system for safe schema deployments.",
				],
			},
		],
	},
	{
		id: "2",
		company: "Freelance",
		position: "Full-Stack Developer",
		location: "Remote",
		startDate: "Jan 2024",
		endDate: "May 2024",
		description:
			"Designed and shipped an options-trading application using Next.js, TypeScript, and FastAPI — with Supabase auth and storage.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Python",
			"FastAPI",
			"Supabase",
			"Cypress",
		],
		achievements: [
			"Delivered end-to-end: Next.js/TypeScript frontend with FastAPI services and Supabase-backed auth — secure, seamless user experience.",
			"Designed backend logic to predict options-trading probabilities; collaborated with a former Udemy Project Manager to align with industry standards.",
			"Guarded reliability with Cypress test cases and streamlined real-time updates by wiring APIs directly into the frontend.",
		],
	},
	{
		id: "3",
		company: "Lophils Inc.",
		position: "Front-End Engineer — Intern",
		location: "Remote",
		startDate: "Jan 2024",
		endDate: "May 2024",
		description:
			"Implemented AWS Cognito auth, integrated GraphQL via AWS Amplify, and built responsive interfaces for enhanced user experience.",
		technologies: [
			"React",
			"AWS Lambda",
			"DynamoDB",
			"GraphQL",
			"Cognito",
			"Amplify",
		],
		achievements: [
			"Implemented AWS Cognito authentication — improving login security and identity management across the app.",
			"Integrated client-side APIs via GraphQL and AWS Amplify — streamlined data retrieval and dynamic interactions.",
			"Collaborated with the dev team on responsive UIs — lifting the overall cross-platform experience.",
		],
	},
];

function EntryCard({
	experience,
	index,
}: {
	experience: Experience;
	index: number;
}) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-120px" }}
			transition={{ duration: 0.8, ease }}
			className="group relative grid grid-cols-12 gap-x-4 md:gap-x-8 py-12 md:py-16 border-t border-hairline"
		>
			{/* left — numbering + meta */}
			<div className="col-span-12 md:col-span-3 lg:col-span-3 space-y-3 mb-6 md:mb-0">
				<p className="mono-label text-acid">
					§ {String(index + 1).padStart(2, "0")}
				</p>
				<div className="mono-meta space-y-1">
					<p>
						{experience.startDate} → {experience.endDate}
					</p>
					<p>{experience.location}</p>
				</div>
			</div>

			{/* right — editorial entry */}
			<div className="col-span-12 md:col-span-9 lg:col-span-9">
				<h3 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-0.02em] mb-3 transition-all duration-500 group-hover:tracking-[0.01em] group-hover:text-acid">
					{experience.company}
				</h3>
				<p className="text-bone-dim text-base md:text-lg mb-8 max-w-[52ch]">
					{experience.position}
				</p>

				{experience.description && (
					<p className="prose-ed text-bone-dim mb-8 max-w-[58ch]">
						{experience.description}
					</p>
				)}

				{experience.achievementCategories && (
					<div className="grid md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
						{experience.achievementCategories.map((cat, i) => (
							<div key={cat.category}>
								<div className="flex items-baseline gap-2 mb-4">
									<span className="mono-label">
										↳ {String(i + 1).padStart(2, "0")}
									</span>
									<h4 className="display-italic text-3xl text-bone">
										{cat.category}
									</h4>
								</div>
								<ul className="space-y-3">
									{cat.items.map((item, j) => (
										<li
											key={j}
											className="text-bone-dim text-[15px] leading-relaxed flex gap-3"
										>
											<span className="text-acid mt-[7px] text-[10px] flex-shrink-0">
												▸
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}

				{experience.achievements && (
					<div className="mb-10">
						<div className="flex items-baseline gap-2 mb-4">
							<span className="mono-label">↳ notes</span>
						</div>
						<ul className="space-y-3">
							{experience.achievements.map((a, j) => (
								<li
									key={j}
									className="text-bone-dim text-[15px] leading-relaxed flex gap-3 max-w-[62ch]"
								>
									<span className="text-acid mt-[7px] text-[10px] flex-shrink-0">
										▸
									</span>
									<span>{a}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				<div className="pt-6 border-t border-hairline/70">
					<p className="mono-label mb-3">— tech</p>
					<p className="font-mono text-[13px] text-bone-dim leading-relaxed tracking-tight">
						{experience.technologies.join(" · ")}
					</p>
				</div>
			</div>
		</motion.article>
	);
}

export function WorkExperience() {
	return (
		<div className="w-full">
			<div className="flex items-center justify-between mono-meta pb-8 border-b border-hairline">
				<span>— IDX.02 / SELECTED WORK</span>
				<span className="hidden sm:inline">
					{experiences.length.toString().padStart(2, "0")} ENTRIES
				</span>
				<span>2023 — NOW</span>
			</div>

			<div className="mt-14 md:mt-20 mb-10">
				<h2 className="display text-7xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-[-0.04em]">
					<span className="block">Selected</span>
					<span className="block italic text-acid">Work.</span>
				</h2>
				<p className="prose-ed mt-8 text-lg text-bone-dim max-w-[46ch]">
					Three entries, in reverse chronology. Each built with
					people I respect, for products shipping to real users.
				</p>
			</div>

			<div>
				{experiences.map((e, i) => (
					<EntryCard key={e.id} experience={e} index={i} />
				))}
				<div className="border-t border-hairline pt-6 flex items-baseline justify-between">
					<span className="mono-label">— end of section</span>
					<span className="mono-meta">FIN. / IDX.02</span>
				</div>
			</div>
		</div>
	);
}
