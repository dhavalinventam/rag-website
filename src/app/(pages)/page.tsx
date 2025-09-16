import HeroSection from "@/components/pages/home/hero-section";
import DescriptionOverview from "@/components/pages/home/description-overview";
import FeaturesSection from "@/components/pages/home/features-section";
// import HowItWorks from "@/components/pages/home/how-it-works";
import UseCases from "@/components/pages/home/use-cases";
import CTASection from "@/components/pages/home/cta-section";
import FAQSection from "@/components/pages/home/faq-section";
import AIProcessFlowchart from "@/components/pages/home/ai-process-flowchart/ai-process-flowchart";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DescriptionOverview />
      {/* <HowItWorks /> */}
      <AIProcessFlowchart/>
      <FeaturesSection />
      <UseCases />
      <FAQSection />
      <CTASection />
    </>
  );
}
