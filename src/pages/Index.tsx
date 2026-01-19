import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import CasesSection from "@/components/home/CasesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <TeamSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
