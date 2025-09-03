import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Trading: How Machine Learning is Revolutionizing Market Analysis",
      description: "Explore how artificial intelligence is transforming the way traders analyze markets, identify opportunities, and manage risk in today's fast-paced financial environment.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      author: {
        name: "Sarah Chen",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-15",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Understanding Market Psychology: Why Emotions Are Your Biggest Trading Enemy",
      description: "Learn how to overcome emotional decision-making in trading and develop a systematic approach to market analysis that removes bias from your investment strategy.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
      author: {
        name: "Marcus Johnson",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-12",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Risk Management Strategies Every Trader Should Master",
      description: "Discover essential risk management techniques that professional traders use to protect their capital and maximize long-term profitability in volatile markets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      author: {
        name: "Amanda Foster",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-10",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Cryptocurrency Trading: Navigating the Digital Asset Revolution",
      description: "A comprehensive guide to trading cryptocurrencies, including analysis techniques, risk factors, and strategies for both beginners and experienced traders.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      author: {
        name: "David Kim",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-08",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Technical Analysis Fundamentals: Reading Charts Like a Pro",
      description: "Master the basics of technical analysis with our comprehensive guide to chart patterns, indicators, and trend analysis techniques used by professional traders.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      author: {
        name: "Elena Rodriguez",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-05",
      readTime: "15 min read"
    },
    {
      id: 6,
      title: "Building Your First Trading Strategy: A Step-by-Step Guide",
      description: "Learn how to develop, test, and implement your own trading strategy with our detailed walkthrough of the strategy development process.",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=600&h=400&fit=crop",
      author: {
        name: "James Wilson",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-03",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "The Psychology of Successful Traders: Mindset and Discipline",
      description: "Explore the mental frameworks and psychological principles that separate successful traders from the rest, including discipline, patience, and emotional control.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      author: {
        name: "Sarah Chen",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-03-01",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "Market Volatility: How to Profit from Uncertain Times",
      description: "Learn strategies for trading in volatile markets, including how to identify opportunities during market uncertainty and protect your portfolio.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      author: {
        name: "Marcus Johnson",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      publishedDate: "2025-02-28",
      readTime: "11 min read"
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
                  className="bg-card-gradient border-border card-hover group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    {/* Author and Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
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