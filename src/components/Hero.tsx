import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border mb-8">
            <span className="text-sm text-muted-foreground">Trustpilot</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-2 text-white animate-fade-in">
            <span className="inline-block animate-slide-in-right animation-delay-200">THE</span>{' '}
            <span className="inline-block animate-slide-in-right animation-delay-400">FUTURE</span>{' '}
            <span className="inline-block animate-slide-in-right animation-delay-600">OF</span>{' '}
            <span className="inline-block animate-slide-in-right animation-delay-800">TRADING</span>{' '}
            <span className="inline-block text-white/90 animate-scale-in animation-delay-1000">STARTS HERE</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto px-4">
            See behind the trade. Trade ahead of the market.
          </p>
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/register">
              <Button variant="default" size="xl" className="bg-white text-blue-600 hover:bg-white/90 animate-glow-pulse">
                Register your Interest
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={scrollToSolutions}
            >
              Explore Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-white cursor-pointer hover:text-white/80 transition-colors"
              onClick={scrollToSolutions}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;