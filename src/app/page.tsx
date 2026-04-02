import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { landingData, landingPageClassName } from "@/data/landingData";

export default function Home() {
  const { hero, about, services, features, cta } = landingData;

  return (
    <div className={landingPageClassName}>
      <Hero {...hero} />
      <About {...about} />
      <Services {...services} />
      <Features {...features} />
      <CTA {...cta} />
    </div>
  );
}
