import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, X, Instagram, TrendingUp, Zap, Shield, Target, BarChart3, Brain } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Fahad Masroor",
      role: "CEO",
      photo: "/lovable-uploads/378e11d9-4a45-488d-9116-7e20d5c1391f.png",
      linkedin: "https://www.linkedin.com/in/fahad-masroor/",
      twitter: "https://x.com/tracr_ai",
      instagram: "https://www.instagram.com/tracr.ai/"
    },
    {
      name: "Archit Patel",
      role: "COO",
      photo: "/lovable-uploads/37ef7d83-1d4e-4ff7-a05c-fcd643af8deb.png",
      linkedin: "https://www.linkedin.com/in/archit-patel-64995017b/",
      twitter: "https://x.com/tracr_ai",
      instagram: "https://www.instagram.com/tracr.ai/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section with Trading Theme */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Animated Market Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            {/* Market Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-primary/20 h-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
            {/* Floating Charts */}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About <span className="text-gradient">tracr ai</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Building smarter tools so every trader can see behind the trade.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement with Market Energy */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Revolutionizing Trading Through <span className="text-gradient">AI Intelligence</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed">
                  At tracr ai, we believe trading should be smarter, simpler, and more accessible. Born from years of experience in the markets, our mission is to give traders the tools they need to cut through noise and trade with confidence. By combining AI-driven insights and powerful analytics, we empower traders to understand the 'why' behind every market move. Our vision is to shorten the learning curve, reduce costly mistakes, and help every trader — from beginner to advanced — to see behind the trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Values & Story with Trading Focus */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Core Values Section - Left Column */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Card className="bg-card border-border card-hover group h-full animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground">Core Values</h3>
                    </div>
                    
                    <div className="space-y-6 flex-1 flex flex-col justify-around">
                      {[
                        { icon: Zap, title: "Innovation & Automation", desc: "building smarter, faster ways to trade" },
                        { icon: TrendingUp, title: "Empowerment", desc: "giving traders clarity and control" },
                        { icon: Target, title: "Precision", desc: "ensuring accuracy in every feature" },
                        { icon: Brain, title: "Simplicity", desc: "easy to use without sacrificing depth" }
                      ].map((value, index) => (
                        <div key={index} className="flex items-start space-x-3 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300">
                          <div className="p-3 bg-background rounded-lg">
                            <value.icon className="h-6 w-6 text-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-lg mb-2">{value.title}</h4>
                            <p className="text-base text-muted-foreground leading-relaxed">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mission & Story Section - Right Column */}
              <div className="space-y-8 flex flex-col h-full">
                {/* Mission Card */}
                <Card className="bg-card border-border card-hover group animate-fade-in animate-scale-in flex-1" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      To level the playing field for retail traders by providing professional-grade tools that are intuitive, accessible, and powered by AI. We believe trading should be guided by insight, not emotion.
                    </p>
                  </CardContent>
                </Card>

                {/* Story Card */}
                <Card className="bg-card border-border card-hover group animate-fade-in animate-scale-in flex-1" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Our story began with a frustration every trader knows: strategies that work on paper often fail in practice. After years of trading and research, we realised the missing link was a platform that combined live analysis, and AI-driven insights all in one place. That vision became tracr ai, a platform built by traders, for traders, to help you see behind the trade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Waitlist Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" style={{ animationDuration: '3s' }} />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <Card className="bg-gradient-to-br from-card via-card/90 to-primary/5 border-primary/20 card-hover group animate-fade-in animate-scale-in">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Transform Your Trading?
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join thousands of traders who are already on the waitlist. Be the first to experience the future of AI-powered trading analytics.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/register"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    Join Our Waitlist
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Early access • No commitment • Free to join
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section with Market Theme */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background animate-pulse" style={{ animationDuration: '4s' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate professionals revolutionizing the future of AI-powered trading by empowering investors with intelligence, speed and trust. With every step, we are building a smarter, more transparent, and more accessible future for global trading
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-card via-card/80 to-card/60 border-border/50 card-hover group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center relative">
                    
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto relative">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-6">{member.role}</p>
                    
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="p-3 bg-secondary/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-3 bg-secondary/50 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name}'s X`}
                      >
                        <X className="h-4 w-4" />
                      </a>
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          className="p-3 bg-secondary/50 rounded-lg hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;