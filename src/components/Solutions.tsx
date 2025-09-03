import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare } from 'lucide-react';
import aiCandlesImage from '@/assets/ai-candles.jpg';
import aiChatbotImage from '@/assets/ai-chatbot.jpg';

const Solutions = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [activeQA, setActiveQA] = useState(0);

  const insights = [
    "JPY Bullish: BOJ's Kimino comments 'Appropriate to raise rates'",
    "USD Strength: Fed signals hawkish stance on inflation",
    "EUR Weakness: ECB maintains dovish policy outlook"
  ];

  const qaData = [
    {
      question: "What is a Doji candle?",
      answer: "A Doji candlestick is a common pattern in technical analysis that signals indecision in the market."
    },
    {
      question: "Where did this happen on the chart?",
      answer: "A Doji candle appeared on 24th August 2025."
    },
    {
      question: "What does this pattern indicate?",
      answer: "This pattern suggests potential trend reversal or continuation depending on context."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length);
      setActiveQA((prev) => (prev + 1) % qaData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Future of Trading with{' '}
            <span className="text-gradient">tracr</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Candle Insights */}
          <Card className="bg-card-gradient border-border card-hover group">
            <CardContent className="p-8">
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

              {/* Chart Preview */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={aiCandlesImage} 
                  alt="AI Candle Analysis"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Animated Insight */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                <div className="text-sm text-primary font-semibold mb-1">Market Insight</div>
                <div className="text-foreground transition-opacity duration-500">
                  {insights[activeInsight]}
                </div>
              </div>

              {/* Q&A Animation */}
              <div className="space-y-3">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm font-semibold text-accent mb-2">Q:</div>
                  <div className="text-foreground">{qaData[activeQA].question}</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-sm font-semibold text-primary mb-2">A:</div>
                  <div className="text-foreground">{qaData[activeQA].answer}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="bg-card-gradient border-border card-hover group">
            <CardContent className="p-8">
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

              {/* Chatbot Preview */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={aiChatbotImage} 
                  alt="AI Chatbot Interface"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Chat Preview */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-xs">
                    How should I analyze this market movement?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 max-w-xs">
                    Based on the current RSI and volume indicators, this movement shows strong momentum. Consider looking at the 4H timeframe for better entry points.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-xs">
                    What's the risk-reward ratio?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 max-w-xs">
                    Current setup offers a 1:3 risk-reward ratio with strong support at the 50 EMA.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;