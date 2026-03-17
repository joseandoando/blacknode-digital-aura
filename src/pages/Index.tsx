import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientsSection from "@/components/ClientsSection";
import WebHostingSection from "@/components/WebHostingSection";
import TeamSection from "@/components/TeamSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <ClientsSection />
      <WebHostingSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
