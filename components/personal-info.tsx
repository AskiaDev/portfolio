import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

const techStack = {
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
			<div className="grid md:grid-cols-2 gap-8 items-center">
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
				<div className="space-y-6">
					<div>
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
							Hi, I'm{" "}
							<span className="text-primary">Askia James</span>
						</h1>
						<p className="text-xl text-muted-foreground mb-6 leading-relaxed">
							Full-Stack Developer based in the Philippines with
							a degree in Computer Engineering. Building scalable
							applications across AI/LLM, e-commerce, and
							enterprise systems.
						</p>
					</div>

					<Card className="p-6 space-y-4 bg-card/50 backdrop-blur">
						<div className="flex items-start gap-3">
							<MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Location</p>
								<p className="text-sm text-muted-foreground">
									San Mateo Rizal, PH
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Education</p>
								<p className="text-sm text-muted-foreground">
									BS Computer Engineering
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									Eulogio &quot;Amang&quot; Rodriguez
									Institute of Technology (Mar 2020 - Sept
									2024)
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Current Role</p>
								<p className="text-sm text-muted-foreground">
									Full-Stack Developer
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Email</p>
								<p className="text-sm text-muted-foreground">
									manjaresaskiajames23@gmail.com
								</p>
							</div>
						</div>
					</Card>

					<div className="space-y-4">
						<h3 className="text-lg font-semibold mb-3">
							Tools & Skills
						</h3>
						{Object.entries(techStack).map(
							([category, skills]) => (
								<div key={category}>
									<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
										{category}
									</p>
									<div className="flex flex-wrap gap-2">
										{skills.map((skill) => (
											<Badge
												key={skill}
												variant="secondary"
												className="px-3 py-1"
											>
												{skill}
											</Badge>
										))}
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
