import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Interest Registered!",
      description: "We'll notify you when tracr launches.",
    });

    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Future of <span className="text-gradient">Trading</span>
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Be among the first to experience tracr's revolutionary AI-powered trading platform. 
                  Register your interest today and get exclusive early access when we launch.
                </p>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose tracr?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>AI-Powered Insights:</strong> Understand market movements with AI-driven explanations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Smart Trading Tools:</strong> Cut through noise with data-backed decisions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Professional Analytics:</strong> Track performance with precision</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>24/7 AI Support:</strong> Get instant help and personalized recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                  <h4 className="text-lg font-semibold text-accent mb-2">🚀 Platform Launch Notification</h4>
                  <p className="text-foreground">
                    We're putting the finishing touches on tracr. Register your interest now to be notified 
                    the moment we go live, plus get exclusive access to beta features and early-bird pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-slide-in-right">
              <Card className="bg-card-gradient border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Register Your Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Register Interest
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By registering, you agree to receive updates about tracr's launch. 
                      We respect your privacy and won't spam you.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;