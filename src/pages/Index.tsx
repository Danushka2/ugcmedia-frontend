import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import BrandMarquee from "@/components/BrandMarquee";
import WhyUGCSection from "@/components/WhyUGCSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyTopBrandsSection from "@/components/WhyTopBrandsSection";
import CaseStudySection from "@/components/CaseStudySection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <BrandMarquee />
      <WhyTopBrandsSection />
      <WhyUGCSection />
      <HowWeHelpSection />
      <CaseStudySection />
      <HowItWorksSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
