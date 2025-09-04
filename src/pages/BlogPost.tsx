import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aiCandlesImg from '@/assets/ai-candles.jpg';
import aiChatbotImg from '@/assets/ai-chatbot.jpg';
import ourMissionImg from '@/assets/our-mission.jpg';
import userProfileImg from '@/assets/user-profile.jpg';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Why Most Traders Lose — and How AI Can Help You Win",
      description: "It's no secret that most retail traders lose money. The reasons vary — from emotional decisions to overcomplicating strategies — but the result is the same: frustration. At tracr, we believe AI can change that.",
      image: aiCandlesImg,
      author: {
        name: "tracr Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-15",
      readTime: "6 min read",
      fullContent: {
        intro: "If you've been trading for any length of time, you've probably heard the statistic: most retail traders lose money. In fact, studies consistently show that upwards of 70% of retail traders fail to achieve consistent profitability. The reasons are numerous, but at the core lies a simple truth: human decision-making is flawed.\n\nAt tracr, we believe that with the right tools — particularly those powered by artificial intelligence — traders can shift the odds back in their favour.",
        sections: [
          {
            title: "Why Most Traders Struggle",
            content: [
              {
                subtitle: "1. Emotions Drive Decisions",
                text: "Fear of missing out (FOMO), panic when trades go against you, and greed when they go well — these emotional responses derail even the best trading plans."
              },
              {
                subtitle: "2. Information Overload",
                text: "The modern trader is bombarded with news, social media \"gurus,\" and dozens of indicators. The more inputs, the harder it becomes to make clear, confident decisions."
              },
              {
                subtitle: "3. Lack of Context",
                text: "Charts show what happened. Indicators hint at probabilities. But rarely do platforms explain why the market moved. Without context, traders end up guessing."
              }
            ]
          },
          {
            title: "How AI Changes the Game",
            content: [
              {
                text: "AI has already transformed industries from healthcare to logistics. In trading, its potential is even greater. Rather than replacing traders, AI acts as a co-pilot — helping you understand the market and make informed decisions."
              },
              {
                text: "With tracr's AI Candle Insights, every price movement is explained in plain language. Imagine looking at a candlestick chart and instantly seeing:"
              },
              {
                text: "• Which economic event or sentiment shift drove the move\n• Whether technical patterns aligned with fundamentals\n• How similar situations played out historically"
              },
              {
                text: "This kind of context eliminates guesswork and helps traders stay disciplined."
              }
            ]
          },
          {
            title: "Building Confidence, One Candle at a Time",
            content: [
              {
                text: "Trading success isn't about finding a \"holy grail\" system. It's about consistency. By combining real-time insights with clear explanations, tracr helps traders:"
              },
              {
                text: "• Learn faster by connecting cause and effect\n• Avoid impulsive trades driven by emotions\n• Build strategies based on data, not speculation"
              }
            ]
          }
        ],
        conclusion: "The statistic that most traders lose doesn't have to apply to you. With the right tools, you can trade with confidence, clarity, and consistency. AI won't replace you — but it will empower you.",
        cta: "Join the waitlist for tracr today and start seeing behind the trade."
      }
    },
    {
      id: 2,
      title: "The Power of Clarity in Trading",
      description: "Every trader knows the feeling: staring at charts for hours, drawing lines, juggling indicators — yet still second-guessing every move. The truth is, complexity isn't what makes you profitable. Clarity does.",
      image: aiChatbotImg,
      author: {
        name: "tracr Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-10",
      readTime: "5 min read",
      fullContent: {
        intro: "Trading often feels like trying to solve a puzzle with missing pieces. Charts tell part of the story, indicators add another layer, and news headlines create noise that can distract more than they help. What traders truly need isn't more tools — it's clarity.\n\nThis is the philosophy behind tracr: giving traders the context they need to understand markets without drowning in complexity.",
        sections: [
          {
            title: "Why Complexity Hurts Traders",
            content: [
              {
                subtitle: "Too Many Indicators",
                text: "Traders often believe adding more indicators means better decisions. In reality, it usually leads to conflicting signals and paralysis."
              },
              {
                subtitle: "Conflicting Opinions",
                text: "Open Twitter or YouTube and you'll find endless hot takes on where the market is going. One says \"bullish,\" another screams \"crash incoming.\" The result? Confusion and hesitation."
              },
              {
                subtitle: "Short-Term Guesswork",
                text: "Many traders focus on the next five minutes rather than the bigger picture, losing sight of trends and drivers."
              }
            ]
          },
          {
            title: "The Value of Clarity",
            content: [
              {
                text: "Clarity doesn't mean simplicity for its own sake. It means stripping away noise and focusing on what matters:"
              },
              {
                text: "• Why did the price move?\n• What factors influenced the candle?\n• How does this fit into the broader trend?"
              },
              {
                text: "With tracr's AI Candle Insights, traders can see exactly that. Instead of staring at a green or red candle and guessing, you get a clear explanation that connects technical, fundamental, and sentiment data."
              }
            ]
          },
          {
            title: "Learning While You Trade",
            content: [
              {
                text: "Perhaps the biggest advantage of clarity is education. With every explained move, traders absorb lessons faster. Over time, patterns emerge:"
              },
              {
                text: "• Which events consistently move certain markets\n• How sentiment shifts before major breakouts\n• When technical patterns align with fundamentals"
              },
              {
                text: "This learning curve is shortened dramatically when guided by AI."
              }
            ]
          },
          {
            title: "Why tracr Is Built Around Clarity",
            content: [
              {
                text: "Our vision isn't to overwhelm traders with endless features. It's to build the cleanest, most effective platform for learning and improving as you trade. By focusing on context, tracr ensures you make decisions with confidence rather than doubt."
              }
            ]
          }
        ],
        conclusion: "Complexity doesn't make you profitable — clarity does. By explaining the story behind every move, tracr gives traders the knowledge and confidence they need to succeed.",
        cta: "Join our waitlist today and experience the power of AI-driven clarity."
      }
    },
    {
      id: 3,
      title: "The Future of Trading is AI-Powered",
      description: "For years, traders have relied on raw charts and lagging indicators. But markets move faster now, and traders need more than lines and numbers. The future of trading lies in AI — not to replace traders, but to make them smarter.",
      image: ourMissionImg,
      author: {
        name: "tracr Team",
        photo: userProfileImg
      },
      publishedDate: "2025-01-05",
      readTime: "7 min read",
      fullContent: {
        intro: "For years, traders have relied on raw charts and lagging indicators. But markets move faster now, and traders need more than lines and numbers. The future of trading lies in AI — not to replace traders, but to make them smarter.",
        sections: [
          {
            title: "The Old Way",
            content: [
              {
                text: "Guessing based on gut feel, late signals, or crowded trading forums."
              }
            ]
          },
          {
            title: "The New Edge",
            content: [
              {
                text: "AI that translates complex data into clear, actionable insights — showing traders what really drives market moves."
              }
            ]
          },
          {
            title: "How tracr Fits In",
            content: [
              {
                text: "With AI Candle Insights, live charts, and trader-focused analytics, tracr gives retail traders tools that once felt out of reach."
              }
            ]
          }
        ],
        conclusion: "The future of trading is already here — and it's powered by AI. Don't get left behind.",
        cta: "Sign up today and see behind the trade with tracr."
      }
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || ''));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 p-0 h-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="mb-8">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between text-muted-foreground mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              {post.fullContent.intro && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Introduction</h2>
                  <div className="text-lg leading-relaxed whitespace-pre-line text-muted-foreground">
                    {post.fullContent.intro}
                  </div>
                </div>
              )}

              {/* Sections */}
              {post.fullContent.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6">
                      {item.subtitle && (
                        <h3 className="text-xl font-semibold mb-3">{item.subtitle}</h3>
                      )}
                      <div className="text-lg leading-relaxed whitespace-pre-line text-muted-foreground">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                <div className="text-lg leading-relaxed text-muted-foreground">
                  {post.fullContent.conclusion}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-card-gradient border border-border rounded-2xl p-8 text-center">
                <p className="text-lg mb-6 text-muted-foreground">
                  {post.fullContent.cta}
                </p>
                <Link to="/register">
                  <Button variant="hero" size="lg">
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;