import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  // Handle FAQ scroll when coming from other pages
  useEffect(() => {
    if (window.location.hash === '#faq') {
      setTimeout(() => {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Solutions />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
