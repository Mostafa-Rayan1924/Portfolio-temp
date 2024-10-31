import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Projects/Project";
import ScrollToTop from "@/components/scrollToTop";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="pt-[120px] pb-10 container space-y-28">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
