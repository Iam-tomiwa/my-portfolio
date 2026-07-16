"use client";

import { personalInfo } from "@/data/portfolio";

interface NavSmProps {
  /** Whether the drawer is currently revealed. */
  show: boolean;
  /** Slides the page card back / forth. */
  toggle: () => void;
}

const links = [
  { name: "Home", href: "#", home: true },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

/**
 * Off-canvas mobile menu. It is ALWAYS mounted and sits fixed BEHIND the page
 * (z-index: 1). The page wrapper (z-index: 100) covers it until it slides away.
 * We only toggle opacity here — the reveal comes from the page sliding, not the
 * menu moving. On desktop it is `display: none`, so it never affects layout.
 */
export default function NavSm({ show, toggle }: NavSmProps) {
  const handleLink = (isHome: boolean) => {
    if (isHome) window.scrollTo(0, 0);
    toggle();
  };

  return (
    <div className="navsm" style={{ opacity: show ? 1 : 0 }} aria-hidden={!show}>
      {/* Round close (X) button, top-right of the revealed area */}
      <button className="navsm-close" onClick={toggle} aria-label="Close menu">
        ✕
      </button>

      <ul className="navsm-list">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={() => handleLink(Boolean(link.home))}>
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navsm-cv"
            onClick={toggle}
          >
            CV ↗
          </a>
        </li>
      </ul>
    </div>
  );
}
