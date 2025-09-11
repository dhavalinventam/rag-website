import HeroSection from "@/components/pages/home/hero-section";
import FeaturesSection from "@/components/pages/home/features-section";
// import HowItWorks from "@/components/pages/home/how-it-works";
import UseCases from "@/components/pages/home/use-cases";
import CTASection from "@/components/pages/home/cta-section";
import FAQSection from "@/components/pages/home/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <HowItWorks /> */}
      <FeaturesSection />
      <UseCases />
      <FAQSection />
      <CTASection />
    </>
  );
}
