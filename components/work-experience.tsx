"use client";

import { motion } from "motion/react";
import { experiences, type Experience } from "@/lib/resume";

const ease = [0.22, 1, 0.36, 1] as const;

export function WorkExperience() {
	return (
		<div>
			<div className="flex items-baseline justify-between border-b border-hairline pb-4">
				<p className="label">Experience</p>
				<p className="mono">
					{String(experiences.length).padStart(2, "0")} roles · 2024 — now
				</p>
			</div>

			<div className="mt-2">
				{experiences.map((exp, i) => (
					<EntryCard key={exp.id} experience={exp} index={i} />
				))}
			</div>
		</div>
	);
}

function EntryCard({
	experience,
	index,
}: {
	experience: Experience;
	index: number;
}) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.6, ease }}
			className="border-t border-hairline py-10 first:border-t-0 md:py-12"
		>
			<header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
				<h3 className="text-xl font-semibold tracking-tight text-ink sm:text-[1.6rem]">
					{experience.company}
				</h3>
				<p className="mono shrink-0 whitespace-nowrap">
					{experience.location} · {experience.period}
				</p>
			</header>

			<p className="mt-1.5 text-[15px] font-medium text-ink-soft">
				{experience.position}
			</p>

			{experience.description ? (
				<p className="prose-body mt-4 text-[15px]">{experience.description}</p>
			) : null}

			{experience.groups ? (
				<div className="mt-7 grid gap-x-10 gap-y-7 md:grid-cols-2">
					{experience.groups.map((g) => (
						<div key={g.category}>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
								{g.category}
							</p>
							<Bullets items={g.items} className="mt-3" />
						</div>
					))}
				</div>
			) : null}

			{experience.achievements ? (
				<Bullets items={experience.achievements} className="mt-5 max-w-[64ch]" />
			) : null}

			<div className="mt-7">
				<p className="label mb-3">Stack</p>
				<ul className="flex flex-wrap gap-1.5">
					{experience.technologies.map((tech) => (
						<li
							key={tech}
							className="rounded-md border border-hairline bg-paper-2 px-2 py-0.5 font-mono text-[11px] text-ink-soft"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>

			<span className="sr-only">Entry {index + 1}</span>
		</motion.article>
	);
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
	return (
		<ul className={`flex flex-col gap-2.5 ${className ?? ""}`}>
			{items.map((item, j) => (
				<li key={j} className="flex gap-3 text-[14px] leading-relaxed text-ink-soft">
					<span
						className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent"
						aria-hidden="true"
					/>
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}
