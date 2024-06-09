import CustomizationSection from "@/components/ui/home/customizationSection/CustomizationSection";
import FeatureSection from "@/components/ui/home/featureSection/FeatureSection";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import WhyChoseUsSection from "@/components/ui/home/whyChoseUs/WhyChoseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <WhyChoseUsSection />
      <CustomizationSection />
    </>
  );
}
