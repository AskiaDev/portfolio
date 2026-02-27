"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { goeyToast } from "goey-toast";

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
			loading: "Sending message...",
			success: "Message sent!",
			error: "Failed to send message",
			description: {
				loading: "Please wait while your message is being delivered.",
				success: "Thank you for reaching out. I'll get back to you soon.",
				error: "Please try again later or email me directly.",
			},
		});

		promise
			.then(() => form.reset())
			.catch(() => {})
			.finally(() => setIsSubmitting(false));
	};

	return (
		<div className="w-full max-w-5xl mx-auto">
			<div className="grid md:grid-cols-2 gap-12 items-start">
				{/* Left Column - Contact Info */}
				<div className="space-y-8">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
							Let's <span className="text-primary">Connect</span>
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I'm always open to discussing new projects, creative
							ideas, or opportunities to be part of your vision.
						</p>
					</div>

					<Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
								<Mail className="h-6 w-6 text-primary" />
							</div>
							<div>
								<p className="font-semibold text-foreground">
									Email
								</p>
								<p className="text-sm text-muted-foreground">
									manjaresaskiajames23@gmail.com
								</p>
							</div>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Feel free to reach out directly via email or use the
							contact form. I typically respond within 24 hours.
						</p>
					</Card>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-foreground">
							Connect on Social
						</h3>
						<div className="flex gap-4">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:bg-primary hover:text-white transition-colors bg-transparent"
								asChild
							>
								<a href="https://github.com/AskiaDev" target="_blank" rel="noopener noreferrer">
									<Github className="h-5 w-5" />
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:bg-primary hover:text-white transition-colors bg-transparent"
								asChild
							>
								<a href="https://www.linkedin.com/in/askia-james-manjares-33232324b/" target="_blank" rel="noopener noreferrer">
									<Linkedin className="h-5 w-5" />
								</a>
							</Button>
						</div>
					</div>
				</div>

				{/* Right Column - Contact Form */}
				<Card className="p-8 bg-card/50 backdrop-blur">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								name="name"
								placeholder="Your name"
								required
								className="bg-background"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="your.email@example.com"
								required
								className="bg-background"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Input
								id="subject"
								name="subject"
								placeholder="What's this about?"
								required
								className="bg-background"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Tell me about your project or just say hello..."
								rows={6}
								required
								className="bg-background resize-none"
							/>
						</div>

						<Button
							type="submit"
							className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<span className="animate-spin mr-2">
										⏳
									</span>
									Sending...
								</>
							) : (
								<>
									<Send className="h-4 w-4 mr-2" />
									Send Message
								</>
							)}
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
}
