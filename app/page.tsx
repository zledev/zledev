import Hero from "@/components/sections/Hero";
import FooterLast from "@/components/sections/Footer";
import ProjectView from "@/components/sections/ProjectView";

export default function Page() {
	return (
		<main className="space-bg min-h-screen">
			<Hero />
			<ProjectView />

			<FooterLast />
		</main>
	);
}
