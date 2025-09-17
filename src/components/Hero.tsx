import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Trade",
    "Market", 
    "Investment",
    "Strategy",
    "Opportunity"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToFAQ = () => {
    const element = document.getElementById('faq');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen py-20 px-8 sm:px-12 lg:px-16 pt-32 pb-40 flex items-center">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Hero Content */}
        <div className="text-center animate-fade-in space-y-12">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white max-w-6xl mx-auto whitespace-nowrap">
            See Behind the{' '}
            <span 
              key={currentTextIndex}
              className="inline-block animate-fade-in text-white"
            >
              {texts[currentTextIndex]}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Trade ahead of the market.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register">
              <Button 
                variant="default" 
                size="xl" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-2xl font-medium text-lg"
              >
                Register your Interest
              </Button>
            </Link>
            <Button 
              variant="default" 
              size="xl" 
              className="bg-gradient-to-r from-pantone-298/20 to-pantone-715/20 backdrop-blur-md text-white border border-pantone-298/30 hover:from-pantone-298/30 hover:to-pantone-715/30 hover:scale-105 hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-2xl font-medium text-lg"
              onClick={scrollToFAQ}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;