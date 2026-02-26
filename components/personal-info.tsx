import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

const techStack: Record<string, string[]> = {
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
	Tools: [
		"Git",
		"Cypress",
		"Docker",
		"Postman",
		"Jira",
		"Trello",
		"Notion",
		"Cursor",
	],
	"AI & Integrations": [
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

export function PersonalInfo() {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<div className="grid md:grid-cols-2 gap-8 items-start">
				{/* Left Column - Image */}
				<div className="relative">
					<div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
						<img
							src="/professional-portrait.JPEG"
							alt="Profile"
							className="w-full h-full object-cover object-[center_20%]"
						/>
					</div>
					<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
					<div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
				</div>

				{/* Right Column - Info */}
				<div className="space-y-5">
					<div>
						<h1 className="text-5xl md:text-6xl font-bold mb-3 text-balance">
							Hi, I&apos;m{" "}
							<span className="text-primary">Askia James</span>
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Full-Stack Developer based in the Philippines with
							a degree in Computer Engineering. Building scalable
							applications across AI/LLM, e-commerce, and
							enterprise systems.
						</p>
					</div>

					{/* Info grid - 2x2 compact layout */}
					<Card className="p-4 bg-card/50 backdrop-blur">
						<div className="grid grid-cols-2 gap-3">
							<div className="flex items-center gap-2.5">
								<MapPin className="h-4 w-4 text-primary flex-shrink-0" />
								<div className="min-w-0">
									<p className="text-xs text-muted-foreground">
										Location
									</p>
									<p className="text-sm font-medium truncate">
										San Mateo Rizal, PH
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2.5">
								<Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
								<div className="min-w-0">
									<p className="text-xs text-muted-foreground">
										Current Role
									</p>
									<p className="text-sm font-medium truncate">
										Full-Stack Developer
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2.5">
								<GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
								<div className="min-w-0">
									<p className="text-xs text-muted-foreground">
										Education
									</p>
									<p className="text-sm font-medium leading-tight">
										BS Computer Engineering
									</p>
									<p className="text-[11px] text-muted-foreground leading-tight">
										EARIST (2020–2024)
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2.5">
								<Mail className="h-4 w-4 text-primary flex-shrink-0" />
								<div className="min-w-0">
									<p className="text-xs text-muted-foreground">
										Email
									</p>
									<p className="text-sm font-medium truncate">
										manjaresaskiajames23@gmail.com
									</p>
								</div>
							</div>
						</div>
					</Card>

					{/* Tech stack - compact inline layout */}
					<div className="space-y-2.5">
						<h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
							Tools & Skills
						</h3>
						<div className="space-y-1.5">
							{Object.entries(techStack).map(
								([category, skills]) => (
									<div
										key={category}
										className="flex flex-wrap items-center gap-1.5"
									>
										<span className="text-[11px] font-medium text-primary/70 uppercase tracking-wider w-[90px] flex-shrink-0">
											{category}
										</span>
										{skills.map((skill) => (
											<Badge
												key={skill}
												variant="secondary"
												className="px-2 py-0 text-xs h-6"
											>
												{skill}
											</Badge>
										))}
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
