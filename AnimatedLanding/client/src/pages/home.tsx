import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  );
}
