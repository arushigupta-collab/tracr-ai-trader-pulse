import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('registration_interests')
        .insert([
          {
            name: formData.name,
            email: formData.email
          }
        ]);

      if (error) {
        // Handle duplicate email error specifically
        if (error.code === '23505' && error.message.includes('email')) {
          toast({
            title: "Email already registered",
            description: "This email is already registered for updates.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Interest Registered!",
          description: "We'll notify you when tracr launches.",
        });
        setFormData({ name: '', email: '' });
      }
    } catch (error) {
      console.error('Error registering interest:', error);
      toast({
        title: "Registration failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <h4 className="text-lg font-semibold text-accent mb-2">Platform Launch Notification</h4>
                  <p className="text-foreground">
                    We're putting the finishing touches on tracr. Register your interest now to be notified 
                    the moment we go live, plus get exclusive access to beta features and early-bird pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-slide-in-right">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Register Your Interest</h3>
                
                <div className="mb-8">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Join thousands of traders who are waiting for tracr's launch. Be the first to access our revolutionary AI-powered trading platform.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
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
                      className="mt-2 h-12"
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
                      className="mt-2 h-12"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="hero" size="lg" className="w-full h-12" disabled={isSubmitting}>
                      {isSubmitting ? "Registering..." : "Register Interest"}
                    </Button>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      By registering, you agree to receive updates about tracr's launch. 
                      We respect your privacy and won't spam you. You can unsubscribe at any time.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;