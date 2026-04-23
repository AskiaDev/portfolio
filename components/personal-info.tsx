"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const ease = [0.25, 1, 0.3, 1] as const;

const stack: Record<string, string[]> = {
	Frontend: [
		"HTML",
		"CSS",
		"TailwindCSS",
		"Next.js",
		"TypeScript",
		"React",
		"Redux",
		"MUI",
		"Shadcn",
		"React Native",
	],
	Backend: ["Node.js (Express)", "Python (FastAPI)", "PHP"],
	API: ["REST", "GraphQL"],
	Cloud: ["AWS", "Google BigQuery", "GCP"],
	Database: ["Supabase", "PostgreSQL", "MySQL"],
	Tooling: [
		"Git",
		"Cypress",
		"Docker",
		"Postman",
		"Jira",
		"Trello",
		"Notion",
		"Cursor",
	],
	AI: [
		"OpenAI API",
		"Anthropic",
		"QuickBooks",
		"Plaid",
		"Wix",
		"Shopify",
		"WooCommerce",
		"Stripe",
		"LemonSqueezy",
	],
};

const reveal: Variants = {
	hidden: { opacity: 0, y: 18 },
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, delay: i * 0.08, ease },
	}),
};

export function PersonalInfo() {
	return (
		<div className="w-full">
			{/* masthead metadata strip */}
			<motion.div
				initial="hidden"
				animate="show"
				custom={0}
				variants={reveal}
				className="flex items-center justify-between mono-meta pb-8 border-b border-hairline"
			>
				<span>— IDX.01 / PRELUDE</span>
				<span className="hidden sm:inline">PORTFOLIO · MMXXVI</span>
				<span>SAN MATEO, PH · 14°N</span>
			</motion.div>

			<div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 pt-12 md:pt-20">
				{/* left — display name + intro */}
				<div className="col-span-12 lg:col-span-8 relative">
					<motion.p
						initial="hidden"
						animate="show"
						custom={1}
						variants={reveal}
						className="mono-label mb-5"
					>
						— engineer no. 001
					</motion.p>

					<h1 className="display text-[16vw] md:text-[12vw] lg:text-[10.5rem] xl:text-[12rem] leading-[0.82] tracking-[-0.04em] text-bone">
						<motion.span
							initial="hidden"
							animate="show"
							custom={2}
							variants={reveal}
							className="block"
						>
							Askia
						</motion.span>
						<motion.span
							initial="hidden"
							animate="show"
							custom={3}
							variants={reveal}
							className="block italic text-acid"
							style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
						>
							James.
						</motion.span>
						<motion.span
							initial="hidden"
							animate="show"
							custom={4}
							variants={reveal}
							className="block text-bone-dim"
						>
							Manjares
						</motion.span>
					</h1>

					<motion.p
						initial="hidden"
						animate="show"
						custom={6}
						variants={reveal}
						className="prose-ed mt-10 text-lg md:text-xl text-bone-dim max-w-[48ch]"
					>
						Full-stack engineer from the Philippines. Building systems
						across{" "}
						<span className="text-bone">AI &amp; LLM platforms</span>,{" "}
						<span className="text-bone">commerce infrastructure</span>,
						and{" "}
						<span className="text-bone">enterprise tooling</span>
						— with a bias for things that ship.
					</motion.p>

					<motion.div
						initial="hidden"
						animate="show"
						custom={7}
						variants={reveal}
						className="mt-12 flex flex-wrap items-center gap-6"
					>
						<a
							href="#experience"
							className="link-ed font-mono text-sm tracking-[0.05em] uppercase"
						>
							See the work <span aria-hidden="true">↓</span>
						</a>
						<a
							href="#contact"
							className="link-ed font-mono text-sm tracking-[0.05em] uppercase text-acid"
						>
							Start a transmission <span aria-hidden="true">↗</span>
						</a>
					</motion.div>
				</div>

				{/* right — portrait with editorial caption */}
				<motion.figure
					initial="hidden"
					animate="show"
					custom={5}
					variants={reveal}
					className="col-span-12 lg:col-span-4 lg:pt-24"
				>
					<div className="relative aspect-[3/4] w-full overflow-hidden border border-hairline">
						<Image
							src="/professional-portrait.JPEG"
							alt="Askia James Manjares, portrait"
							fill
							sizes="(max-width: 1024px) 100vw, 33vw"
							className="object-cover object-[center_22%] grayscale-[12%] contrast-110"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
						<div className="absolute top-3 left-3 mono-label text-bone/70">
							FIG. 01
						</div>
						<div className="absolute top-3 right-3 mono-label text-bone/70">
							24° 14′ N
						</div>
					</div>
					<figcaption className="mono-meta mt-3 flex items-baseline justify-between">
						<span>↳ Manjares, A.J. — 2026</span>
						<span className="text-right">Self-portrait /<br />San Mateo Rizal</span>
					</figcaption>
				</motion.figure>
			</div>

			{/* data-table meta strip */}
			<div className="mt-20 md:mt-28 hairline pt-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
					<MetaCell label="Located in">
						<span className="display-italic text-2xl">San Mateo, </span>
						<span>Rizal, PH</span>
					</MetaCell>
					<MetaCell label="Discipline">
						<span className="display-italic text-2xl">Full-stack </span>
						<span>engineering</span>
					</MetaCell>
					<MetaCell label="Education">
						<span className="display-italic text-2xl">EARIST </span>
						<span className="block text-xs mt-1 text-haze mono-meta">
							B.S. COMPUTER ENG · 2020–2024
						</span>
					</MetaCell>
					<MetaCell label="Currently">
						<span className="display-italic text-2xl text-acid">
							Available
						</span>
						<span className="block text-xs mt-1 text-haze mono-meta">
							FOR NEW WORK / 2026
						</span>
					</MetaCell>
				</div>
			</div>

			{/* stack — editorial list, not badges */}
			<div className="mt-20 md:mt-28">
				<div className="flex items-baseline justify-between mb-10">
					<h2 className="mono-label">— index / stack</h2>
					<span className="mono-meta hidden sm:inline">
						LANGUAGES · FRAMEWORKS · TOOLS
					</span>
				</div>
				<div className="grid grid-cols-12 gap-x-6 gap-y-6">
					{Object.entries(stack).map(([category, items], i) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								duration: 0.5,
								delay: i * 0.05,
								ease,
							}}
							className="col-span-12 md:col-span-6 grid grid-cols-12 gap-x-4 py-5 border-t border-hairline"
						>
							<div className="col-span-3">
								<span className="mono-label">§ {String(i + 1).padStart(2, "0")}</span>
								<p className="mt-1 display-italic text-2xl">{category}</p>
							</div>
							<p className="col-span-9 text-bone-dim font-mono text-sm leading-relaxed tracking-tight">
								{items.join(", ")}.
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

function MetaCell({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<p className="mono-label mb-2">↳ {label}</p>
			<p className="text-bone">{children}</p>
		</div>
	);
}
