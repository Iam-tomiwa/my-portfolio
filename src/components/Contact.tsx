"use client";

import { personalInfo } from "@/data/portfolio";
import { motion, type Variants } from "framer-motion";

export default function Contact() {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Email", href: `mailto:${personalInfo.email}` },
    { name: "LinkedIn", href: personalInfo.linkedin },
    { name: "GitHub", href: personalInfo.github },
    { name: "Resume / CV", href: personalInfo.resumeUrl }
  ];

  return (
    <footer id="contact" className="section bg-[#050505] border-t border-[#1f1f1f]">
      <div className="container text-center flex flex-col items-center">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title animate-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Get in <em>Touch</em>
        </motion.h2>
        <motion.div
          className="section-rule mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-[#9ca3af] max-w-xl mx-auto leading-relaxed mb-10 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          I am currently open to senior frontend developer roles, computational biology collaborations, and MS/PhD research opportunities. If you have an exciting project or position, feel free to reach out.
        </motion.p>

        {/* Contact info details */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 font-mono text-xs sm:text-sm text-[#f3f4f6]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-accent transition-colors duration-200 border-b border-[#1f1f1f] pb-1"
          >
            {personalInfo.email}
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="text-[#9ca3af]">{personalInfo.phone}</span>
        </motion.div>

        {/* Social Links List */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-[#9ca3af] hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Footer bottom metadata & Scroll To Top */}
        <motion.div
          className="w-full border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <p>&copy; {new Date().getFullYear()} Ajayi Emmanuel Tomiwa. All rights reserved.</p>
          <button
            onClick={handleScrollToTop}
            className="font-mono text-[0.62rem] uppercase tracking-wider text-[#9ca3af] hover:text-white cursor-pointer transition-colors duration-200 flex items-center gap-1"
            aria-label="Scroll to top"
          >
            Back to top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
