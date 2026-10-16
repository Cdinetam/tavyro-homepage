import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MindInput from "@/components/MindInput";
import ExampleThoughts from "@/components/ExampleThoughts";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-40">
          <Header />
        </div>
        <Hero />
      </div>
      <MindInput />
      <ExampleThoughts />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
