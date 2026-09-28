import Link from "next/link";

import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectHeroProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectHero({
  project,
  labels,
}: ProjectHeroProps) {
  return (
    <section className="project-hero">
      <div className="container project-hero__inner">
        <div className="project-hero__top">
          <Link
            href="/#projects"
            className="project-back-link"
          >
            <span aria-hidden="true">←</span>
            {labels.backToProjects}
          </Link>

          <span className="project-hero__number">
            {project.number}
          </span>
        </div>

        <div className="project-hero__title-block">
          <p className="project-hero__eyebrow">
            {project.eyebrow}
          </p>

          <h1>{project.title}</h1>

          <p className="project-hero__subtitle">
            {project.subtitle}
          </p>
        </div>

        <div className="project-hero__bottom">
          <p>{project.summary}</p>

          <span className="project-hero__scroll">
            SCROLL
            <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}