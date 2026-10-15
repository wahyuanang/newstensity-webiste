import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { FeaturesSection } from "@/components/sections/features-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
    </main>
  );
}
