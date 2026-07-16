"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import NavSm from "@/components/NavSm";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

/**
 * Off-canvas "push" states for the page wrapper. When closed we carry NO
 * transform (transform: none) so the wrapper creates no containing block —
 * the sticky navbar and normal desktop flow are completely unaffected.
 * When open (mobile only), the whole page slides left into a lifted card,
 * revealing the menu that sits fixed behind it.
 */
const wrapClosed: CSSProperties = {
  transform: "none",
  top: 0,
  height: "max-content",
  overflow: "unset",
};

const wrapOpen: CSSProperties = {
  transform: "translate(-75vw, 5vh)",
  boxShadow: "6px 6px var(--accent)",
  borderRadius: "5px",
  top: "50%",
  height: "90vh",
  overflowX: "hidden",
  overflowY: "auto",
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <>
      {/* Scroll reading progress bar */}
      {isLoaded && <div className="scroll-progress-bar" />}

      {/* Interactive preloader overlay (z-9999 — always on top) */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Off-canvas menu — always mounted, sits fixed BEHIND the page card */}
      <NavSm show={showNav} toggle={toggleNav} />

      {/* Entire page content: slides away as one card to reveal the menu */}
      <div className="app-wrap" style={showNav ? wrapOpen : wrapClosed}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col min-h-screen ${isLoaded ? "pointer-events-auto" : "pointer-events-none h-screen overflow-hidden"}`}
        >
          <Navbar onMenuToggle={toggleNav} />
          <main className="grow">
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Publications />
          </main>
          <Contact />
        </motion.div>
      </div>
    </>
  );
}
