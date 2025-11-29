import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import TechStackSection from "@/components/TechStackSection";
import BenefitsSection from "@/components/BenefitsSection";
import TimelineSection from "@/components/TimelineSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoSection />
      <TechStackSection />
      <BenefitsSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
