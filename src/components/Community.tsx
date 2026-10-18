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
            <p className="section-kicker">In the community</p>
            <h2 id="community-title">
              Teaching & <em>outreach.</em>
            </h2>
          </div>
          <p>
            Workshops, student mentoring, and public health programmes.
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
                <details className="community-details">
                  <summary>
                    Activities & outcomes
                    <span className="sr-only">: {item.organisation}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
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
                </details>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
