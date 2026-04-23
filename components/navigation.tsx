"use client";

import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/scroll-progress";

const navLinks = [
	{ id: "about", index: "01", label: "Index" },
	{ id: "experience", index: "02", label: "Work" },
	{ id: "contact", index: "03", label: "Colophon" },
];

export function Navigation() {
	const [active, setActive] = useState("about");
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const sections = navLinks
			.map((l) => document.getElementById(l.id))
			.filter((el): el is HTMLElement => el !== null);

		const io = new IntersectionObserver(
			(entries) => {
				const inView = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (inView[0]) setActive(inView[0].target.id);
			},
			{ rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
		);
		sections.forEach((s) => io.observe(s));
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-ink/70 backdrop-blur-md">
				<div className="px-6 md:px-10 lg:px-16">
					<div className="flex items-center justify-between h-14">
						<a
							href="#about"
							className="group flex items-baseline gap-2 no-underline"
						>
							<span className="font-display text-[1.15rem] leading-none tracking-tight">
								Askia
							</span>
							<span className="mono-label">IDX.001</span>
						</a>

						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => {
								const isActive = active === link.id;
								return (
									<a
										key={link.id}
										href={`#${link.id}`}
										className="group flex items-baseline gap-1.5"
										aria-current={isActive ? "true" : undefined}
									>
										<span
											className={`font-mono text-[0.7rem] tracking-[0.1em] transition-colors ${
												isActive ? "text-acid" : "text-haze"
											}`}
										>
											{link.index}
										</span>
										<span
											className={`text-sm transition-colors ${
												isActive
													? "text-bone"
													: "text-bone-dim group-hover:text-bone"
											}`}
										>
											{link.label}
										</span>
										<span
											className={`inline-block w-1 h-1 rounded-full ml-1 transition-all ${
												isActive
													? "bg-acid scale-100"
													: "bg-transparent scale-0"
											}`}
										/>
									</a>
								);
							})}
						</div>

						<div className="hidden md:flex items-center gap-3">
							<ScrollProgress />
						</div>

						<button
							type="button"
							onClick={() => setMobileOpen(true)}
							aria-label="Open menu"
							className="md:hidden flex flex-col gap-[5px] w-6 h-6 items-end justify-center"
						>
							<span className="block h-px w-5 bg-bone" />
							<span className="block h-px w-3 bg-bone" />
						</button>
					</div>
				</div>

				{/* mobile scroll progress — full-width thin line */}
				<div className="md:hidden relative h-px bg-hairline">
					<ScrollProgress />
				</div>
			</nav>

			{/* mobile menu overlay */}
			<div
				className={`md:hidden fixed inset-0 z-[60] bg-ink transition-opacity duration-300 ${
					mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				aria-hidden={!mobileOpen}
			>
				<div className="px-6 py-5 flex items-center justify-between">
					<span className="mono-label">— menu</span>
					<button
						type="button"
						onClick={() => setMobileOpen(false)}
						aria-label="Close menu"
						className="mono-label text-bone"
					>
						CLOSE ✕
					</button>
				</div>
				<div className="px-6 pt-16 flex flex-col gap-8">
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							onClick={() => setMobileOpen(false)}
							className="flex items-baseline gap-4"
						>
							<span className="mono-label">{link.index}</span>
							<span className="font-display text-6xl leading-none">
								{link.label}
							</span>
						</a>
					))}
				</div>
				<div className="absolute bottom-10 left-6 right-6 flex justify-between mono-meta">
					<span>— MMXXVI</span>
					<span>PORTFOLIO / 001</span>
				</div>
			</div>
		</>
	);
}
