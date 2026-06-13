"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, contactLinks } from "@/lib/resume";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const item: Variants = {
	hidden: { opacity: 0, y: 14 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const contactIcon = {
	Email: Mail,
	GitHub: Github,
	LinkedIn: Linkedin,
} as const;

export function ResumeRail() {
	return (
		<aside className="border-b border-hairline lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
			<motion.div
				initial="hidden"
				animate="show"
				variants={container}
				className="flex min-h-full flex-col gap-10 px-6 py-12 sm:px-10 lg:gap-9 lg:px-10 lg:py-12 xl:px-12"
			>
				{/* identity */}
				<motion.div variants={item}>
					<div className="flex items-center gap-4">
						<div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border border-hairline-strong">
							<Image
								src={profile.portrait}
								alt={profile.name}
								fill
								sizes="68px"
								className="object-cover object-[center_18%]"
								priority
							/>
						</div>
						<div className="min-w-0">
							<h1 className="font-display text-[1.6rem] leading-[1.05] text-ink">
								{profile.name}
							</h1>
						</div>
					</div>

					<p className="mt-5 text-sm font-medium text-ink">{profile.role}</p>
					<p className="label mt-1.5">{profile.specialty}</p>

					<div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper-2 px-3 py-1.5">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
						</span>
						<span className="text-xs font-medium tracking-wide text-ink-soft">
							{profile.status}
						</span>
					</div>
				</motion.div>

				{/* contact + CV */}
				<motion.div variants={item} className="flex flex-col gap-5">
					<p className="label">Contact</p>
					<ul className="flex flex-col gap-0.5">
						{contactLinks.map((l) => {
							const Icon = contactIcon[l.label as keyof typeof contactIcon];
							const external = l.href.startsWith("http");
							return (
								<li key={l.label}>
									<a
										href={l.href}
										target={external ? "_blank" : undefined}
										rel={external ? "noopener noreferrer" : undefined}
										className="group flex items-center gap-3 rounded-md py-2 transition-colors hover:bg-paper-2"
									>
										<Icon
											className="h-[15px] w-[15px] shrink-0 text-haze transition-colors group-hover:text-accent"
											aria-hidden="true"
										/>
										<span className="min-w-0 flex-1 truncate text-[13px] text-ink-soft transition-colors group-hover:text-ink">
											{l.value}
										</span>
										<ArrowUpRight
											className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-haze opacity-0 transition-all group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
											aria-hidden="true"
										/>
									</a>
								</li>
							);
						})}
					</ul>

					<a
						href={profile.cv}
						download
						className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
					>
						<Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
						Download CV
					</a>
				</motion.div>

				{/* footer facts */}
				<motion.div
					variants={item}
					className="flex flex-col gap-3 border-t border-hairline pt-6"
				>
					<Fact label="Location" value={profile.location} />
					<Fact
						label="Education"
						value={`${profile.education.school} · ${profile.education.degree}`}
						meta={profile.education.years}
					/>
					<p className="mono mt-1 !text-[0.7rem]">
						© {new Date().getFullYear()} {profile.name}
					</p>
				</motion.div>
			</motion.div>
		</aside>
	);
}

function Fact({
	label,
	value,
	meta,
}: {
	label: string;
	value: string;
	meta?: string;
}) {
	return (
		<div className="flex flex-col gap-0.5">
			<span className="label">{label}</span>
			<span className="text-[13px] leading-snug text-ink-soft">{value}</span>
			{meta ? <span className="mono !text-[0.7rem]">{meta}</span> : null}
		</div>
	);
}
