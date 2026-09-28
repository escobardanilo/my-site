import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectDecisionsProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectDecisions({
  project,
  labels,
}: ProjectDecisionsProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>06</span>
          <p>{labels.decisions}</p>
        </div>

        <div className="project-section__intro">
          <h2>{project.decisions.title}</h2>

          <p>
            {project.decisions.description}
          </p>
        </div>

        <div className="project-decisions">
          {project.decisions.items.map(
            (decision) => (
              <article
                className="project-decision"
                key={decision.number}
              >
                <span>{decision.number}</span>

                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}