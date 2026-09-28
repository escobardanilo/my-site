import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalExpertise } from "@/components/sections/ProfessionalExpertise";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { WorkHistory } from "@/components/sections/WorkHistory";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <TechStack />

        <ProfessionalExpertise />

        <WorkHistory />

        <Projects />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}