import { CtaSection } from "@/components/sections/cta-section";
import { ExploreSection } from "@/components/sections/explore-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductSection } from "@/components/sections/product-section";
import { SolutionsSection } from "@/components/sections/solutions-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <SolutionsSection />
      <FeaturesSection />
      <ExploreSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
