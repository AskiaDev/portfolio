"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { goeyToast } from "goey-toast";

const ease = [0.25, 1, 0.3, 1] as const;

const links = [
	{
		label: "GITHUB",
		value: "@AskiaDev",
		href: "https://github.com/AskiaDev",
	},
	{
		label: "LINKEDIN",
		value: "in/askia-james-manjares",
		href: "https://www.linkedin.com/in/askia-james-manjares-33232324b/",
	},
	{
		label: "EMAIL",
		value: "manjaresaskiajames23@gmail.com",
		href: "mailto:manjaresaskiajames23@gmail.com",
	},
];

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const sendEmail = async () => {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					subject: formData.get("subject"),
					message: formData.get("message"),
				}),
			});
			if (!res.ok) throw new Error("Failed to send message");
			return res.json();
		};

		const promise = sendEmail();

		goeyToast.promise(promise, {
			loading: "Transmitting…",
			success: "Transmission received.",
			error: "Transmission failed.",
			description: {
				loading: "Encoding message / dispatching packet.",
				success: "Expect a response within 24 hours.",
				error: "Try again, or email manjaresaskiajames23@gmail.com directly.",
			},
		});

		promise
			.then(() => form.reset())
			.catch(() => {})
			.finally(() => setIsSubmitting(false));
	};

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mono-meta pb-8 border-b border-hairline">
				<span>— IDX.03 / COLOPHON</span>
				<span className="hidden sm:inline">END OF INDEX</span>
				<span>MMXXVI</span>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-120px" }}
				transition={{ duration: 0.9, ease }}
				className="mt-14 md:mt-20 mb-16 md:mb-24"
			>
				<h2 className="display text-7xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-[-0.04em]">
					<span className="block">Currently</span>
					<span className="block italic text-acid">Available.</span>
				</h2>
			</motion.div>

			<div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-16">
				{/* left — statement + social */}
				<div className="col-span-12 md:col-span-5 lg:col-span-4">
					<p className="prose-ed text-lg text-bone-dim mb-10 max-w-[38ch]">
						Open to full-stack, AI, and product-engineering work —
						contract, full-time, or the rare worthwhile freelance
						project.
					</p>

					<p className="mono-label mb-4">— elsewhere</p>
					<ul className="space-y-5">
						{links.map((l) => (
							<li key={l.label} className="group">
								<a
									href={l.href}
									target={l.href.startsWith("http") ? "_blank" : undefined}
									rel={
										l.href.startsWith("http")
											? "noopener noreferrer"
											: undefined
									}
									className="flex items-baseline justify-between gap-6 py-2 border-b border-hairline/70 transition-colors hover:border-acid"
								>
									<span className="mono-label group-hover:text-acid transition-colors">
										↳ {l.label}
									</span>
									<span className="text-bone text-sm font-mono tracking-tight truncate">
										{l.value}{" "}
										<span
											className="text-acid inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
											aria-hidden="true"
										>
											↗
										</span>
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* right — form */}
				<form
					onSubmit={handleSubmit}
					className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6"
				>
					<p className="mono-label mb-10">— transmit a message</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
						<Field label="Name" id="name" required>
							<input
								id="name"
								name="name"
								required
								placeholder="Your name"
								className="input-ed"
							/>
						</Field>

						<Field label="Email" id="email" required>
							<input
								id="email"
								name="email"
								type="email"
								required
								placeholder="you@domain.com"
								className="input-ed"
							/>
						</Field>

						<div className="md:col-span-2">
							<Field label="Subject" id="subject" required>
								<input
									id="subject"
									name="subject"
									required
									placeholder="What's this about?"
									className="input-ed"
								/>
							</Field>
						</div>

						<div className="md:col-span-2">
							<Field label="Message" id="message" required>
								<textarea
									id="message"
									name="message"
									required
									rows={5}
									placeholder="Tell me about the project, or just say hello."
									className="input-ed resize-none"
								/>
							</Field>
						</div>
					</div>

					<div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-6">
						<p className="mono-meta text-haze max-w-[34ch]">
							Replies typically within 24 hours. Secure,
							direct — no middleware.
						</p>

						<button
							type="submit"
							disabled={isSubmitting}
							className="group flex items-baseline gap-3 disabled:opacity-60"
						>
							<span className="mono-label text-acid group-hover:text-bone transition-colors">
								[{isSubmitting ? "transmitting" : "send"}]
							</span>
							<span className="display text-4xl md:text-5xl leading-none tracking-tight text-bone group-hover:text-acid transition-colors">
								Transmit
								<span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
									→
								</span>
							</span>
						</button>
					</div>
				</form>
			</div>

			<div className="mt-24 md:mt-32 border-t border-hairline pt-6 flex items-baseline justify-between">
				<span className="mono-label">— end of portfolio</span>
				<span className="mono-meta">
					© {new Date().getFullYear()} ASKIA JAMES MANJARES / IDX.001
				</span>
			</div>
		</div>
	);
}

function Field({
	label,
	id,
	required,
	children,
}: {
	label: string;
	id: string;
	required?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div>
			<label htmlFor={id} className="mono-label flex items-baseline gap-2 mb-2">
				↳ {label}
				{required ? <span className="text-acid text-[8px]">●</span> : null}
			</label>
			{children}
		</div>
	);
}
