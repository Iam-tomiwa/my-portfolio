"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";
import { motion, type Variants } from "framer-motion";

export default function Projects() {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="section section--alt border-b border-[#1f1f1f]"
    >
      <div className="container">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Portfolio
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Featured <em>Projects</em>
        </motion.h2>
        <motion.div
          className="section-rule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Projects Grid — image-forward cards, hairline border trick */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[1.5px] bg-[#1f1f1f] border-[1.5px] border-[#1f1f1f]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {projects.map((project) => {
            const previewHref = project.url ?? project.github;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className="group relative bg-[#050505] flex flex-col hover:bg-[#0c0c0c] transition-colors duration-300"
              >
                {/* Preview image / placeholder */}
                <a
                  href={previewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="relative block aspect-16/10 overflow-hidden border-b border-[#1f1f1f]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#0c0c0c] via-[#08130f] to-[#050505]">
                      {/* Faint grid texture */}
                      <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      {/* Emerald glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_70%)]" />
                      <span className="relative font-display text-7xl font-light text-accent/40 select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Bottom scrim for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#050505] to-transparent opacity-80 pointer-events-none" />

                  {/* Type badge overlay */}
                  <span className="absolute top-3 left-3 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-amber bg-[#050505]/70 backdrop-blur-sm px-2 py-1 border border-[#1f1f1f]">
                    {project.type}
                  </span>
                </a>

                {/* Card body */}
                <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
                  {/* Header */}
                  <div className="project-header">
                    <h3 className="project-name text-xl font-bold font-display group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="project-links flex gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.6rem] tracking-[0.1rem] uppercase text-[#9ca3af] border border-[#1f1f1f] px-2 py-0.5 hover:border-accent hover:text-accent transition-all duration-200"
                        >
                          Source
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.6rem] tracking-[0.1rem] uppercase text-[#9ca3af] border border-[#1f1f1f] px-2 py-0.5 hover:border-accent hover:text-accent transition-all duration-200"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="project-desc text-[0.9rem] text-[#d1d5db] leading-[1.65] font-sans">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="project-bullets">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  {/* Tech footer */}
                  <div className="project-footer border-t border-[#1f1f1f] pt-4 mt-auto">
                    <p className="project-lang font-mono text-[0.62rem] text-[#9ca3af]">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
