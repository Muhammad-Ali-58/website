import HeroSection from '@/components/HeroSection';
import Meet from '@/components/Meet';
import ServicesSection from '@/components/ServicesSection';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Meet />
      <LatestWork />
      <ProcessSection />
      <TestimonialsSection />
      <ServicesSection />
      <PricingSection />
      <IntegrationsSection />
      <WhyChooseSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
