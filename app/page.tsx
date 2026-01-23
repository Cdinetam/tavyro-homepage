import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import TargetAudience from "@/components/TargetAudience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Coaching from "@/components/Coaching";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Impact />
      <TargetAudience />
      <Services />
      <Pricing />
      <Coaching />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
