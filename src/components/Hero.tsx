import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p>
          Ajayi Emmanuel Tomiwa <span>/ Engineer & Researcher</span>
        </p>
        <span className="availability">
          <span className="status-dot" />
          Lagos, Nigeria · Open to collaboration
        </span>
      </div>
      <div className="hero-heading-row">
        <div className="hero-title-block">
          <h1 id="hero-title">
            Code &<br />
            <em>discovery.</em>
          </h1>
          <p>
            Frontend engineer. Bioinformatics researcher.
            <br />
            Building interfaces. Exploring living systems.
          </p>
          <div className="hero-entry-links">
            <Link className="button button-primary" href="/engineering">
              Engineering
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-yellow" href="/research">
              Research
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-art hero-art--collage">
          <Link
            href="/research"
            className="paper-figure hero-paper"
            aria-label="Read my research and publications"
          >
            <Image
              src="/publications/ceilingfan-mugiwara.webp"
              alt="First page of our microPublication Biology paper on the genome sequences of Streptomyces phages CeilingFan and Mugiwara"
              width={1000}
              height={1416}
              sizes="(max-width: 767px) 48vw, 300px"
              priority
            />
          </Link>
          <Link
            href="/engineering"
            className="hero-project-peek"
            aria-label="Explore my engineering projects"
          >
            <div className="peek-header" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>Built for the web.</p>
            </div>
            <Image
              src="/projects/mrl-nigeria.webp"
              alt="Preview of the MRL Nigeria platform I built"
              width={1200}
              height={917}
              sizes="(max-width: 767px) 150px, 240px"
              priority
            />
          </Link>
        </div>
      </div>
      <div
        className="hero-proof"
        aria-label="Engineering and academic background"
      >
        <div>
          <strong>
            6<span>+</span>
          </strong>
          <span>Years in frontend engineering</span>
        </div>
        <div>
          <strong>0{publications.length}</strong>
          <span>Co-authored publications</span>
        </div>
        <div>
          <strong className="academic-proof">First Class</strong>
          <span>Microbiology · University of Lagos</span>
        </div>
        <Link href="/research" className="hero-scroll">
          CGPA 4.74 / 5.00
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
