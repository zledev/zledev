import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";
import FinalCta from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <main className="space-bg min-h-screen">
      <Hero />
      <Projects />
      <Testimonial />
      <FinalCta />
    </main>
  );
}
