import About from "@/components/About";
import { Hero } from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Skills />
      <SectionDivider />
      <About />
    </main>
  );
}
