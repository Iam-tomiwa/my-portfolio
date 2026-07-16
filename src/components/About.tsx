"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo, education } from "@/data/portfolio";

export default function About() {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const researchInterests = [
    "Bioinformatics & HRI",
    "Genomics & Metagenomics",
    "Phage Genome Annotation",
    "Computational Biology",
    "Data Analysis & Modeling",
  ];

  return (
    <section id="about" className="section border-b border-[#1f1f1f]">
      <div className="container">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          About
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Developer by trade,
          <br />
          <em>scientist at heart</em>
        </motion.h2>
        <motion.div
          className="section-rule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Main Grid */}
        <div className="about-grid">
          {/* Bio text (Left Column) */}
          <motion.div
            className="about-bio text-sm sm:text-base leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <p className="text-[#f3f4f6] mb-6">
              I am a Senior Front-End Engineer with over 6 years of experience
              architecting and building high-performance web products. My
              journey has led me to write and refactor large codebases across
              diverse industries like fintech, IoT cataloging, e-commerce, and
              comic entertainment platforms.
            </p>
            <p className="text-[#9ca3af] mb-4">
              I hold a B.Sc. First Class Honours in Microbiology from the
              University of Lagos (CGPA 4.74/5.00). My academic pursuits sparked
              a deep fascination with computational biology and genomics,
              leading to hands-on experience in genome annotation and
              characterization of mycobacteriophages.
            </p>
            <p className="text-[#9ca3af] mb-6">
              I believe that frontend engineering and microbiology research
              share a core methodology: analyzing complex, interconnected
              systems, and translating that complexity into clean, modular, and
              human-interpretable patterns. Whether I&apos;m refactoring a
              25,000-line React codebase or comparing phage genomes with Python,
              my goal is always to deliver precision, performance, and
              structure.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <a href="#contact" className="btn btn-primary text-xs">
                Get in Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-xs"
              >
                Academic Resume ↗
              </a>
            </div>
          </motion.div>

          {/* Meta Details (Right Column) */}
          <motion.div
            className="about-meta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
          >
            {/* Location Block */}
            <div className="meta-block">
              <p className="meta-label">Location</p>
              <p className="meta-value">Lagos, Nigeria</p>
            </div>

            {/* Education Block */}
            <div className="meta-block">
              <p className="meta-label">Education</p>
              <p className="meta-value">
                {education.degree} <br />
                <span className="text-accent font-medium">
                  {education.school}
                </span>{" "}
                <br />
                <span className="text-xs text-slate-500 font-mono">
                  CGPA: {education.cgpa}
                </span>
              </p>
            </div>

            {/* Research Interests Block */}
            <div className="meta-block">
              <p className="meta-label">Research Interests</p>
              <div className="tags">
                {researchInterests.map((interest, idx) => (
                  <span key={idx} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div className="meta-block">
              <p className="meta-label">Certifications &amp; Hons</p>
              <p className="meta-value">
                Helix Biogen Institute — Genomics &amp; Bioinformatics <br />
                American Society for Microbiology (ASM) Member <br />
                NAMS Southwest — Mentorship Certificate &amp; Speaking
                Engagement Award
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
