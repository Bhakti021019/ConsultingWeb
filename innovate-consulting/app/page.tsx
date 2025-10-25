import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import TeamPreview from './components/TeamPreview';
import CallToActionSection from './components/CallToActionSection';
// import ServicesPage from './services/page';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <>
    <Navbar />
      <HeroSection
        title="Transform Your Business Strategy, Accelerate Growth"
        subtitle="We partner with ambitious companies to unlock opportunities through actionable insights and innovative solutions."
        cta="Schedule a Free Consultation"
      />
      <TestimonialsSection />
      <TeamPreview />
      <CallToActionSection />
      <Footer />
    </>
  );
}
