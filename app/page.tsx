import { PersonalInfo } from "@/components/personal-info";
import { WorkExperience } from "@/components/work-experience";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";

export default function PortfolioPage() {
	return (
		<div className="min-h-screen bg-ink text-bone relative">
			<Navigation />

			<main className="px-6 md:px-10 lg:px-16 pt-24 md:pt-28 max-w-[1680px] mx-auto">
				<section id="about" className="pt-4 md:pt-8 pb-28 md:pb-36">
					<PersonalInfo />
				</section>

				<section id="experience" className="py-28 md:py-36">
					<WorkExperience />
				</section>

				<section id="contact" className="pt-28 md:pt-36 pb-16 md:pb-24">
					<ContactForm />
				</section>
			</main>
		</div>
	);
}
