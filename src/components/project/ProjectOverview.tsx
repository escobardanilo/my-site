import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectOverviewProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectOverview({
  project,
  labels,
}: ProjectOverviewProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>01</span>
          <p>{labels.overview}</p>
        </div>

        <div className="project-overview">
          <div className="project-overview__intro">
            <h2>{project.subtitle}</h2>
          </div>

          <div className="project-overview__metadata">
            <div>
              <span>{labels.role}</span>
              <p>{project.overview.role}</p>
            </div>

            <div>
              <span>{labels.type}</span>
              <p>{project.overview.type}</p>
            </div>

            <div>
              <span>{labels.status}</span>
              <p>{project.overview.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}