type SectionLink = { href: string; label: string };

export default function SectionNav({ links }: { links: SectionLink[] }) {
  return (
    <nav className="section-nav" aria-label="On this page">
      <span className="small-label">On this page</span>
      <div>
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    </nav>
  );
}
