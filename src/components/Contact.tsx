import { ArrowUpRight, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import CopyEmail from "@/components/CopyEmail";

export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <span className="availability">
            <span className="status-dot" />
            Open to engineering & research opportunities
          </span>
          <span>Lagos, Nigeria · Working globally</span>
        </div>
        <div className="contact-heading">
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <a
            className="contact-arrow"
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Tomiwa"
          >
            <ArrowUpRight aria-hidden="true" strokeWidth={1} />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <p>
              Building a product, exploring a research question, or looking for
              a collaborator?
            </p>
            <div className="email-row">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <CopyEmail email={personalInfo.email} />
            </div>
          </div>
          <div className="contact-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
              Résumé
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-line">
          <a className="wordmark" href="#top">
            ajayitomiwa<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} Ajayi Emmanuel Tomiwa</p>
          <a className="back-top" href="#top">
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
