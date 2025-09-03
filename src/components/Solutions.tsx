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
              <div className="relative mb-6 rounded-lg overflow-hidden animate-fade-in hover-scale group cursor-pointer">
                <img 
                  src={aiCandlesImage} 
                  alt="AI Candle Analysis"
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;