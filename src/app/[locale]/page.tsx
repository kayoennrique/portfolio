import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Skills />
      <SectionDivider />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
