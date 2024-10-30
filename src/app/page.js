import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="pt-[120px] container space-y-28">
      <Hero />
      {/* <About />
      <Skills />
      <Project />
      <Contact /> */}
    </main>
  );
}
