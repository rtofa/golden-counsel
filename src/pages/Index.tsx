import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
