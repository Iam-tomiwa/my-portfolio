import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  publications,
  academicExperience,
  personalInfo,
  education,
} from "@/data/portfolio";

/** Matches the author's own name as it appears in these citations. */
const OWN_NAME = /(Ajayi, E\.(?: T\.)?)/;

/** Renders a citation with the author's own name emphasised. */
function highlightAuthor(authors: string) {
  return authors
    .split(OWN_NAME)
    .map((part, i) =>
      OWN_NAME.test(part) && part.startsWith("Ajayi") ? (
        <strong key={i}>{part}</strong>
      ) : (
        part
      ),
    );
}

export default function Publications() {
  return (
    <section
      id="research"
      className="section research-section"
      aria-labelledby="research-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The academic record</p>
            <h2 id="research-title">
              Research & <em>publications.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href={personalInfo.academicCvUrl}
            target="_blank"
            rel="noreferrer"
          >
            View academic CV
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="research-grid">
          <div className="research-intro">
            <h3>
              At the intersection of
              <br />
              biology and computation.
            </h3>
            <p>
              My research spans phage genome annotation, comparative genomics,
              and microbial communities. I bring programming and data analysis
              to biological questions, with a growing interest in reproducible
              computational workflows.
            </p>
            <div className="research-education">
              <span className="small-label">
                {education.school} · 2018–2024
              </span>
              <strong>B.Sc. (Hons) Microbiology</strong>
              <span>First Class Honours · CGPA 4.74 / 5.00</span>
            </div>
            <div className="research-methods">
              <h4>Methods & tools</h4>
              <div className="tags">
                {[
                  "Python",
                  "Biopython",
                  "DNA Master",
                  "KBase",
                  "Phamerator",
                  "NCBI",
                  "GeneMark",
                  "HHPred",
                ].map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="publication-list">
            <h3 className="publication-heading">
              Publications{" "}
              <span>{String(publications.length).padStart(2, "0")}</span>
            </h3>
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <span className="publication-meta">
                  {publication.journal} · {publication.date}
                </span>
                <a href={publication.link} target="_blank" rel="noreferrer">
                  <h4>
                    {publication.title}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </h4>
                </a>
                <details className="citation">
                  <summary>Authors & citation</summary>
                  <p className="publication-authors">
                    {highlightAuthor(publication.authors)}
                  </p>
                </details>
                <a
                  className="publication-link"
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read publication
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="research-experience">
          <h3>Research experience</h3>
          {academicExperience.map((item) => (
            <details className="academic-role" key={item.role + item.company}>
              <summary>
                <div>
                  <span className="small-label">
                    {item.date} · {item.type}
                  </span>
                  <h4>{item.role}</h4>
                  <p>{item.company}</p>
                </div>
                <span className="details-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="academic-role-body">
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
          ))}
        </div>
        <Link className="research-more" href="/community">
          <div>
            <p className="small-label">Beyond the lab</p>
            <h3>Teaching, mentoring & community</h3>
            <p>
              Facilitating workshops, running health programmes, and mentoring
              microbiology students.
            </p>
          </div>
          <span className="text-link">
            See community work
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
