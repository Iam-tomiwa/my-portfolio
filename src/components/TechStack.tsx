const toolkit = [
  {
    title: "The everyday toolkit",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Behind the interface",
    items: ["TanStack Query", "Zustand", "Sanity", "GraphQL"],
  },
  {
    title: "The finer details",
    items: ["GSAP", "Framer Motion", "Responsive UI", "Frontend architecture"],
  },
];

export default function TechStack() {
  return (
    <div className="toolkit" aria-label="Technical expertise">
      {toolkit.map((group) => (
        <div key={group.title}>
          <h3>{group.title}</h3>
          <p>{group.items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}
