"use client";

import { skills } from "@/data/portfolio";
import { motion, type Variants } from "framer-motion";

export default function TechStack() {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="section section--alt border-b border-[#1f1f1f]">
      <div className="container">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Technical Stack
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Skills &amp; <em>Tools</em>
        </motion.h2>
        <motion.div
          className="section-rule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Skills Grid matching Zubs' border-box grid layout */}
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          {skills.map((group, idx) => (
            <div key={idx} className="skill-group">
              <p className="skill-group-label">{group.category}</p>
              <div className="skill-items">
                {group.items.map((item, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
