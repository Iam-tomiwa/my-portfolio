import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

// Curated presentation layer over `projects` — index points at the data entry.
const selected = [
  {
    index: 0,
    category: "Medical mycology & training",
    summary: "A reference lab, its strains, and the people it trains.",
    image: "/projects/mrl-nigeria.webp",
    imageAlt:
      "MRL Nigeria homepage introducing the laboratory's fungal diagnostics and research work",
    color: "blue",
    outcome: "Catalog, courses and certificates in one place",
    tags: ["Next.js", "Sanity", "Supabase"],
  },
  {
    index: 2,
    category: "Entertainment & education",
    summary: "A new foundation for African storytelling.",
    image: "/projects/raptures.webp",
    imageAlt: "Raptures website showcasing African comics and stories",
    color: "lavender",
    outcome: "70% faster deployments",
    tags: ["Next.js", "TypeScript", "TanStack Query"],
  },
  {
    index: 1,
    category: "Public health & community",
    summary: "Health outreach, told through its own events.",
    image: "/projects/health-enlight.webp",
    imageAlt:
      "The Health enLight Initiative homepage with a stack of upcoming event cards",
    color: "sage",
    outcome: "Events the team publishes themselves",
    tags: ["Next.js", "Sanity", "Framer Motion"],
  },
  {
    index: 4,
    category: "IoT & connected products",
    summary: "Making connected lighting easier to discover.",
    image: "/projects/illumra-detail.webp",
    imageAlt: "ILLUMRA wireless lighting controls product website",
    color: "blue",
    outcome: "CMS-driven product discovery",
    tags: ["Next.js", "Sanity", "TypeScript"],
  },
  {
    index: 3,
    category: "Manufacturing & operations",
    summary: "From a custom order to the factory floor.",
    image: "/projects/glasstronictech.webp",
    imageAlt:
      "Glasstronic Technologies website showing engineered glass for modern construction",
    color: "lavender",
    outcome: "One workflow. Three connected portals.",
    tags: ["React", "TypeScript", "Zustand"],
  },
  {
    index: 5,
    category: "Architecture & interiors",
    summary: "A digital space with a sense of place.",
    image: "/projects/timtechville.webp",
    imageAlt: "TimTechVille architecture and interior design portfolio",
    color: "sage",
    outcome: "Designed around space and motion",
    tags: ["React", "GSAP", "Framer Motion"],
  },
];

// Everything not in `selected` above.
const archive = projects.slice(selected.length);

export default function Projects() {
  return (
    <section
      id="projects"
      className="section work-section"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="work-title">
              Less talk. <em>More shipped.</em>
            </h2>
          </div>
          <p>
            A few things I’ve helped bring to life.
            <br />
            Real products, real constraints, thoughtful solutions.
          </p>
        </div>
        <div className="project-grid">
          {selected.map((item) => {
            const project = projects[item.index];
            return (
              <article className="project" key={project.title}>
                <a
                  className={`project-visual project-visual--${item.color}`}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title} (opens in a new tab)`}
                >
                  <div className="project-browser">
                    <div className="project-image">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 90vw, (max-width: 1400px) 43vw, 580px"
                        className="project-screenshot"
                      />
                    </div>
                  </div>
                  <span className="project-visit">
                    <ArrowUpRight aria-hidden="true" size={21} />
                  </span>
                </a>
                <div className="project-caption">
                  <p className="small-label">{item.category}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <h3>{project.title}</h3>
                    <ArrowUpRight aria-hidden="true" size={22} />
                  </a>
                  <p className="project-summary">{item.summary}</p>
                  <details className="project-notes">
                    <summary>
                      My contribution <span aria-hidden="true">+</span>
                    </summary>
                    <p className="project-contribution">
                      {project.contribution}
                    </p>
                  </details>
                  <div className="project-meta">
                    <span>{item.outcome}</span>
                    <span>{item.tags.join(" / ")}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <details className="project-archive">
          <summary>
            <span>
              More from the archive{" "}
              <span className="archive-count">
                {String(archive.length).padStart(2, "0")}
              </span>
            </span>
            <span className="details-toggle" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="archive-list">
            {archive.map((project) => (
              <article key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="small-label">
                    {project.tech.join(" / ")}
                  </span>
                </div>
                <div className="archive-links">
                  <a
                    className="text-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                  {project.github && (
                    <a
                      className="text-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
