"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";

interface NavbarProps {
  /** Opens the off-canvas mobile menu (see NavSm). */
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-inner">
        {/* Brand Name Logo */}
        <a href="#" className="nav-logo">
          {personalInfo.name}
        </a>

        {/* Desktop inline links (hidden < 760px via .nav-links CSS) */}
        <div className="nav-links" id="navLinks">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CV Button */}
        <div className="hidden md:block">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            CV ↗
          </a>
        </div>

        {/* Burger — opens the off-canvas menu (mobile only) */}
        <button
          onClick={onMenuToggle}
          className="nav-burger"
          id="burger"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
