import HeroSection from "@/components/pages/home/hero-section";
import FeaturesSection from "@/components/pages/home/features-section";
import HowItWorks from "@/components/pages/home/how-it-works";
import UseCases from "@/components/pages/home/use-cases";
import FAQSection from "@/components/pages/home/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <UseCases />
      <FAQSection />
    </>
  );
}
