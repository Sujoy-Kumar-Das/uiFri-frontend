import CustomizationSection from "@/components/ui/home/customizationSection/CustomizationSection";
import DownloadAppSection from "@/components/ui/home/downloadAppSection/DownloadAppSection";
import FAQSection from "@/components/ui/home/faqSection/FAQSection";
import FeatureSection from "@/components/ui/home/featureSection/FeatureSection";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import TestimonialSection from "@/components/ui/home/testimonials/TestimonialSection";
import WhyChoseUsSection from "@/components/ui/home/whyChoseUs/WhyChoseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <WhyChoseUsSection />
      <CustomizationSection />
      <TestimonialSection />
      <FAQSection />
      <DownloadAppSection />
    </>
  );
}
