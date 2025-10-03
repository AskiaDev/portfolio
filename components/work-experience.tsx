"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	technologies: string[];
	achievements: string[];
}

const experiences: Experience[] = [
	{
		id: "1",
		company: "TristynTech",
		position: "Lead Software Engineer",
		location: "Remote",
		startDate: "Apr 2025",
		endDate: "Present",
		description:
			"Leading development of an AI-powered bookkeeper assistant that helps business owners manage their finances. Implementing advanced prompt engineering and system design for optimal AI interactions with Plaid and QuickBooks integrations.",
		technologies: [
			"OpenAI API",
			"Google Gen AI",
			"Firebase",
			"Next.js",
			"TypeScript",
			"Node.js",
			"Shadcn",
			"Prompt Engineering",
			"System Design",
			"Plaid Integration",
			"QuickBooks API",
			"Google Cloud Run",
			"Docker",
			"CI/CD Pipeline",
			"Artifact Registry",
		],
		achievements: [
			"Architected AI-powered bookkeeping system with advanced prompt engineering",
			"Integrated Plaid and QuickBooks APIs for seamless financial data management",
			"Deployed scalable cloud infrastructure using Google Cloud Run and Docker",
		],
	},
	{
		id: "2",
		company: "TristynTech",
		position: "Fullstack Developer",
		location: "Remote",
		startDate: "Aug 2024",
		endDate: "Apr 2025",
		description:
			"Developed a full-stack monitoring system for geologists to track seismic events. Built efficient backend APIs serving millions of data points from Google Storage.",
		technologies: ["Full-stack", "Google Cloud", "SEO"],
		achievements: [
			"Built monitoring system handling millions of seismic data points",
			"Optimized backend APIs for efficient data retrieval from Google Storage",
			"Implemented SEO best practices for improved discoverability",
		],
	},
	{
		id: "3",
		company: "Freelance",
		position: "Fullstack Developer",
		location: "Remote",
		startDate: "Jan 2024",
		endDate: "May 2024",
		description:
			"Built an Options Trading app with Next.js, TypeScript, and FastAPI. Integrated Supabase for auth, designed prediction algorithms, and implemented Cypress testing.",
		technologies: [
			"Next.js",
			"FastAPI",
			"Supabase",
			"TypeScript",
			"Cypress",
		],
		achievements: [
			"Developed complete options trading application from scratch",
			"Designed and implemented prediction algorithms for trading insights",
			"Established comprehensive testing suite using Cypress",
		],
	},
	{
		id: "4",
		company: "Freelance",
		position: "Frontend Developer",
		location: "Remote",
		startDate: "Aug 2023",
		endDate: "May 2024",
		description:
			"Assigned to create reusable components for an Adult Social Media Platform using Ant Design, Redux Toolkit, and TypeScript for scalable state management and UI consistency.",
		technologies: ["Next.js", "TypeScript", "Ant Design", "Redux Toolkit"],
		achievements: [
			"Created comprehensive component library for social media platform",
			"Implemented scalable state management with Redux Toolkit",
			"Ensured UI consistency across platform with Ant Design system",
		],
	},
	{
		id: "5",
		company: "Lophils Inc.",
		position: "Frontend Engineer Intern",
		location: "Remote",
		startDate: "Sep 2023",
		endDate: "Dec 2023",
		description:
			"Implemented AWS Cognito authentication, integrated GraphQL APIs with AWS Amplify, and built responsive interfaces for enhanced user experience.",
		technologies: [
			"AWS Cognito",
			"GraphQL",
			"React JS",
			"Context API",
			"AWS Amplify",
		],
		achievements: [
			"Implemented secure authentication system with AWS Cognito",
			"Integrated GraphQL APIs with AWS Amplify for efficient data fetching",
			"Built responsive interfaces improving overall user experience",
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

					<p className="text-muted-foreground mb-4 leading-relaxed">
						{experience.description}
					</p>

					<div className="space-y-4">
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
												•
											</span>
											<span>{achievement}</span>
										</li>
									),
								)}
							</ul>
						</div>

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
