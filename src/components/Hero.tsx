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
      <div className="absolute inset-0 bg-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border mb-8">
            <span className="text-sm text-muted-foreground">Trustpilot</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            One Platform, Endless{' '}
            <span className="text-gradient">Trading Possibilities</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Tracr is an all-in-one trading and market analysis platform with every tool a trader would ever need.
          </p>
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/register">
              <Button variant="hero-bw" size="xl" className="animate-glow-pulse">
                Register your Interest
              </Button>
            </Link>
            <Button 
              variant="hero-bw" 
              size="xl" 
              onClick={scrollToSolutions}
            >
              Explore Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-primary cursor-pointer hover:text-primary-glow transition-colors"
              onClick={scrollToSolutions}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;