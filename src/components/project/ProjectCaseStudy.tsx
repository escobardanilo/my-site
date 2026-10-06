"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { ProjectArchitecture } from "@/components/project/ProjectArchitecture";
import { ProjectDecisions } from "@/components/project/ProjectDecisions";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { ProjectOverview } from "@/components/project/ProjectOverview";
import { ProjectProblem } from "@/components/project/ProjectProblem";
import { ProjectProcess } from "@/components/project/ProjectProcess";
import { ProjectResults } from "@/components/project/ProjectResults";
import { ProjectStack } from "@/components/project/ProjectStack";
import { ProjectVisual } from "@/components/project/ProjectVisual";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

import {
  getAdjacentProjects,
  getProjectContent,
  getProjectLabels,
  type ProjectSlug,
} from "@/lib/projects";

type ProjectCaseStudyProps = {
  slug: ProjectSlug;
};

export function ProjectCaseStudy({
  slug,
}: ProjectCaseStudyProps) {
  const { language } =
    useSitePreferences();

  const project = getProjectContent(
    slug,
    language,
  );

  const labels =
    getProjectLabels(language);

  const { previous, next } =
    getAdjacentProjects(slug);

  return (
    <>
      <Header />

      <main className="project-page">
        <ProjectHero
          project={project}
          labels={labels}
        />

        <ProjectOverview
          project={project}
          labels={labels}
        />

        <ProjectProblem
          project={project}
          labels={labels}
        />

        <ProjectVisual
          project={project}
          labels={labels}
        />

        <ProjectArchitecture
          project={project}
          labels={labels}
        />

        {project.process.steps.length > 0 && (
          <ProjectProcess
            project={project}
            labels={labels}
          />
        )}

        <ProjectDecisions
          project={project}
          labels={labels}
        />

        <ProjectStack
          project={project}
          labels={labels}
        />

        <ProjectResults
          project={project}
          labels={labels}
        />

        <ProjectNavigation
          previous={previous}
          next={next}
          labels={labels}
        />
      </main>

      <Footer />
    </>
  );
}