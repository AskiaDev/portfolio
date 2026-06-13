"use client";

import { motion } from "motion/react";
import { type IconType } from "react-icons";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiMui,
	SiShadcnui,
	SiNodedotjs,
	SiPython,
	SiPhp,
	SiGraphql,
	SiPostgresql,
	SiMysql,
	SiSupabase,
	SiMongodb,
	SiGooglecloud,
	SiGooglebigquery,
	SiFirebase,
	SiOpenai,
	SiAnthropic,
	SiStripe,
	SiQuickbooks,
	SiShopify,
	SiWoocommerce,
	SiWix,
	SiLemonsqueezy,
	SiGit,
	SiDocker,
	SiCypress,
	SiPostman,
	SiJira,
	SiNotion,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skillGroups } from "@/lib/resume";

const ease = [0.22, 1, 0.36, 1] as const;

/* tech → brand logo. Skills with no real logo fall back to a text pill. */
const iconMap: Record<string, IconType> = {
	React: SiReact,
	"Next.js": SiNextdotjs,
	TypeScript: SiTypescript,
	"React Native": SiReact,
	Redux: SiRedux,
	TailwindCSS: SiTailwindcss,
	MUI: SiMui,
	"shadcn/ui": SiShadcnui,
	"Node.js (Express)": SiNodedotjs,
	"Python (FastAPI)": SiPython,
	PHP: SiPhp,
	GraphQL: SiGraphql,
	PostgreSQL: SiPostgresql,
	MySQL: SiMysql,
	Supabase: SiSupabase,
	MongoDB: SiMongodb,
	AWS: FaAws,
	GCP: SiGooglecloud,
	"Google BigQuery": SiGooglebigquery,
	Firebase: SiFirebase,
	"OpenAI API": SiOpenai,
	Anthropic: SiAnthropic,
	Stripe: SiStripe,
	QuickBooks: SiQuickbooks,
	Shopify: SiShopify,
	WooCommerce: SiWoocommerce,
	Wix: SiWix,
	LemonSqueezy: SiLemonsqueezy,
	Git: SiGit,
	Docker: SiDocker,
	Cypress: SiCypress,
	Postman: SiPostman,
	Jira: SiJira,
	Notion: SiNotion,
};

export function Skills() {
	return (
		<div>
			<div className="flex items-baseline justify-between border-b border-hairline pb-4">
				<p className="label">Skills</p>
				<p className="mono hidden sm:block">Languages · Frameworks · Tools</p>
			</div>

			<dl className="mt-2">
				{skillGroups.map((group, i) => (
					<motion.div
						key={group.category}
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.5, ease, delay: Math.min(i * 0.04, 0.2) }}
						className="grid gap-3 border-t border-hairline py-5 first:border-t-0 md:grid-cols-[11rem_1fr] md:gap-8"
					>
						<dt className="text-sm font-semibold text-ink md:pt-1">
							{group.category}
						</dt>
						<dd>
							<ul className="flex flex-wrap gap-2">
								{group.items.map((skill) => (
									<SkillTile key={skill} skill={skill} />
								))}
							</ul>
						</dd>
					</motion.div>
				))}
			</dl>
		</div>
	);
}

function SkillTile({ skill }: { skill: string }) {
	const Icon = iconMap[skill];

	if (!Icon) {
		return (
			<li
				title={skill}
				className="flex h-11 items-center rounded-lg border border-hairline bg-paper-2 px-3 font-mono text-[11.5px] text-ink-soft transition-colors hover:border-hairline-strong hover:text-ink"
			>
				{skill}
			</li>
		);
	}

	return (
		<li
			title={skill}
			aria-label={skill}
			className="group flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-paper-2 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
		>
			<Icon className="h-[21px] w-[21px]" aria-hidden="true" />
		</li>
	);
}
