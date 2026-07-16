"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { motion, type Variants } from "framer-motion";

const phrases = [
  "Senior Front-End Developer",
  "Bioinformatics Researcher",
  "First-Class Microbiologist"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    setText(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero">
      {/* Decorative grid background */}
      <div className="hero-grid-bg" />

      <div className="container relative z-10">
        {/* Eyebrow Location */}
        <motion.p
          className="hero-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Based in Lagos, Nigeria
        </motion.p>

        {/* Big Name Header */}
        <motion.h1
          className="hero-name"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Ajayi<br />
          <span className="line2">Emmanuel Tomiwa</span>
        </motion.h1>

        {/* Tagline with Typewriter effect */}
        <motion.p
          className="hero-tagline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <span className="font-mono text-accent font-semibold">{text}</span>
          <span className="text-accent animate-pulse font-mono">|</span>
          <br />
          Building highly-optimized web architectures in Fintech &amp; IoT. First-Class Honours graduate applying computational skills and systems thinking to biological genomes and frontend ecosystems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <a href="#contact" className="btn btn-primary">
            Open to Opportunities ↓
          </a>
          <a href="#research" className="btn btn-secondary">
            Research Interests →
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Download CV ↗
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="hero-socials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
