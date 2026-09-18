import { ArrowUpRight } from "lucide-react";
import {
  devExperience,
  personalInfo,
  type WorkExperience,
} from "@/data/portfolio";

function ExperienceRow({
  item,
  open = false,
}: {
  item: WorkExperience;
  open?: boolean;
}) {
  return (
    <details className="experience-row" open={open}>
      <summary>
        <span className="experience-date">
          {item.date.replaceAll(" - ", " — ")}
        </span>
        <span className="experience-position">
          <strong>{item.company}</strong>
          <span>{item.role}</span>
        </span>
        <span className="experience-type">{item.type}</span>
        <span className="details-toggle" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="experience-details">
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {item.tech && (
          <div className="tags">
            {item.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The journey so far</p>
            <h2 id="experience-title">
              Experience that <em>adds up.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            The full résumé
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="experience-list">
          {devExperience.map((item) => (
            <ExperienceRow key={item.company} item={item} open={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
