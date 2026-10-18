import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-heading">
          <p className="section-kicker">About me</p>
          <h2 id="about-title">
            Hi, I’m <em>Tomiwa.</em>
          </h2>
          <Asterisk className="about-mark" aria-hidden="true" strokeWidth={1} />
        </div>
        <div className="about-copy">
          <p className="about-lead">An engineer and microbiologist based in Lagos.</p>
          <p>
            I studied Microbiology at the University of Lagos while building
            software professionally. Today, my work spans frontend development
            and computational biology.
          </p>
          <p>
            Beyond projects and papers, I teach bioinformatics, mentor students,
            and help organise community health programmes.
          </p>
          <Link className="text-link" href="/community">
            Teaching & community
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
