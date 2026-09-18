"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/engineering", label: "Engineering" },
  { href: "/research", label: "Research" },
  { href: "/community", label: "Community" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const close = () => {
      if (menu.current) menu.current.open = false;
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        close();
        menu.current.querySelector("summary")?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node)) close();
    };
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (breakpoint.matches) close();
    };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    breakpoint.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
      breakpoint.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="wordmark" href="/" aria-label="Ajayi Tomiwa — home">
          ajayitomiwa<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href={`mailto:${personalInfo.email}`} className="nav-contact">
            Let’s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <details className="mobile-menu" ref={menu}>
            <summary aria-label="Toggle navigation">
              <Menu className="menu-open-icon" aria-hidden="true" />
              <X className="menu-close-icon" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              {[
                { href: "/", label: "Home" },
                ...links,
                { href: "#contact", label: "Let’s talk" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => {
                    if (menu.current) menu.current.open = false;
                  }}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={20} />
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
