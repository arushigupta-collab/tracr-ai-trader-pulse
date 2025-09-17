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
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                About <span className="text-gradient">tracr ai</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Building smarter tools so every trader can see behind the trade.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                Revolutionizing Trading Through <span className="text-gradient">AI Intelligence</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-white/90 leading-relaxed">
                  At tracr ai, we believe trading should be smarter, simpler, and more accessible. Born from years of experience in the markets, our mission is to give traders the tools they need to cut through noise and trade with confidence. By combining AI-driven insights and powerful analytics, we empower traders to understand the 'why' behind every market move. Our vision is to shorten the learning curve, reduce costly mistakes, and help every trader — from beginner to advanced — to see behind the trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Values & Story */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Core Values Section */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white">Core Values</h3>
                    </div>
                    
                    <div className="space-y-6 flex-1 flex flex-col justify-around">
                      {[
                        { icon: Zap, title: "Innovation & Automation", desc: "building smarter, faster ways to trade" },
                        { icon: TrendingUp, title: "Empowerment", desc: "giving traders clarity and control" },
                        { icon: Target, title: "Precision", desc: "ensuring accuracy in every feature" },
                        { icon: Brain, title: "Simplicity", desc: "easy to use without sacrificing depth" }
                      ].map((value, index) => (
                        <div key={index} className="flex items-start space-x-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="p-3 bg-white/10 rounded-lg">
                            <value.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg mb-2">{value.title}</h4>
                            <p className="text-base text-white/70 leading-relaxed">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mission & Story Section */}
              <div className="space-y-8 flex flex-col h-full">
                {/* Mission Card */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in animate-scale-in flex-1" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      To level the playing field for retail traders by providing professional-grade tools that are intuitive, accessible, and powered by AI. We believe trading should be guided by insight, not emotion.
                    </p>
                  </CardContent>
                </Card>

                {/* Story Card */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in animate-scale-in flex-1" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white">Our Story</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
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
          <div className="max-w-4xl mx-auto relative z-10">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in animate-scale-in">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Trading?
                  </h3>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of traders who are already on the waitlist. Be the first to experience the future of AI-powered trading analytics.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/register"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Join Our Waitlist
                  </a>
                  <p className="text-sm text-white/70">
                    Early access • No commitment • Free to join
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The passionate professionals revolutionizing the future of AI-powered trading by empowering investors with intelligence, speed and trust. With every step, we are building a smarter, more transparent, and more accessible future for global trading
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center relative">
                    
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto relative">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white/30 hover:border-white transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-gradient transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-6">{member.role}</p>
                    
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="p-3 bg-white/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name}'s X`}
                      >
                        <X className="h-4 w-4 text-white" />
                      </a>
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          className="p-3 bg-white/10 rounded-lg hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <Instagram className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;