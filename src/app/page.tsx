import Hero from "@/components/Hero";
import About from "@/components/About";
import { PersonSchema } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <PersonSchema />
      <Hero />
      <About />
    </>
  );
}
