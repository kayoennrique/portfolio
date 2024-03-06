import { Hero } from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-left px-4">
      <Hero />
      <Skills />
    </main>
  );
}
