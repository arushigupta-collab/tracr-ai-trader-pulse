import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aiCandlesImg from '@/assets/ai-candles.jpg';
import aiChatbotImg from '@/assets/ai-chatbot.jpg';
import ourMissionImg from '@/assets/our-mission.jpg';
import userProfileImg from '@/assets/user-profile.jpg';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const blogPosts = [
    {
      id: 1,
      title: "Why Most Traders Lose — and How AI Can Help You Win",
      description: "It's no secret that most retail traders lose money. The reasons vary — from emotional decisions to overcomplicating strategies — but the result is the same: frustration. At tracr ai, we believe AI can change that.",
      image: aiCandlesImg,
      author: {
        name: "tracr ai Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-15",
      readTime: "6 min read",
      fullContent: {
        intro: "It's no secret that most retail traders lose money. The reasons vary — from emotional decisions to overcomplicating strategies — but the result is the same: frustration. At tracr ai, we believe AI can change that.",
        sections: [
          {
            title: "The Emotional Trap",
            content: "Fear and greed cause traders to abandon plans and chase trades."
          },
          {
            title: "Information Overload",
            content: "Too many indicators, conflicting opinions, and noisy news feeds make it hard to focus."
          },
          {
            title: "How AI Levels the Field",
            content: "tracr ai's AI Candle Insights cut through the noise, explaining why price moved in plain language, helping traders learn faster and avoid impulsive mistakes."
          }
        ],
        conclusion: "Trading doesn't need to feel like guesswork. With AI insights, every candle tells a story you can understand.",
        cta: "Join tracr ai's waitlist today and start seeing behind the trade."
      }
    },
    {
      id: 2,
      title: "The Power of Clarity in Trading",
      description: "Every trader knows the feeling: staring at charts for hours, drawing lines, juggling indicators — yet still second-guessing every move. The truth is, complexity isn't what makes you profitable. Clarity does.",
      image: aiChatbotImg,
      author: {
        name: "tracr ai Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-10",
      readTime: "5 min read",
      fullContent: {
        intro: "Every trader knows the feeling: staring at charts for hours, drawing lines, juggling indicators — yet still second-guessing every move. The truth is, complexity isn't what makes you profitable. Clarity does.",
        sections: [
          {
            title: "Why Traders Struggle",
            content: "Most platforms throw data at you, but not context. Without context, it's easy to misinterpret signals."
          },
          {
            title: "Insights that Explain, Not Confuse",
            content: "tracr ai's AI Candle Insights tell you what happened in the market and why, in simple terms. That clarity makes it easier to build confidence in your decisions."
          },
          {
            title: "Learn While You Trade",
            content: "Instead of guessing, traders can connect the dots between fundamentals, sentiment, and technicals — all explained by AI as the market moves."
          }
        ],
        conclusion: "Clarity is the trader's true edge. With tracr ai, you don't just see the chart — you understand it.",
        cta: "Be the first to experience AI Candle Insights. Join the waitlist now."
      }
    },
    {
      id: 3,
      title: "The Future of Trading is AI-Powered",
      description: "For years, traders have relied on raw charts and lagging indicators. But markets move faster now, and traders need more than lines and numbers. The future of trading lies in AI — not to replace traders, but to make them smarter.",
      image: ourMissionImg,
      author: {
        name: "tracr ai Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-05",
      readTime: "7 min read",
      fullContent: {
        intro: "For years, traders have relied on raw charts and lagging indicators. But markets move faster now, and traders need more than lines and numbers. The future of trading lies in AI — not to replace traders, but to make them smarter.",
        sections: [
          {
            title: "The Old Way",
            content: "Guessing based on gut feel, late signals, or crowded trading forums."
          },
          {
            title: "The New Edge",
            content: "AI that translates complex data into clear, actionable insights — showing traders what really drives market moves."
          },
          {
            title: "How tracr ai Fits In",
            content: "With AI Candle Insights, live charts, and trader-focused analytics, tracr ai gives retail traders tools that once felt out of reach."
          }
        ],
        conclusion: "The future of trading is already here — and it's powered by AI. Don't get left behind.",
        cta: "Sign up today and see behind the trade with tracr ai."
      }
    }
  ];

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-hero">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Expert analysis, strategies, and insights to help you trade smarter
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, visiblePosts).map((post, index) => (
                <Card 
                  key={post.id}
                  className="bg-card-gradient border-border card-hover group cursor-pointer animate-scale-in h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {post.description}
                      </p>
                      
                      {/* Author and Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.photo}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium">{post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.publishedDate)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < blogPosts.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMorePosts}
                  variant="hero-secondary"
                  size="lg"
                  className="animate-fade-in"
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card-gradient rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Trading Insights
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest trading strategies, market analysis, and platform updates delivered to your inbox.
              </p>
              <Link to="/register">
                <Button variant="hero" size="lg">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;