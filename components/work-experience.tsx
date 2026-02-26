"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

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
			"OpenAI API",
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
			"Google Cloud",
			"Docker",
			"PHP",
			"MySQL",
		],
		achievementCategories: [
			{
				category: "AI & LLM Integration",
				items: [
					"Built 3+ AI-powered applications (financial assistant, home renovation planner, e-commerce agent) integrating OpenAI and Anthropic APIs, achieving 85% response accuracy and 40% faster onboarding",
					"Implemented advanced prompt engineering and cost-estimation logic using localized data, improving accuracy by 85%",
					"Developed automated content generation and SEO optimization tools increasing merchant content output by 5x and organic impressions by 30%",
				],
			},
			{
				category: "Full-Stack Development",
				items: [
					"Architected and deployed scalable applications across finance, geology, and e-commerce sectors using Next.js, React, and Node.js",
					"Built backend APIs processing 2M+ geological data points from Google Cloud Storage, reducing fetch times by 55%",
					"Built a custom ERP system for a telecom equipment company managing full-cycle operations (procurement, repair, inventory, distribution) across 9 user roles",
					"Developed responsive interfaces and multi-step workflows improving user completion rates by 40%",
				],
			},
			{
				category: "E-commerce & API Integrations",
				items: [
					"Built Shopify, WooCommerce, and Wix plugins syncing products with AgentShop platform, supporting 5 merchants during beta",
					"Integrated Plaid, Stripe and QuickBooks APIs for automated transaction categorization, streamlining bookkeeping workflows by 60%",
					"Delivered storefront analytics (abandoned carts, product views, LLM-attributed revenue) enabling data-driven decisions 40% faster",
				],
			},
			{
				category: "Database & Performance Optimization",
				items: [
					"Integrated PostgreSQL/Prisma and MongoDB databases improving data retrieval speed by 30%",
					"Optimized platform performance achieving 90+ Lighthouse scores and 40% faster page loads through code splitting and caching",
					"Set up daily Browserbase workflows for real-time LLM querying and brand visibility tracking",
					"Maintained MySQL schema (20+ related tables) with role-based permissions, PHP JSON API endpoints including async vendor polling, and a migration system for safe schema deployments",
				],
			},
		],
	},
	{
		id: "2",
		company: "Freelance",
		position: "Fullstack Developer",
		location: "Remote",
		startDate: "Jan 2024",
		endDate: "May 2024",
		description:
			"Developed and maintained an Options Trading app using Next.js TypeScript and FastAPI integrating Supabase for authentication and data storage.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Python",
			"FastAPI",
			"Supabase",
			"Cypress",
		],
		achievements: [
			"Developed and maintained an Options Trading app using Next.js TypeScript and FastAPI integrating Supabase for authentication and data storage to provide a seamless and secure user experience",
			"Designed backend logic to predict options trading probabilities enhancing decision-making and collaborated with a former Udemy Project Manager to align with industry standards",
			"Ensured reliable functionality by writing test cases with Cypress and streamlined real-time updates by connecting APIs on the frontend",
		],
	},
	{
		id: "3",
		company: "Lophils Inc.",
		position: "Front End Engineer Intern",
		location: "Remote",
		startDate: "Jan 2024",
		endDate: "May 2024",
		description:
			"Implemented AWS Cognito authentication, integrated GraphQL APIs with AWS Amplify, and built responsive interfaces for enhanced user experience.",
		technologies: [
			"ReactJS",
			"AWS Lambda",
			"DynamoDB",
			"GraphQL",
			"AWS Cognito",
			"AWS Amplify",
		],
		achievements: [
			"Implemented authentication integration using AWS Cognito improving security features for user login and identity management within the app",
			"Integrated client-side APIs using GraphQL and AWS Amplify to streamline data retrieval and ensure dynamic user interactions within the application",
			"Collaborated with the development team to design and build responsive user interfaces improving the overall user experience across multiple platforms",
		],
	},
];

function ExperienceCard({
	experience,
	index,
}: {
	experience: Experience;
	index: number;
}) {
	const [isVisible, setIsVisible] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -100px 0px",
			},
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className={`relative transition-all duration-700 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-8"
			}`}
			style={{ transitionDelay: `${index * 150}ms` }}
		>
			{/* Timeline connector */}
			{index < experiences.length - 1 && (
				<div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
			)}

			<div className="flex gap-6">
				{/* Timeline dot */}
				<div className="relative flex-shrink-0">
					<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
						<div className="w-6 h-6 rounded-full bg-primary" />
					</div>
				</div>

				{/* Content */}
				<Card className="flex-1 p-6 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
						<div>
							<h3 className="text-2xl font-bold text-foreground mb-1">
								{experience.position}
							</h3>
							<p className="text-lg font-semibold text-primary">
								{experience.company}
							</p>
						</div>
						<div className="flex flex-col gap-2 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>
									{experience.startDate} -{" "}
									{experience.endDate}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="h-4 w-4" />
								<span>{experience.location}</span>
							</div>
						</div>
					</div>

					{experience.description && (
						<p className="text-muted-foreground mb-4 leading-relaxed">
							{experience.description}
						</p>
					)}

					<div className="space-y-4">
						{/* Categorized achievements (for TristynTech) */}
						{experience.achievementCategories && (
							<div className="space-y-4">
								{experience.achievementCategories.map(
									(cat) => (
										<div key={cat.category}>
											<h4 className="text-sm font-semibold mb-2 text-foreground">
												{cat.category}
											</h4>
											<ul className="space-y-2">
												{cat.items.map((item, i) => (
													<li
														key={i}
														className="flex items-start gap-2 text-sm text-muted-foreground"
													>
														<span className="text-primary mt-1">
															&bull;
														</span>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									),
								)}
							</div>
						)}

						{/* Flat achievements */}
						{experience.achievements && (
							<div>
								<h4 className="text-sm font-semibold mb-2 text-foreground">
									Key Achievements:
								</h4>
								<ul className="space-y-2">
									{experience.achievements.map(
										(achievement, i) => (
											<li
												key={i}
												className="flex items-start gap-2 text-sm text-muted-foreground"
											>
												<span className="text-primary mt-1">
													&bull;
												</span>
												<span>{achievement}</span>
											</li>
										),
									)}
								</ul>
							</div>
						)}

						<div>
							<h4 className="text-sm font-semibold mb-2 text-foreground">
								Technologies:
							</h4>
							<div className="flex flex-wrap gap-2">
								{experience.technologies.map((tech) => (
									<Badge
										key={tech}
										variant="outline"
										className="text-xs"
									>
										{tech}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}

export function WorkExperience() {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<div className="mb-12">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
					Work <span className="text-primary">Experience</span>
				</h2>
				<p className="text-lg text-muted-foreground leading-relaxed">
					A journey through my professional career, showcasing growth
					and achievements.
				</p>
			</div>

			<div className="space-y-8">
				{experiences.map((experience, index) => (
					<ExperienceCard
						key={experience.id}
						experience={experience}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
