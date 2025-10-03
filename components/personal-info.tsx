import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

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
							Software Engineer residing in the Philippines with a
							degree in Computer Engineering. Passionate about
							Full Stack Development and building innovative web
							applications that solve real-world problems.
						</p>
					</div>

					<Card className="p-6 space-y-4 bg-card/50 backdrop-blur">
						<div className="flex items-start gap-3">
							<MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Location</p>
								<p className="text-sm text-muted-foreground">
									Philippines
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Education</p>
								<p className="text-sm text-muted-foreground">
									BS Computer Engineering (2020-2024)
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									Graduated 2024
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Current Role</p>
								<p className="text-sm text-muted-foreground">
									Lead Engineer
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">Email</p>
								<p className="text-sm text-muted-foreground">
									itsmejamesmanjares@gmail.com
								</p>
							</div>
						</div>
					</Card>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg font-semibold mb-3">
								Current Tech Stack
							</h3>
							<div className="flex flex-wrap gap-2">
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									HTML
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									CSS
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									TailwindCSS
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Next.js
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									TypeScript
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									React
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Redux
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									MUI
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Node.js
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Go
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Python
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									FastAPI
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									REST
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									GraphQL
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Supabase
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									PostgreSQL
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									OpenAI API
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Prompt Engineering
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Cloud Vision API
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Plaid API
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									QuickBooks API
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									AWS
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Google BigQuery
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Google Cloud Run
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Artifact Registry
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Docker
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Git
								</Badge>
								<Badge
									variant="secondary"
									className="px-3 py-1"
								>
									Cypress
								</Badge>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
