import { PersonalInfo } from "@/components/personal-info";
import { WorkExperience } from "@/components/work-experience";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";

export default function PortfolioPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			<main className="container mx-auto px-4 md:px-6 lg:px-8">
				<section
					id="about"
					className="min-h-screen flex items-center py-20"
				>
					<PersonalInfo />
				</section>

				<section id="experience" className="min-h-screen py-20">
					<WorkExperience />
				</section>

				<section
					id="contact"
					className="min-h-screen flex items-center py-20"
				>
					<ContactForm />
				</section>
			</main>

			{/* <footer className="border-t border-border py-8">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<p className="text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} All rights reserved.
					</p>
				</div>
			</footer> */}
		</div>
	);
}
