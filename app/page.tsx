import { ResumeRail } from "@/components/resume-rail";
import { WorkExperience } from "@/components/work-experience";
import { Skills } from "@/components/skills";

export default function PortfolioPage() {
	return (
		<div className="min-h-screen bg-paper text-ink">
			<div className="mx-auto w-full max-w-[1440px] lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] xl:grid-cols-[23rem_minmax(0,1fr)]">
				<ResumeRail />

				<main className="px-6 pb-28 pt-12 sm:px-10 lg:px-16 lg:pt-24 xl:px-24">
					<section id="experience" className="scroll-mt-8">
						<WorkExperience />
					</section>

					<section id="skills" className="scroll-mt-8 pt-20 md:pt-28">
						<Skills />
					</section>
				</main>
			</div>
		</div>
	);
}
