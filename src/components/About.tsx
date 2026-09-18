import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { education, publications } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-heading">
            <p className="section-kicker">A little about me</p>
            <h2 id="about-title">
              Two disciplines.
              <br />
              <em>One way of thinking.</em>
            </h2>
            <Asterisk className="about-mark" aria-hidden="true" strokeWidth={1} />
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I build for the web and study the living world.
            </p>
            <p>
              Both start with the same question: how do you understand a complex
              system well enough to make something useful from it? In a codebase
              that means tracing state and dependencies. In a genome, pathways
              and mutations.
            </p>
            <p>
              Based in Lagos. At home in a codebase, a research lab, or a room
              full of people learning something new.
            </p>
          </div>
        </div>
        <div className="about-tracks">
          <div className="about-track">
            <h3 className="small-label">In code</h3>
            <p>
              Six years of frontend systems for fintech, SaaS dashboards and
              commerce — and the architecture that keeps them maintainable.
            </p>
            <Link className="text-link" href="/engineering">
              Engineering work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-track">
            <h3 className="small-label">In the lab</h3>
            <p>
              Phage genomics and microbial communities at the {education.school},
              annotated and analysed with computational tools across{" "}
              {publications.length} co-authored papers.
            </p>
            <Link className="text-link" href="/research">
              Research work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
