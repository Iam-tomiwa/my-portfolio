"use client";

import { useState } from "react";
import { devExperience, academicExperience } from "@/data/portfolio";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"dev" | "research">("dev");
  // Tracks each item's bullet-point collapse state (key: `${tab}-${idx}`).
  // Unset === collapsed, so items start compressed on load; users expand the
  // ones they want to read and scroll past the rest.
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) =>
    setCollapsed((prev) => ({ ...prev, [key]: !(prev[key] ?? true) }));

  const timelineData = activeTab === "dev" ? devExperience : academicExperience;

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="experience" className="section border-b border-[#1f1f1f]">
      <div className="container">
        {/* Section Header */}
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Career
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          Work <em>Experience</em>
        </motion.h2>
        <motion.div
          className="section-rule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        />

        {/* Tab Controls (using Zubs' filter button style) */}
        <motion.div
          className="flex gap-2 mb-10 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <button
            onClick={() => setActiveTab("dev")}
            className={`font-mono text-[0.68rem] tracking-[0.12em] uppercase px-4 py-2 border cursor-pointer transition-all duration-200 ${
              activeTab === "dev"
                ? "border-accent text-accent bg-accent/5"
                : "border-[#1f1f1f] text-[#9ca3af] hover:text-[#f3f4f6]"
            }`}
          >
            Software Engineering
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`font-mono text-[0.68rem] tracking-[0.12em] uppercase px-4 py-2 border cursor-pointer transition-all duration-200 ${
              activeTab === "research"
                ? "border-accent text-accent bg-accent/5"
                : "border-[#1f1f1f] text-[#9ca3af] hover:text-[#f3f4f6]"
            }`}
          >
            Academic &amp; Research
          </button>
        </motion.div>

        {/* Timeline List (matching Zubs' exp-list & exp-item grid) */}
        <div className="exp-list">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {timelineData.map((item, idx) => {
                const itemKey = `${activeTab}-${idx}`;
                const isCollapsed = collapsed[itemKey] ?? true;

                return (
                  <div key={itemKey} className="exp-item">
                    <div className="exp-meta">
                      <p className="exp-date">{item.date}</p>
                      <p className="exp-company">{item.company}</p>
                      <p className="exp-type">{item.type}</p>
                    </div>
                    <div className="exp-content">
                      {/* Role + accordion toggle */}
                      <div className="exp-role-row">
                        <h3 className="exp-role">{item.role}</h3>
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="exp-toggle"
                          aria-expanded={!isCollapsed}
                          aria-label={
                            isCollapsed
                              ? `Expand details for ${item.role}`
                              : `Collapse details for ${item.role}`
                          }
                        >
                          {isCollapsed ? (
                            <ChevronsUpDown size={15} strokeWidth={1.75} />
                          ) : (
                            <ChevronsDownUp size={15} strokeWidth={1.75} />
                          )}
                        </button>
                      </div>

                      {/* Collapsible bullet points */}
                      <AnimatePresence initial={false}>
                        {!isCollapsed && (
                          <motion.ul
                            className="exp-bullets overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>

                      {item.tech && item.tech.length > 0 && (
                        <div className="exp-stack">
                          {item.tech.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
