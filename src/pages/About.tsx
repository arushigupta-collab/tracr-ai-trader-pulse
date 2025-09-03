import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, TrendingUp, Zap, Shield, Target, BarChart3, Brain } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of AI Research",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Amanda Foster",
      role: "Head of Trading Strategy",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Wilson",
      role: "Lead Engineer",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                About <span className="text-gradient">tracr</span>
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
                  At tracr, we believe trading should be smarter, simpler, and more accessible. Born from years of experience in the markets, our mission is to give traders the tools they need to cut through noise and trade with confidence. By combining AI-driven insights and powerful analytics, we empower traders to understand the 'why' behind every market move. Our vision is to shorten the learning curve, reduce costly mistakes, and help every trader — from beginner to advanced — to see behind the trade.
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission Card */}
              <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full transform -translate-x-12 translate-y-12" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    To level the playing field for retail traders by providing professional-grade tools that are intuitive, accessible, and powered by AI. We believe trading should be guided by insight, not emotion.
                  </p>
                  <div className="h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>

              {/* Core Values Card */}
              <Card className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border-accent/30 card-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent/30 to-transparent rounded-full transform -translate-x-20 -translate-y-20" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-accent/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent">Core Values</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Zap, title: "Innovation & Automation", desc: "building smarter, faster ways to trade" },
                      { icon: TrendingUp, title: "Empowerment", desc: "giving traders clarity and control" },
                      { icon: Target, title: "Precision", desc: "ensuring accuracy in every feature" },
                      { icon: Brain, title: "Simplicity", desc: "easy to use without sacrificing depth" }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-all duration-300">
                        <div className="p-2 bg-accent/20 rounded-lg">
                          <value.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                          <p className="text-xs text-muted-foreground">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>

              {/* Story Card */}
              <Card className="bg-gradient-to-br from-success/20 via-success/10 to-transparent border-success/30 card-hover group relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-success/30 to-transparent rounded-full transform translate-x-18 translate-y-18" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-success/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-success">Our Story</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Our story began with a frustration every trader knows: strategies that work on paper often fail in practice. After years of trading and research, we realised the missing link was a platform that combined live analysis, and AI-driven insights all in one place. That vision became tracr, a platform built by traders, for traders, to help you see behind the trade.
                  </p>
                  <div className="h-1 bg-gradient-to-r from-success to-success/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section with Market Theme */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background animate-pulse" style={{ animationDuration: '4s' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-accent/30 mb-8">
                <Brain className="h-4 w-4 text-accent mr-2" />
                <span className="text-sm text-accent font-semibold">Expert Trading Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-gradient">Trading Experts</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate professionals revolutionizing the future of AI-powered trading
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-card via-card/80 to-card/60 border-border/50 card-hover group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Trading Indicator */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                    
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto relative">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <TrendingUp className="h-3 w-3 text-primary-foreground" />
                        </div>
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
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
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