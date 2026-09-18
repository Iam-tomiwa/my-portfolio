import { absoluteUrl, siteName, siteUrl } from "@/lib/site";
import {
  devExperience,
  education,
  personalInfo,
  publications,
  skills,
} from "@/data/portfolio";

/** Renders a JSON-LD block. Content is derived from portfolio data, never hand-kept. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payload built from local data — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Identity graph for the person the site is about. Home page only. */
export function PersonSchema() {
  const current = devExperience[0];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: personalInfo.name,
        alternateName: "Tomiwa Ajayi",
        url: siteUrl,
        jobTitle: personalInfo.title,
        description: personalInfo.bio,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.school,
        },
        worksFor: current
          ? { "@type": "Organization", name: current.company }
          : undefined,
        knowsAbout: skills.flatMap((group) => group.items).slice(0, 25),
        sameAs: [personalInfo.github, personalInfo.linkedin],
      }}
    />
  );
}

/**
 * The publication list as structured articles. Author lists are left out: these
 * citations are surname-plus-initials strings that cannot be split into people
 * reliably, and a wrong author claim is worse than none.
 */
export function PublicationsSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Publications by ${siteName}`,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: publications.length,
        itemListElement: publications.map((publication, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ScholarlyArticle",
            headline: publication.title,
            name: publication.title,
            datePublished: publication.date,
            url: publication.link,
            abstract: publication.highlight,
            isPartOf: { "@type": "Periodical", name: publication.journal },
          },
        })),
      }}
    />
  );
}

/** Breadcrumb for a section page, so results show the site hierarchy. */
export function BreadcrumbSchema({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
        ],
      }}
    />
  );
}
