import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, User, Bot } from 'lucide-react';
import aiCandleInsightsImage from '@/assets/ai-candle-insights.jpg';
import aiChatbotImage from '@/assets/ai-chatbot.jpg';
import userProfileImage from '@/assets/user-profile.jpg';

const Solutions = () => {
  const [chatMessages, setChatMessages] = useState<Array<{id: number, sender: 'user' | 'AI', message: string, visible: boolean}>>([]);

  const chatConversation = [
    { id: 1, sender: 'user' as const, message: "What is a Doji candle?" },
    { id: 2, sender: 'AI' as const, message: "A Doji candlestick is a common pattern in technical analysis that signals indecision in the market." },
    { id: 3, sender: 'user' as const, message: "Where did this happen on the chart?" },
    { id: 4, sender: 'AI' as const, message: "A Doji candle appeared on 24th August 2025." }
  ];

  useEffect(() => {
    const startChatAnimation = () => {
      setChatMessages([]);
      
      chatConversation.forEach((msg, index) => {
        setTimeout(() => {
          setChatMessages(prev => [...prev, { ...msg, visible: true }]);
        }, index * 2500);
      });
    };

    // Start initial animation
    setTimeout(() => {
      startChatAnimation();
    }, 0);

    // Reset and restart animation every 15 seconds
    const resetInterval = setInterval(() => {
      startChatAnimation();
    }, 15000);

    return () => clearInterval(resetInterval);
  }, []);

  return (
    <section id="solutions" className="relative py-24 px-8 sm:px-12 lg:px-16">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mx-auto whitespace-nowrap text-center">
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
          <Card className="bg-white/5 backdrop-blur-md border-white/20 hover:border-pantone-298/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group h-full rounded-3xl overflow-hidden">
            <CardContent className="p-10 h-full flex flex-col">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-pantone-298/20 to-pantone-715/10 rounded-2xl mr-6">
                  <Brain className="h-10 w-10 text-pantone-298" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white">AI Candle Insights</h3>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                    tracr AI doesn't just show you charts, it decodes them. With AI Candle Insights, every price movement comes with instant, plain-English explanations so you know exactly why the market is shifting.
                  </p>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light mb-6">
                No more guessing. No more staring at charts in confusion. Just clear, AI-powered breakdowns that help you trade, invest, and learn faster than ever.
              </p>

              {/* Interactive Chart Animation */}
              <div className="relative mb-8 rounded-2xl overflow-hidden animate-fade-in cursor-pointer bg-slate-900/80 backdrop-blur-sm h-80 border border-white/20">
                {/* Animated Candlestick Chart Background */}
                <div className="absolute inset-0 p-6">
                  {/* Chart Grid */}
                  <div className="w-full h-full relative">
                    {/* Subtle Grid Lines */}
                    <div className="absolute inset-0 z-0">
                      {/* Horizontal lines */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={`h-${i}`} 
                          className="absolute w-full border-t border-white/5" 
                          style={{ top: `${(i + 1) * 20}%` }}
                        />
                      ))}
                      {/* Vertical lines */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={`v-${i}`} 
                          className="absolute h-full border-l border-white/5" 
                          style={{ left: `${(i + 1) * 11.11}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Price Labels */}
                    <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-white/60 py-4 z-10">
                      <span>1.2600</span>
                      <span>1.2550</span>
                      <span>1.2500</span>
                      <span>1.2450</span>
                      <span>1.2400</span>
                    </div>
                    
                    {/* Interactive Enhanced Candlesticks */}
                    <div className="absolute bottom-16 left-12 right-8 flex items-end justify-between h-40 z-20">
                      {Array.from({ length: 12 }).map((_, i) => {
                        const heights = [60, 80, 45, 90, 70, 85, 55, 95, 75, 65, 88, 92];
                        const isGreen = i % 3 === 0 || i === 8 || i === 10 || i === 11;
                        const isDoji = i === 7;
                        const colors = isDoji ? 'bg-pantone-298 shadow-lg shadow-pantone-298/20' : 
                                      isGreen ? 'bg-green-500 shadow-md shadow-green-500/20' : 
                                      'bg-red-500 shadow-md shadow-red-500/20';
                        
                        const candleData = [
                          { open: 1.2340, high: 1.2390, low: 1.2320, close: 1.2375, volume: 2450, trend: 'Bullish', signal: 'Buy Signal', insight: 'Strong buying pressure detected at support level' },
                          { open: 1.2375, high: 1.2420, low: 1.2360, close: 1.2415, volume: 3200, trend: 'Strong Bull', signal: 'Strong Buy', insight: 'Volume surge confirms bullish momentum' },
                          { open: 1.2415, high: 1.2430, low: 1.2380, close: 1.2395, volume: 1800, trend: 'Neutral', signal: 'Hold', insight: 'Consolidation phase - awaiting direction' },
                          { open: 1.2395, high: 1.2450, low: 1.2390, close: 1.2445, volume: 4100, trend: 'Bullish', signal: 'Buy Signal', insight: 'Breakout above resistance confirmed' },
                          { open: 1.2445, high: 1.2470, low: 1.2420, close: 1.2460, volume: 2800, trend: 'Bullish', signal: 'Buy Signal', insight: 'Sustained upward momentum with good volume' },
                          { open: 1.2460, high: 1.2490, low: 1.2450, close: 1.2485, volume: 3600, trend: 'Strong Bull', signal: 'Strong Buy', insight: 'Higher highs pattern establishing new trend' },
                          { open: 1.2485, high: 1.2500, low: 1.2465, close: 1.2475, volume: 2200, trend: 'Neutral', signal: 'Hold', insight: 'Minor pullback - healthy retracement' },
                          { open: 1.2475, high: 1.2520, low: 1.2470, close: 1.2515, volume: 5200, trend: 'Breakout', signal: 'AI DOJI ALERT', insight: 'Doji formation signals market indecision - potential reversal point' },
                          { open: 1.2515, high: 1.2540, low: 1.2500, close: 1.2535, volume: 3800, trend: 'Strong Bull', signal: 'Strong Buy', insight: 'Post-doji bullish continuation confirmed' },
                          { open: 1.2535, high: 1.2550, low: 1.2520, close: 1.2545, volume: 2900, trend: 'Bullish', signal: 'Buy Signal', insight: 'Steady climb with institutional support' },
                          { open: 1.2545, high: 1.2580, low: 1.2540, close: 1.2575, volume: 4500, trend: 'Strong Bull', signal: 'Strong Buy', insight: 'Acceleration phase - momentum building' },
                          { open: 1.2575, high: 1.2595, low: 1.2565, close: 1.2590, volume: 3300, trend: 'Strong Bull', signal: 'Strong Buy', insight: 'New highs reached - trend continuation likely' }
                        ];
                        
                        return (
                          <div key={i} className="relative group/candle">
                            {/* Hover Area - Invisible expanded area for better hover detection */}
                            <div className="absolute inset-0 -inset-x-2 -inset-y-4 z-10" />
                            
                            {/* Candlestick Body */}
                            <div
                              className={`relative w-4 ${colors} opacity-90 transition-all duration-300 ease-in-out group-hover/candle:opacity-100 group-hover/candle:scale-x-125 cursor-pointer rounded-sm z-20`}
                              style={{ 
                                height: `${heights[i]}%`,
                                animationDelay: `${i * 150}ms`,
                                animation: `fade-in 0.8s ease-out ${i * 0.15}s forwards`
                              }}
                            >
                              {/* Wick lines */}
                              <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${isDoji ? 'bg-pantone-298' : isGreen ? 'bg-green-400' : 'bg-red-400'} opacity-60`}
                                   style={{ 
                                     height: '120%', 
                                     top: '-10%' 
                                   }}
                              />
                              
                              {/* AI Indicator for special candles */}
                              {isDoji && (
                                <div className="absolute -top-2 -right-1 w-2 h-2 bg-pantone-298 rounded-full animate-pulse"></div>
                              )}
                            </div>

                            {/* Enhanced Hover Tooltip with AI Insights */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover/candle:opacity-100 transition-all duration-300 pointer-events-none z-[100] scale-95 group-hover/candle:scale-100">
                              <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl p-4 border border-pantone-298/50 shadow-2xl min-w-64 max-w-80">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                                  <span className="text-sm font-semibold text-pantone-298">Candle #{i + 1}</span>
                                  <span className={`text-xs px-2 py-1 rounded-full ${isDoji ? 'bg-pantone-298/20 text-pantone-298' : isGreen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {isDoji ? 'DOJI' : isGreen ? 'BULL' : 'BEAR'}
                                  </span>
                                </div>
                                
                                {/* OHLC Data */}
                                <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Open:</span>
                                    <span className="text-foreground font-medium">{candleData[i].open}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">High:</span>
                                    <span className="text-green-400 font-medium">{candleData[i].high}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Low:</span>
                                    <span className="text-red-400 font-medium">{candleData[i].low}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Close:</span>
                                    <span className="text-foreground font-medium">{candleData[i].close}</span>
                                  </div>
                                </div>
                                
                                {/* AI Insight */}
                                <div className="bg-pantone-298/10 rounded-lg p-3 mb-3">
                                  <div className="flex items-start space-x-2">
                                    <Brain className="h-4 w-4 text-pantone-298 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="text-xs font-medium text-pantone-298 mb-1">AI Insight</p>
                                      <p className="text-xs text-foreground/90 leading-relaxed">{candleData[i].insight}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Trading Signal */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs text-muted-foreground">Volume:</span>
                                    <span className="text-xs text-pantone-298 font-medium">{candleData[i].volume}</span>
                                  </div>
                                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDoji ? 'bg-pantone-298/20 text-pantone-298' : candleData[i].signal.includes('Strong') ? 'bg-green-500/20 text-green-400' : candleData[i].signal.includes('Buy') ? 'bg-green-400/20 text-green-300' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                    {candleData[i].signal}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Enhanced Tooltip Arrow */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-background/98"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Time Labels */}
                    <div className="absolute bottom-2 left-12 right-8 flex justify-between text-xs text-white/40">
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="bg-white/5 backdrop-blur-md border-white/20 hover:border-pantone-715/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group h-full rounded-3xl overflow-hidden">
            <CardContent className="p-10 h-full flex flex-col">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-pantone-715/20 to-pantone-298/10 rounded-2xl mr-6">
                  <MessageSquare className="h-10 w-10 text-pantone-715" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white">AI Chatbot</h3>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                    Your personal market guide — anytime, anywhere. Ask questions, explore insights, and get instant explanations of what's happening in the markets. Whether you're a trader, investor, or simply learning how markets work, our AI Chatbot gives you clear, personalized answers to help you understand and make smarter decisions.
                  </p>
                </div>
              </div>

              {/* Animated Chat Interface */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 h-80 overflow-y-auto mb-6">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div 
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                      style={{ animationDelay: `${index * 2.5}s` }}
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 space-y-4">
                <div className="space-y-3">
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light">
                    <span className="text-pantone-715 font-semibold">Ask anything:</span> From candlestick patterns to economic news.
                  </p>
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light">
                    <span className="text-pantone-715 font-semibold">Get context:</span> Understand the "why" behind price movements.
                  </p>
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light">
                    <span className="text-pantone-715 font-semibold">Learn faster:</span> Turn every question into a lesson.
                  </p>
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