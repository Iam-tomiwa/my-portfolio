import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { community } from "@/data/portfolio";

export default function Community() {
  return (
    <section
      id="community"
      className="section community-section"
      aria-labelledby="community-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Where I show up</p>
            <h2 id="community-title">
              Four rooms. <em>One habit.</em>
            </h2>
          </div>
          <p>
            Workshops, webinars, tutorials and outreach.
            <br />
            The work that only counts once someone else can use it.
          </p>
        </div>
        <div className="community-list">
          {community.map((item) => (
            <article
              className="community-entry"
              key={item.organisation + item.role}
            >
              <div className="community-meta">
                <h3>{item.role}</h3>
                <p className="community-org">{item.organisation}</p>
                <p className="community-when">
                  {[item.date, item.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <div className="community-body">
                <p className="community-summary">{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.talks && (
                  <div className="community-talks">
                    <h4 className="small-label">Sessions I led</h4>
                    <ul>
                      {item.talks.map((talk) => (
                        <li key={talk}>{talk}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.link && (
                  <a
                    className="text-link"
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.link.label}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )}
                {item.images && (
                  <div
                    className={`community-photos community-photos--${item.images.length}`}
                  >
                    {item.images.map((photo) => (
                      <figure key={photo.src}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 767px) 90vw, (max-width: 1100px) 45vw, 380px"
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
