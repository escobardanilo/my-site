"use client";

import {
  useCallback,
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
  type SectionId,
} from "@/lib/navigation";

function getSectionFromHash(): SectionId {
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

  const navigate = useCallback(
    (section: SectionId) => {
      setActiveSection(section);

      const nextUrl =
        section === "home"
          ? "/"
          : `/#${section}`;

      window.history.pushState(
        { section },
        "",
        nextUrl,
      );
    },
    [],
  );

  useEffect(() => {
    document.body.classList.add(
      "portfolio-site",
      "screen-experience-site",
    );

    queueMicrotask(() => {
      setActiveSection(
        getSectionFromHash(),
      );
    });

    const handleLocationChange =
      () => {
        setActiveSection(
          getSectionFromHash(),
        );
      };

    window.addEventListener(
      "popstate",
      handleLocationChange,
    );

    window.addEventListener(
      "hashchange",
      handleLocationChange,
    );

    return () => {
      document.body.classList.remove(
        "portfolio-site",
        "screen-experience-site",
      );

      window.removeEventListener(
        "popstate",
        handleLocationChange,
      );

      window.removeEventListener(
        "hashchange",
        handleLocationChange,
      );
    };
  }, []);

  return (
    <>
      <Header
        activeSection={
          activeSection
        }
        onNavigate={navigate}
      />

      <main
        id="main-content"
        className="screen-experience-main"
      >
        <div
          key={activeSection}
          className="screen-panel"
        >
          {activeSection ===
            "home" && <Hero />}

          {activeSection ===
            "stack" && <TechStack />}

          {activeSection ===
            "expertise" && (
            <ProfessionalExpertise />
          )}

          {activeSection ===
            "experience" && (
            <WorkHistory />
          )}

          {activeSection ===
            "projects" && <Projects />}

          {activeSection ===
            "about" && <About />}

          {activeSection ===
            "contact" && (
            <div className="contact-screen">
              <Contact />
              <Footer />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
