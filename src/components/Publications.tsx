"use client";

import { publications } from "@/data/portfolio";
import { motion, type Variants } from "framer-motion";

export default function Publications() {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const researchInterests = [
    {
      icon: "🧬",
      name: "Genomics & Metagenomics",
      desc: "Analyzing environmental genomic datasets and microbial communities."
    },
    {
      icon: "💻",
      name: "Bioinformatics",
      desc: "Applying computational algorithms to biological sequence analysis."
    },
    {
      icon: "🧫",
      name: "Phage Genome Annotation",
      desc: "Drafting, annotating, and characterizing novel Streptomyces phages."
    },
    {
      icon: "🖥️",
      name: "Computational Biology",
      desc: "Bridging software pipelines (Python, Biopython) with lab data analysis."
    },
    {
      icon: "📊",
      name: "Data Analysis & Modeling",
      desc: "Processing clinical testing records and biological test statistics."
    },
    {
      icon: "🎨",
      name: "Paint Biodegradation",
      desc: "Evaluating corrosion durability and EIS charge transfer resistance."
    }
  ];

  // Helper to highlight author name "Ajayi, E." in the list
  const formatAuthors = (authors: string) => {
    const parts = authors.split(/(Ajayi, E\.)/g);
    return parts.map((part, idx) => 
      part === "Ajayi, E." ? (
        <strong key={idx} className="text-accent font-semibold underline underline-offset-2">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <section id="research" className="section border-b border-[#1f1f1f]">
      <div className="container">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Academic
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Research &amp; <em>Publications</em>
        </motion.h2>
        <motion.div
          className="section-rule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Research Grid */}
        <div className="research-grid">
          {/* Left Column (Research Interests) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="space-y-8"
          >
            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
              I am drawn to research questions at the intersection of biological systems, genomics, and computation. My goal is to apply software engineering and database automation to biological data, resolving complex workflows.
            </p>
            
            {/* Interests Grid with Zubs' Border Styling */}
            <div className="research-interests">
              {researchInterests.map((interest, idx) => (
                <div key={idx} className="interest-item">
                  <div className="interest-icon">{interest.icon}</div>
                  <h4 className="interest-name">{interest.name}</h4>
                  <p className="interest-desc">{interest.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Scientific Publications) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="space-y-8"
          >
            <div>
              <p className="section-label mb-4">Scientific Publications</p>
              
              {/* Publications List */}
              <div className="speaking-list">
                {publications.map((pub, idx) => (
                  <div key={idx} className="talk-item">
                    {/* Publication Year */}
                    <p className="talk-date">
                      {pub.date}
                    </p>
                    
                    {/* Publication Details */}
                    <div>
                      <h4 className="talk-title">
                        {pub.title}
                      </h4>
                      <p className="talk-event">
                        {formatAuthors(pub.authors)}
                      </p>
                      <p className="talk-event mt-1">
                        {pub.journal}
                      </p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[0.62rem] tracking-[0.05em] uppercase text-accent hover:text-white transition-colors duration-200 pt-1"
                      >
                        DOI ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
