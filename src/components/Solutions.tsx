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
    <section id="solutions" className="relative py-32 px-6 sm:px-8 lg:px-12">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            ENHANCE DECISION MAKING WITH{' '}
            <span className="text-pantone-298">tracr AI</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI technology that transforms how you understand and trade the markets
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Candle Insights */}
          <Card className="backdrop-blur-md border-white/20 hover:border-pantone-171/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group h-full rounded-3xl overflow-hidden">
            <CardContent className="p-10 h-full flex flex-col">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-pantone-171/20 to-pantone-171/10 rounded-2xl mr-6">
                  <Brain className="h-10 w-10 text-pantone-171" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-pantone-171">AI Candle Insights</h3>
                  <p className="text-muted-foreground/80 text-lg leading-relaxed">
                    AI-driven explanations behind price movements for instant market shift understanding
                  </p>
                </div>
              </div>

              {/* Chart Preview with Animated Insights */}
              <div className="relative mb-8 rounded-2xl overflow-hidden animate-fade-in group cursor-pointer">
                <img 
                  src={aiCandleInsightsImage} 
                  alt="AI Candle Analysis"
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent group-hover:from-background/20 transition-all duration-700" />
                <div className="absolute inset-0 bg-pantone-171/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated insights overlay */}
                <div className="absolute top-6 left-6 right-6 space-y-3">
                  {candleInsights.map((insight, index) => (
                    <div 
                      key={insight.id}
                      className="bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border/30 animate-fade-in transform translate-x-full opacity-0 shadow-lg"
                      style={{ 
                        animationDelay: `${index * 0.5}s`,
                        animation: `fade-in 0.6s ease-out ${index * 2.5}s forwards, slide-in-right 0.6s ease-out ${index * 2.5}s forwards`
                      }}
                    >
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-pantone-171 font-semibold">AI {insight.type}:</span> {insight.message}
                        <span className="animate-pulse text-pantone-298 ml-2 text-lg">●</span>
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Static hover tooltip */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-fade-in">
                    <p className="text-sm text-foreground">
                      <span className="text-pantone-171 font-medium">AI Insight:</span> Hover over any candle for real-time analysis
                      <span className="animate-pulse text-pantone-298"> Live Analysis</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 leading-relaxed text-lg">
                  Instantly understand market shifts. Hover over a candle or highlight multiple to reveal AI-driven explanations behind price movements for smarter trading decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="bg-white/5 backdrop-blur-md border-white/20 hover:border-pantone-190/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group h-full rounded-3xl overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pantone-190/20 rounded-lg mr-4">
                  <MessageSquare className="h-8 w-8 text-pantone-190" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-pantone-190">AI Chatbot</h3>
                  <p className="text-pantone-426">
                    AI-powered support, insights, and personalized recommendations for improved trading decisions
                  </p>
                </div>
              </div>

              {/* Animated Chat Interface */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 h-64 overflow-y-auto mb-6">
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
                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                             <Bot className="h-4 w-4 text-white" />
                           </div>
                         )}
                         <div className={`rounded-lg px-3 py-2 ${
                           msg.sender === 'user' 
                             ? 'bg-pantone-298 text-white' 
                             : 'bg-white/20 text-white'
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
                         <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                           <Bot className="h-4 w-4 text-white" />
                         </div>
                        <div className="bg-white/10 rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-white/90 leading-relaxed">
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