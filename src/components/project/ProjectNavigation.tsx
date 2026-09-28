import Link from "next/link";

import {
  getProjectNumber,
  type ProjectPageLabels,
  type ProjectSlug,
} from "@/lib/projects";

type ProjectNavigationProps = {
  previous: ProjectSlug | null;
  next: ProjectSlug | null;
  labels: ProjectPageLabels;
};

export function ProjectNavigation({
  previous,
  next,
  labels,
}: ProjectNavigationProps) {
  return (
    <section className="project-navigation">
      <div className="container">
        <div className="project-navigation__grid">
          {previous ? (
            <Link
              href={`/projects/${previous}`}
              className="project-navigation__item"
            >
              <span>
                {labels.previousProject}
              </span>

              <strong>
                ← {getProjectNumber(previous)}
              </strong>
            </Link>
          ) : (
            <div className="project-navigation__empty" />
          )}

          <Link
            href="/#projects"
            className="project-navigation__all"
          >
            {labels.allProjects}
          </Link>

          {next ? (
            <Link
              href={`/projects/${next}`}
              className="project-navigation__item project-navigation__item--next"
            >
              <span>
                {labels.nextProject}
              </span>

              <strong>
                {getProjectNumber(next)} →
              </strong>
            </Link>
          ) : (
            <div className="project-navigation__empty" />
          )}
        </div>
      </div>
    </section>
  );
}