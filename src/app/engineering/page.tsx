import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import { personalInfo } from "@/data/portfolio";

const title = "Frontend Engineering — Tomiwa Ajayi";
const description =
  "Six years of frontend engineering: React, Next.js, TypeScript, product architecture, and selected work across fintech, IoT, and entertainment.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function EngineeringPage() {
  return (
    <>
      <section
        className="route-hero container"
        aria-labelledby="engineering-title"
      >
        <div>
          <p className="section-kicker">Senior Frontend Engineer</p>
          <h1 id="engineering-title">
            Interfaces with
            <br />
            <em>intention.</em>
          </h1>
        </div>
        <div className="route-hero-copy">
          <p>
            I build products that feel good to use and make sense to maintain.
            From the first component to the architecture underneath.
          </p>
          <div className="route-actions">
            <a
              className="text-link"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View résumé
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <Projects />
      <Experience />
      <section
        className="section container engineering-toolkit"
        aria-label="Engineering tools"
      >
        <p className="section-kicker">Tools of the trade</p>
        <h2>
          A considered <em>toolkit.</em>
        </h2>
        <TechStack />
      </section>
      <div className="crosslink container">
        <span>There’s another side to my work.</span>
        <Link href="/research">
          Explore my research
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
