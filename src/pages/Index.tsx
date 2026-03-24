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

const WHATSAPP_NUMBER = "56936168900";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me gustaría recibir más información sobre sus servicios.");

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
      <PartnersCarousel />
      <CTASection />
      <Footer />

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20ba58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.45 0 .1 5.35.1 11.92c0 2.1.55 4.14 1.58 5.94L0 24l6.32-1.65a11.85 11.85 0 0 0 5.7 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.43-8.41ZM12.04 21.8h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.22-3.75.98 1-3.65-.24-.38A9.8 9.8 0 0 1 2.2 11.92C2.2 6.5 6.61 2.1 12.03 2.1a9.75 9.75 0 0 1 6.95 2.88 9.75 9.75 0 0 1 2.88 6.95c0 5.42-4.4 9.82-9.82 9.82Zm5.38-7.36c-.3-.15-1.76-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47a8.96 8.96 0 0 1-1.66-2.07c-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.57-.48-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.38-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.62.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
};

export default Index;
