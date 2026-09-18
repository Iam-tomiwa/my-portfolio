import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="section-kicker">404 / A small detour</p>
      <h1>
        Nothing here.
        <br />
        <em>Plenty to explore.</em>
      </h1>
      <p>The page you’re looking for has moved or doesn’t exist.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        Back to my portfolio
      </Link>
    </section>
  );
}
