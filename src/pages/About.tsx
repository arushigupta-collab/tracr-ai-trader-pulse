import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Target, Heart, Lightbulb, BookOpen } from 'lucide-react';
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
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-hero">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Building smarter tools so every trader can see behind the trade.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border mb-8">
                <span className="text-sm text-primary font-semibold">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Transforming Trading Through <span className="text-gradient">Intelligence</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                At tracr, we believe trading should be smarter, simpler, and more accessible. Born from years of experience in the markets, our mission is to give traders the tools they need to cut through noise and trade with confidence. By combining AI-driven insights and powerful analytics, we empower traders to understand the 'why' behind every market move. Our vision is to shorten the learning curve, reduce costly mistakes, and help every trader — from beginner to advanced — to see behind the trade.
              </p>
            </div>

            {/* Interactive Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              {/* Mission & Story Combined */}
              <div className="space-y-8">
                {/* Mission Card */}
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      To level the playing field for retail traders by providing professional-grade tools that are intuitive, accessible, and powered by AI. We believe trading should be guided by insight, not emotion.
                    </p>
                    <div className="mt-6 h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>

                {/* Story Card */}
                <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20 card-hover group relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success/20 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-success/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-3xl font-bold text-success">Our Story</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Our story began with a frustration every trader knows: strategies that work on paper often fail in practice. After years of trading and research, we realised the missing link was a platform that combined live analysis, and AI-driven insights all in one place. That vision became tracr, a platform built by traders, for traders, to help you see behind the trade.
                    </p>
                    <div className="mt-6 h-1 bg-gradient-to-r from-success to-success/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>
              </div>

              {/* Core Values - Enhanced */}
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 card-hover group relative overflow-hidden lg:row-span-2">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full transform -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/15 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-accent/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold text-accent">Core Values</h3>
                  </div>
                  
                  <div className="space-y-6 flex-1">
                    {[
                      { 
                        icon: Lightbulb, 
                        title: "Innovation & Automation", 
                        desc: "constantly building smarter, faster ways to trade",
                        color: "text-primary"
                      },
                      { 
                        icon: Target, 
                        title: "Empowerment", 
                        desc: "giving traders clarity and control over their decisions",
                        color: "text-accent"
                      },
                      { 
                        icon: Heart, 
                        title: "Precision", 
                        desc: "ensuring accuracy and reliability in every feature",
                        color: "text-success"
                      },
                      { 
                        icon: BookOpen, 
                        title: "Simplicity", 
                        desc: "designing tools that are easy to use without sacrificing depth",
                        color: "text-primary"
                      }
                    ].map((value, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group/item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`p-2 rounded-lg bg-accent/10 group-hover/item:scale-110 transition-transform duration-300`}>
                          <value.icon className={`h-5 w-5 ${value.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The passionate experts building the future of trading
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient border-border card-hover animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="p-2 bg-secondary/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 bg-secondary/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
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