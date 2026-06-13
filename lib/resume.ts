/**
 * Single source of truth for all résumé content.
 * Components (rail, summary, experience, skills) read from here.
 */

export const profile = {
	name: "Askia James Manjares",
	firstName: "Askia",
	lastName: "Manjares",
	role: "Full-Stack Engineer",
	specialty: "AI/LLM · Commerce · Enterprise",
	location: "San Mateo, Rizal, Philippines",
	status: "Available for work",
	portrait: "/professional-portrait.JPEG",
	cv: "/Askia-James-Manjares-CV.pdf",
	education: {
		school: "EARIST",
		degree: "B.S. Computer Engineering",
		years: "2020 – 2024",
	},
	experienceLabel: "2+ years",
} as const;

export const summary =
	"Full-stack engineer with 2+ years building production systems across AI/LLM, commerce, and enterprise domains. I ship end-to-end — from LLM integrations and data pipelines to responsive interfaces — with a focus on measurable outcomes: faster loads, higher conversion, and reliable automation.";

export const highlights: { value: string; label: string }[] = [
	{ value: "85%", label: "AI response accuracy" },
	{ value: "2M+", label: "data points processed" },
	{ value: "90+", label: "Lighthouse performance" },
];

export const contactLinks: {
	label: string;
	value: string;
	href: string;
}[] = [
	{ label: "Email", value: "manjaresaskiajames23@gmail.com", href: "mailto:manjaresaskiajames23@gmail.com" },
	{ label: "GitHub", value: "github.com/AskiaDev", href: "https://github.com/AskiaDev" },
	{
		label: "LinkedIn",
		value: "in/askia-james-manjares",
		href: "https://www.linkedin.com/in/askia-james-manjares-33232324b/",
	},
];

export const navSections: { id: string; label: string }[] = [
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Skills" },
];

interface AchievementGroup {
	category: string;
	items: string[];
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	period: string;
	description?: string;
	technologies: string[];
	groups?: AchievementGroup[];
	achievements?: string[];
}

export const experiences: Experience[] = [
	{
		id: "tristyntech",
		company: "TristynTech",
		position: "Full-Stack Developer — AI/LLM, Node.js, TypeScript",
		location: "Remote",
		period: "Aug 2024 – Present",
		technologies: [
			"Next.js",
			"TypeScript",
			"Node.js",
			"React",
			"OpenAI",
			"Anthropic",
			"PostgreSQL",
			"Prisma",
			"MongoDB",
			"Firebase",
			"Plaid",
			"QuickBooks",
			"Stripe",
			"Shopify",
			"WooCommerce",
			"GCP",
			"Docker",
			"PHP",
			"MySQL",
		],
		groups: [
			{
				category: "AI & LLM",
				items: [
					"Built 3+ AI-powered applications (financial assistant, home-renovation planner, e-commerce agent) integrating OpenAI and Anthropic APIs — 85% response accuracy and 40% faster onboarding.",
					"Engineered prompt and cost-estimation logic on localized data, improving accuracy by 85%.",
					"Shipped automated content generation and SEO tooling, lifting merchant content output 5× and organic impressions 30%.",
				],
			},
			{
				category: "Full-Stack",
				items: [
					"Architected and deployed scalable apps across finance, geology, and e-commerce with Next.js, React, and Node.js.",
					"Built backend APIs processing 2M+ geological data points from Google Cloud Storage, cutting fetch times 55%.",
					"Delivered a custom ERP for a telecom-equipment company spanning procurement, repair, inventory, and distribution across 9 user roles.",
				],
			},
			{
				category: "Commerce",
				items: [
					"Built Shopify, WooCommerce, and Wix plugins syncing products with the AgentShop platform, supporting 5 merchants in beta.",
					"Integrated Plaid, Stripe, and QuickBooks for automated transaction categorization — streamlining bookkeeping 60%.",
					"Delivered storefront analytics (abandoned carts, product views, LLM-attributed revenue) for 40% faster decisions.",
				],
			},
			{
				category: "Data & Performance",
				items: [
					"Integrated PostgreSQL/Prisma and MongoDB, improving retrieval speed 30%.",
					"Hit 90+ Lighthouse scores and 40% faster page loads via code splitting and caching.",
					"Maintained a 20+ table MySQL schema with role-based permissions, PHP JSON APIs, and a safe migration system.",
				],
			},
		],
	},
	{
		id: "freelance",
		company: "Freelance",
		position: "Full-Stack Developer",
		location: "Remote",
		period: "Jan 2024 – May 2024",
		description:
			"Designed and shipped an options-trading application with Next.js, TypeScript, and FastAPI — backed by Supabase auth and storage.",
		technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Supabase", "Cypress"],
		achievements: [
			"Delivered end-to-end: Next.js/TypeScript front-end with FastAPI services and Supabase-backed auth for a secure, seamless experience.",
			"Designed backend logic to predict options-trading probabilities, aligning with industry standards alongside a former Udemy PM.",
			"Guarded reliability with Cypress test coverage and wired real-time API updates directly into the front-end.",
		],
	},
	{
		id: "lophils",
		company: "Lophils Inc.",
		position: "Front-End Engineer — Intern",
		location: "Remote",
		period: "Jan 2024 – May 2024",
		description:
			"Implemented AWS Cognito auth, integrated GraphQL via AWS Amplify, and built responsive interfaces across the product.",
		technologies: ["React", "AWS Lambda", "DynamoDB", "GraphQL", "Cognito", "Amplify"],
		achievements: [
			"Implemented AWS Cognito authentication, improving login security and identity management across the app.",
			"Integrated client-side APIs via GraphQL and AWS Amplify, streamlining data retrieval and dynamic interactions.",
			"Collaborated with the dev team on responsive UIs, lifting the cross-platform experience.",
		],
	},
];

export const skillGroups: { category: string; items: string[] }[] = [
	{
		category: "Frontend",
		items: ["React", "Next.js", "TypeScript", "React Native", "Redux", "TailwindCSS", "MUI", "shadcn/ui"],
	},
	{ category: "Backend", items: ["Node.js (Express)", "Python (FastAPI)", "PHP"] },
	{ category: "API", items: ["REST", "GraphQL"] },
	{ category: "Database", items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"] },
	{ category: "Cloud", items: ["AWS", "GCP", "Google BigQuery", "Firebase"] },
	{ category: "AI & LLM", items: ["OpenAI API", "Anthropic", "Prompt Engineering", "Browserbase"] },
	{
		category: "Integrations",
		items: ["Stripe", "Plaid", "QuickBooks", "Shopify", "WooCommerce", "Wix", "LemonSqueezy"],
	},
	{ category: "Tooling", items: ["Git", "Docker", "Cypress", "Postman", "Jira", "Notion"] },
];
