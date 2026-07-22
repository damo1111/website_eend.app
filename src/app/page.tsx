import { Nav } from "@/components/ui/Nav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Apps } from "@/components/sections/Apps";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Apps />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
