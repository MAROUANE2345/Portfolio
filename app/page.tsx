import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
