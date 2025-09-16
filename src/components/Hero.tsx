import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
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

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in space-y-8">

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
            See Behind the{' '}
            <span 
              key={currentTextIndex}
              className="inline-block animate-fade-in text-white"
            >
              {texts[currentTextIndex]}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            See behind the trade. Trade ahead of the market.
          </p>
          

          {/* CTA Buttons */}
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
              onClick={scrollToSolutions}
            >
              Explore Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <ChevronDown 
              size={28} 
              className="mx-auto text-white/60 cursor-pointer hover:text-white/90 transition-all duration-300 hover:scale-110"
              onClick={scrollToSolutions}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;