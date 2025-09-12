import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, User, Bot } from 'lucide-react';
import aiCandleInsightsImage from '@/assets/ai-candle-insights.jpg';
import aiChatbotImage from '@/assets/ai-chatbot.jpg';
import userProfileImage from '@/assets/user-profile.jpg';

const Solutions = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, sender: 'user' | 'AI', message: string, visible: boolean}>>([]);
  const [candleInsights, setCandleInsights] = useState<Array<{id: number, type: string, message: string, visible: boolean}>>([]);

  const insights = [
    "JPY Bullish: BOJ's Kimino comments 'Appropriate to raise rates'",
    "USD Strength: Fed signals hawkish stance on inflation",
    "EUR Weakness: ECB maintains dovish policy outlook"
  ];

  const chatConversation = [
    { id: 1, sender: 'user' as const, message: "What is a Doji candle?" },
    { id: 2, sender: 'AI' as const, message: "A Doji candlestick is a common pattern in technical analysis that signals indecision in the market." },
    { id: 3, sender: 'user' as const, message: "Where did this happen on the chart?" },
    { id: 4, sender: 'AI' as const, message: "A Doji candle appeared on 24th August 2025." }
  ];

  const candleInsightSequence = [
    { id: 1, type: 'pattern', message: "Doji pattern detected - Market indecision" },
    { id: 2, type: 'volume', message: "Volume spike confirms breakout potential" },
    { id: 3, type: 'trend', message: "Bullish momentum building - RSI oversold" },
    { id: 4, type: 'support', message: "Strong support at 1.2450 level" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startChatAnimation = () => {
      setChatMessages([]);
      
      chatConversation.forEach((msg, index) => {
        setTimeout(() => {
          setChatMessages(prev => [...prev, { ...msg, visible: true }]);
        }, index * 2000);
      });
    };

    // Start initial animation
    startChatAnimation();

    // Reset and restart animation every 12 seconds (after all messages are shown)
    const resetInterval = setInterval(() => {
      startChatAnimation();
    }, 12000);

    return () => clearInterval(resetInterval);
  }, []);

  useEffect(() => {
    const startCandleAnimation = () => {
      setCandleInsights([]);
      
      candleInsightSequence.forEach((insight, index) => {
        setTimeout(() => {
          setCandleInsights(prev => [...prev, { ...insight, visible: true }]);
        }, index * 2500);
      });
    };

    // Start initial animation
    startCandleAnimation();

    // Reset and restart animation every 15 seconds
    const resetInterval = setInterval(() => {
      startCandleAnimation();
    }, 15000);

    return () => clearInterval(resetInterval);
  }, []);

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
            Discover the Future of Trading with{' '}
            <span className="text-gradient">tracr AI</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* AI Candle Insights */}
          <Card className="bg-card-gradient border-border card-hover group h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Candle Insights</h3>
                  <p className="text-muted-foreground">
                    AI-driven explanations behind price movements for instant market shift understanding
                  </p>
                </div>
              </div>

              {/* Chart Preview with Animated Insights */}
              <div className="relative mb-6 rounded-lg overflow-hidden animate-fade-in animate-scale-in hover-scale group cursor-pointer">
                <img 
                  src={aiCandleInsightsImage} 
                  alt="AI Candle Analysis"
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated insights overlay */}
                <div className="absolute top-4 left-4 right-4 space-y-2">
                  {candleInsights.map((insight, index) => (
                    <div 
                      key={insight.id}
                      className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border animate-fade-in transform translate-x-full opacity-0"
                      style={{ 
                        animationDelay: `${index * 0.5}s`,
                        animation: `fade-in 0.5s ease-out ${index * 2.5}s forwards, slide-in-right 0.5s ease-out ${index * 2.5}s forwards`
                      }}
                    >
                      <p className="text-sm text-foreground">
                        <span className="text-primary font-medium">AI {insight.type}:</span> {insight.message}
                        <span className="animate-pulse text-accent ml-2">●</span>
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Static hover tooltip */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border animate-fade-in">
                    <p className="text-sm text-foreground">
                      <span className="text-primary font-medium">AI Insight:</span> Hover over any candle for real-time analysis
                      <span className="animate-pulse text-accent"> Live Analysis</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  Instantly understand market shifts. Hover over a candle or highlight multiple to reveal AI-driven explanations behind price movements for smarter trading decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="bg-card-gradient border-border card-hover group h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Chatbot</h3>
                  <p className="text-muted-foreground">
                    AI-powered support, insights, and personalized recommendations for improved trading decisions
                  </p>
                </div>
              </div>

              {/* Animated Chat Interface */}
              <div className="bg-muted/20 rounded-lg p-4 h-64 overflow-y-auto mb-6">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div 
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                       <div className={`flex items-start space-x-2 max-w-xs ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                         {msg.sender === 'user' ? (
                           <img 
                             src={userProfileImage} 
                             alt="User Profile"
                             className="flex-shrink-0 w-8 h-8 rounded-full object-cover"
                           />
                         ) : (
                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                             <Bot className="h-4 w-4 text-accent-foreground" />
                           </div>
                         )}
                        <div className={`rounded-lg px-3 py-2 ${
                          msg.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator when no messages or waiting for next */}
                  {chatMessages.length === 0 && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                          <Bot className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <div className="bg-secondary rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Description */}
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  Get instant, AI-powered support. Ask questions, gain insights, and receive personalized recommendations to improve your trading.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;