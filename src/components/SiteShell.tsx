"use client";

import {
  useEffect,
  useState,
} from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalExpertise } from "@/components/sections/ProfessionalExpertise";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { WorkHistory } from "@/components/sections/WorkHistory";
import {
  isSectionId,
  sectionIds,
  type SectionId,
} from "@/lib/navigation";

function getHashSection(): SectionId {
  if (typeof window === "undefined") {
    return "home";
  }

  const value =
    window.location.hash.slice(1);

  return isSectionId(value)
    ? value
    : "home";
}

export function SiteShell() {
  const [
    activeSection,
    setActiveSection,
  ] = useState<SectionId>("home");

  useEffect(() => {
    document.body.classList.add(
      "portfolio-site",
    );

    const targets = sectionIds
      .map((id) =>
        document.getElementById(id),
      )
      .filter(
        (
          element,
        ): element is HTMLElement =>
          Boolean(element),
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio,
            );

          const id =
            visible[0]?.target.id;

          if (
            id &&
            isSectionId(id)
          ) {
            setActiveSection(id);
          }
        },
        {
          rootMargin:
            "-22% 0px -62% 0px",
          threshold: [
            0.08,
            0.2,
            0.4,
            0.65,
          ],
        },
      );

    targets.forEach((target) =>
      observer.observe(target),
    );

    const handleHashChange = () => {
      setActiveSection(
        getHashSection(),
      );
    };

    window.addEventListener(
      "hashchange",
      handleHashChange,
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );

      document.body.classList.remove(
        "portfolio-site",
      );
    };
  }, []);

  return (
    <>
      <Header
        activeSection={
          activeSection
        }
      />

      <main
        id="main-content"
        className="portfolio-main"
      >
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
