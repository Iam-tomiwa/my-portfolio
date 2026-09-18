import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import Publications from "@/components/Publications";
import {
  BreadcrumbSchema,
  PublicationsSchema,
} from "@/components/StructuredData";
import { personalInfo, publications } from "@/data/portfolio";

const title = "Microbiology & Bioinformatics Research — Tomiwa Ajayi";
const description =
  "Ajayi Emmanuel Tomiwa's academic portfolio: first-class Microbiology graduate, bioinformatics research, genome annotation, publications, and graduate assistant at UNILAG.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research" },
  openGraph: { title, description, url: "/research", type: "profile" },
  twitter: { card: "summary_large_image", title, description },
};

/** The paper whose first page is used as the hero image. */
const featuredPaper =
  publications.find((paper) =>
    paper.link.includes("micropub.biology.001971"),
  ) ?? publications[0];

export default function ResearchPage() {
  return (
    <>
      <PublicationsSchema />
      <BreadcrumbSchema name="Research" path="/research" />
      <section
        className="research-hero container"
        aria-labelledby="academic-title"
      >
        <div>
          <p className="section-kicker">
            Microbiologist & Bioinformatics Researcher
          </p>
          <h1 id="academic-title">
            Life, through
            <br />
            <em>a different lens.</em>
          </h1>
          <p className="research-hero-copy">
            I study biological systems with computational tools.
            <br />
            My interests span phage genomics, microbial communities, and
            reproducible research.
          </p>
          <div className="route-actions">
            <a className="button button-primary" href="#research">
              Explore my research
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href={personalInfo.academicCvUrl}
              target="_blank"
              rel="noreferrer"
            >
              Academic CV
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="research-art">
          <a
            className="paper-figure"
            href={featuredPaper.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Read "${featuredPaper.title}" in ${featuredPaper.journal}`}
          >
            <Image
              src="/publications/ceilingfan-mugiwara.webp"
              alt={`First page of "${featuredPaper.title}", published in ${featuredPaper.journal}`}
              width={1000}
              height={1416}
              sizes="(max-width: 767px) 72vw, 400px"
              priority
            />
          </a>
          <figcaption>
            Two novel <em>Streptomyces</em> phages, annotated and described.{" "}
            <span>
              {featuredPaper.journal}, {featuredPaper.date}.
            </span>
          </figcaption>
        </figure>
      </section>
      <Publications />
      <div className="crosslink container">
        <span>I also build for the web.</span>
        <Link href="/engineering">
          Explore my engineering
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
