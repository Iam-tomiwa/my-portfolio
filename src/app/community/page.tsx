import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Community from "@/components/Community";
import { personalInfo } from "@/data/portfolio";

const title = "Teaching & Community — Tomiwa Ajayi";
const description =
  "Community work by Ajayi Emmanuel Tomiwa: lead facilitator at BioBridge 1.0, programs lead at The Health enLight Initiative, TB outreach volunteer, and mentor to microbiology students at UNILAG.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function CommunityPage() {
  return (
    <>
      <section
        className="route-hero container"
        aria-labelledby="community-page-title"
      >
        <div>
          <p className="section-kicker">Community & teaching</p>
          <h1 id="community-page-title">
            Teaching, organising,
            <br />
            <em>showing up.</em>
          </h1>
        </div>
        <div className="route-hero-copy">
          <p>
            Some of the most useful work I do pays nothing. Facilitating
            workshops, running health programmes, mentoring students, and
            turning up for public health outreach in Lagos.
          </p>
          <div className="route-actions">
            <a className="button button-primary" href="#community">
              See the work
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
      </section>
      <Community />
      <section className="section community-next">
        <div className="container">
          <div className="community-next-grid">
            <Link className="community-next-card" href="/research">
              <span className="small-label">Next</span>
              <h2>Research & publications</h2>
              <p>Phage genomics, microbial communities, and the papers.</p>
              <span className="text-link">
                Go to research
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </Link>
            <Link className="community-next-card" href="/engineering">
              <span className="small-label">Next</span>
              <h2>Frontend engineering</h2>
              <p>Six years of products, and the architecture underneath.</p>
              <span className="text-link">
                Go to engineering
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
