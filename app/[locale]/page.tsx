import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { WhyNewstensitySection } from "@/components/sections/why-newstensity-section";
import { DataCoverageSection } from "@/components/sections/data-coverage-section";
import { OurBoardSection } from "@/components/sections/our-board-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhyNewstensitySection />
      <DataCoverageSection />
      <TestimonialsSection />
      <OurBoardSection />
      <FaqSection />
      <ContactFormSection />
    </main>
  );
}
