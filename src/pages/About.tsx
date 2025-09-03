import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';
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
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building smarter tools so every trader can see behind the trade.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-foreground leading-relaxed">
                At tracr, we believe trading should be smarter, simpler, and more accessible. Born from years of experience in the markets, our mission is to give traders the tools they need to cut through noise and trade with confidence. By combining AI-driven insights and powerful analytics, we empower traders to understand the 'why' behind every market move. Our vision is to shorten the learning curve, reduce costly mistakes, and help every trader — from beginner to advanced — to see behind the trade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Values & Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To level the playing field for retail traders by providing professional-grade tools that are intuitive, accessible, and powered by AI. We believe trading should be guided by insight, not emotion.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Core Values</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li><strong className="text-foreground">Innovation & Automation</strong> – building smarter, faster ways to trade</li>
                    <li><strong className="text-foreground">Empowerment</strong> – giving traders clarity and control</li>
                    <li><strong className="text-foreground">Precision</strong> – ensuring accuracy in every feature</li>
                    <li><strong className="text-foreground">Simplicity</strong> – easy to use without sacrificing depth</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Story */}
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our story began with a frustration every trader knows: strategies that work on paper often fail in practice. After years of trading and research, we realised the missing link was a platform that combined live analysis, and AI-driven insights all in one place. That vision became tracr, a platform built by traders, for traders, to help you see behind the trade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The passionate experts building the future of trading
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                    
                    <div className="flex justify-center space-x-2">
                      <a
                        href={member.linkedin}
                        className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
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