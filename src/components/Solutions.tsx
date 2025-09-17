import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, User, Bot } from 'lucide-react';
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

              {/* Enhanced Realistic Candlestick Chart Animation */}
              <div className="relative mb-8 rounded-2xl overflow-hidden animate-fade-in cursor-pointer bg-slate-950 backdrop-blur-sm h-80 border border-cyan-500/20">
                {/* Professional Trading Chart */}
                <div className="absolute inset-0 p-6">
                  <div className="w-full h-full relative">
                    {/* Enhanced Grid Lines - Similar to Trading Platforms */}
                    <div className="absolute inset-0 z-0">
                      {/* Horizontal grid lines */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={`h-${i}`} 
                          className="absolute w-full border-t border-cyan-500/10" 
                          style={{ 
                            top: `${i * 16.67}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                      {/* Vertical grid lines */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={`v-${i}`} 
                          className="absolute h-full border-l border-cyan-500/10" 
                          style={{ 
                            left: `${(i + 1) * 7.69}%`,
                            animationDelay: `${i * 0.05}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Professional Price Scale */}
                    <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-cyan-400/70 py-4 z-10 font-mono">
                      {['1.2650', '1.2600', '1.2550', '1.2500', '1.2450', '1.2400'].map((price, i) => (
                        <span 
                          key={price}
                          className="animate-fade-in bg-slate-950/80 px-1 rounded"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {price}
                        </span>
                      ))}
                    </div>
                    
                    {/* Professional Candlestick Chart with Enhanced Realism */}
                    <div className="absolute bottom-16 left-12 right-8 flex items-end justify-between h-48 z-20">
                      {Array.from({ length: 25 }).map((_, i) => {
                        // More realistic height variations
                        const heights = [45, 65, 35, 75, 55, 70, 40, 80, 60, 50, 72, 78, 52, 68, 42, 82, 62, 48, 74, 76, 58, 71, 63, 54, 69];
                        const wickHeights = [55, 75, 45, 85, 65, 80, 50, 90, 70, 60, 82, 88, 62, 78, 52, 92, 72, 58, 84, 86, 68, 81, 73, 64, 79];
                        
                        // More realistic distribution of bullish/bearish candles
                        const isGreen = [true, true, false, true, true, true, false, true, true, false, true, true, false, true, false, true, true, false, true, true, false, true, true, false, true][i];
                        const isDoji = i === 7 || i === 14 || i === 21;
                        
                        const candleColor = isDoji ? 'bg-cyan-400 shadow-lg shadow-cyan-400/40' :
                                          isGreen ? 'bg-cyan-400 shadow-md shadow-cyan-400/30' : 
                                          'bg-red-500 shadow-md shadow-red-500/30';
                        
                        const wickColor = isDoji ? 'bg-cyan-400' : isGreen ? 'bg-cyan-300' : 'bg-red-400';
                        
                        const candleData = [
                          { open: 1.2340, high: 1.2395, low: 1.2320, close: 1.2380, volume: 2450, signal: 'Buy Signal', insight: 'Strong bullish momentum building at support' },
                          { open: 1.2380, high: 1.2425, low: 1.2365, close: 1.2420, volume: 3200, signal: 'Strong Buy', insight: 'Volume surge confirms upward breakout' },
                          { open: 1.2420, high: 1.2435, low: 1.2385, close: 1.2390, volume: 1800, signal: 'Sell Signal', insight: 'Bearish rejection at resistance level' },
                          { open: 1.2390, high: 1.2455, low: 1.2385, close: 1.2450, volume: 4100, signal: 'Buy Signal', insight: 'Bulls regain control with strong close' },
                          { open: 1.2450, high: 1.2475, low: 1.2425, close: 1.2470, volume: 2800, signal: 'Buy Signal', insight: 'Consistent buying pressure continues' },
                          { open: 1.2470, high: 1.2495, low: 1.2455, close: 1.2490, volume: 3600, signal: 'Strong Buy', insight: 'New highs signal trend acceleration' },
                          { open: 1.2490, high: 1.2505, low: 1.2470, close: 1.2475, volume: 2200, signal: 'Sell Signal', insight: 'Profit-taking creates bearish candle' },
                          { open: 1.2475, high: 1.2525, low: 1.2470, close: 1.2478, volume: 5200, signal: 'DOJI ALERT', insight: 'Market indecision - critical reversal zone' },
                          { open: 1.2478, high: 1.2545, low: 1.2475, close: 1.2540, volume: 3800, signal: 'Strong Buy', insight: 'Doji resolved bullishly with volume' },
                          { open: 1.2540, high: 1.2555, low: 1.2525, close: 1.2530, volume: 2900, signal: 'Sell Signal', insight: 'Minor pullback after strong advance' },
                          { open: 1.2530, high: 1.2585, low: 1.2525, close: 1.2580, volume: 4500, signal: 'Strong Buy', insight: 'Breakout above previous resistance' },
                          { open: 1.2580, high: 1.2600, low: 1.2570, close: 1.2595, volume: 3300, signal: 'Strong Buy', insight: 'Momentum accelerating to new peaks' },
                          { open: 1.2595, high: 1.2610, low: 1.2575, close: 1.2585, volume: 2750, signal: 'Sell Signal', insight: 'Bears step in at psychological level' },
                          { open: 1.2585, high: 1.2620, low: 1.2580, close: 1.2615, volume: 4200, signal: 'Strong Buy', insight: 'Bulls overcome resistance decisively' },
                          { open: 1.2615, high: 1.2630, low: 1.2610, close: 1.2618, volume: 3100, signal: 'DOJI ALERT', insight: 'Second doji - major decision point ahead' },
                          { open: 1.2618, high: 1.2645, low: 1.2615, close: 1.2640, volume: 5800, signal: 'Strong Buy', insight: 'Institutional buying wave detected' },
                          { open: 1.2640, high: 1.2655, low: 1.2630, close: 1.2650, volume: 2400, signal: 'Strong Buy', insight: 'New session highs reached confidently' },
                          { open: 1.2650, high: 1.2665, low: 1.2635, close: 1.2645, volume: 3900, signal: 'Sell Signal', insight: 'Slight retracement from day highs' },
                          { open: 1.2645, high: 1.2675, low: 1.2640, close: 1.2670, volume: 4600, signal: 'Strong Buy', insight: 'Bulls maintain control at higher levels' },
                          { open: 1.2670, high: 1.2685, low: 1.2665, close: 1.2680, volume: 5100, signal: 'Strong Buy', insight: 'Continued strength with solid volume' },
                          { open: 1.2680, high: 1.2695, low: 1.2675, close: 1.2685, volume: 3700, signal: 'Sell Signal', insight: 'Minor consolidation at resistance' },
                          { open: 1.2685, high: 1.2705, low: 1.2680, close: 1.2688, volume: 4800, signal: 'DOJI ALERT', insight: 'Third doji - trend exhaustion signal' },
                          { open: 1.2688, high: 1.2710, low: 1.2685, close: 1.2705, volume: 6200, signal: 'Strong Buy', insight: 'Final push to session highs' },
                          { open: 1.2705, high: 1.2720, low: 1.2695, close: 1.2700, volume: 2800, signal: 'Sell Signal', insight: 'Profit-taking near resistance zone' },
                          { open: 1.2700, high: 1.2725, low: 1.2695, close: 1.2720, volume: 4100, signal: 'Strong Buy', insight: 'Final bullish surge to close session' }
                        ];
                        
                        return (
                          <div 
                            key={i} 
                            className="relative candle-item group"
                            onMouseEnter={() => {
                              document.querySelectorAll('.candle-tooltip').forEach(tooltip => {
                                tooltip.classList.add('hidden');
                              });
                              document.querySelector(`#tooltip-${i}`)?.classList.remove('hidden');
                            }}
                            onMouseLeave={() => {
                              document.querySelector(`#tooltip-${i}`)?.classList.add('hidden');
                            }}
                          >
                            {/* Realistic Candlestick Wick */}
                            <div
                              className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${wickColor} opacity-70 transition-all duration-500 group-hover:opacity-100`}
                              style={{ 
                                height: `${wickHeights[i]}%`,
                                bottom: '0%',
                                animation: `fade-in 1s ease-out ${i * 0.08}s forwards`
                              }}
                            />
                            
                            {/* Realistic Candlestick Body */}
                            <div
                              className={`relative w-3 ${candleColor} opacity-85 transition-all duration-500 ease-out hover:opacity-100 hover:scale-x-150 hover:shadow-2xl cursor-pointer rounded-sm transform-gpu group-hover:z-50 border border-white/10`}
                              style={{ 
                                height: `${heights[i]}%`,
                                animation: `fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s forwards`,
                                transformOrigin: 'bottom',
                                minHeight: '8px'
                              }}
                            >
                              {/* Enhanced AI Candle Light Indicator for Doji candles */}
                              {isDoji && (
                                <>
                                  {/* Candle Light Shape */}
                                  <div className="absolute -top-6 -right-4 flex flex-col items-center animate-pulse">
                                    {/* Flame */}
                                    <div className="relative w-3 h-4 bg-gradient-to-t from-cyan-400 via-cyan-300 to-yellow-300 rounded-full rounded-b-none shadow-lg shadow-cyan-400/60 animate-pulse">
                                      {/* Inner flame glow */}
                                      <div className="absolute inset-0.5 bg-gradient-to-t from-cyan-300 to-yellow-200 rounded-full rounded-b-none opacity-80"></div>
                                      {/* Flame flicker effect */}
                                      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-ping opacity-75"></div>
                                    </div>
                                    {/* Candle body */}
                                    <div className="w-1.5 h-3 bg-gradient-to-b from-slate-300 to-slate-400 rounded-sm shadow-sm">
                                      <div className="absolute top-0 w-full h-0.5 bg-slate-200 rounded-t-sm"></div>
                                    </div>
                                  </div>
                                  {/* Animated glow ring */}
                                  <div className="absolute -top-6 -right-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-ping opacity-60"></div>
                                </>
                              )}

                              {/* Hover glow effect */}
                              <div className={`absolute inset-0 rounded-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${isDoji ? 'bg-cyan-400' : isGreen ? 'bg-cyan-300' : 'bg-red-400'} blur-sm -z-10`}></div>
                            </div>

                            {/* Professional Trading Tooltip */}
                            <div 
                              id={`tooltip-${i}`}
                              className="candle-tooltip hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 transition-all duration-500 pointer-events-none z-[100]"
                            >
                              <div className="bg-slate-950/98 backdrop-blur-xl rounded-xl p-5 border border-cyan-500/60 shadow-2xl min-w-80 max-w-96">
                                {/* Professional Header */}
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-sm ${candleColor.replace('shadow-lg shadow-cyan-400/40', '').replace('shadow-md shadow-cyan-400/30', '').replace('shadow-md shadow-red-500/30', '')}`}></div>
                                    <span className="text-sm font-bold text-cyan-400">Candle #{i + 1}</span>
                                  </div>
                                  <span className={`text-xs px-3 py-1.5 rounded-full font-bold border ${isDoji ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/60' : isGreen ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/60' : 'bg-red-500/20 text-red-400 border-red-500/60'}`}>
                                    {isDoji ? 'DOJI' : isGreen ? 'BULLISH' : 'BEARISH'}
                                  </span>
                                </div>
                                
                                {/* OHLC Data - Professional Format */}
                                <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
                                  <div className="flex justify-between p-3 bg-slate-900/60 rounded-lg border border-cyan-500/10">
                                    <span className="text-cyan-300/60">O:</span>
                                    <span className="text-white font-bold">{candleData[i].open.toFixed(4)}</span>
                                  </div>
                                  <div className="flex justify-between p-3 bg-slate-900/60 rounded-lg border border-cyan-500/10">
                                    <span className="text-cyan-300/60">H:</span>
                                    <span className="text-cyan-400 font-bold">{candleData[i].high.toFixed(4)}</span>
                                  </div>
                                  <div className="flex justify-between p-3 bg-slate-900/60 rounded-lg border border-cyan-500/10">
                                    <span className="text-cyan-300/60">L:</span>
                                    <span className="text-red-400 font-bold">{candleData[i].low.toFixed(4)}</span>
                                  </div>
                                  <div className="flex justify-between p-3 bg-slate-900/60 rounded-lg border border-cyan-500/10">
                                    <span className="text-cyan-300/60">C:</span>
                                    <span className="text-white font-bold">{candleData[i].close.toFixed(4)}</span>
                                  </div>
                                </div>
                                
                                {/* AI Analysis */}
                                <div className="bg-gradient-to-r from-cyan-400/15 to-cyan-400/5 rounded-lg p-4 mb-4 border border-cyan-400/30">
                                  <div className="flex items-start space-x-3">
                                    <Brain className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0 animate-pulse" />
                                    <div>
                                      <p className="text-sm font-bold text-cyan-400 mb-2">AI Market Analysis</p>
                                      <p className="text-sm text-white/90 leading-relaxed">{candleData[i].insight}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Trading Signal & Volume */}
                                <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-lg border border-cyan-500/10">
                                  <div className="flex items-center space-x-3">
                                    <span className="text-xs text-cyan-300/60 font-mono">VOL:</span>
                                    <span className="text-xs text-cyan-400 font-bold">{candleData[i].volume.toLocaleString()}</span>
                                  </div>
                                  <span className={`text-xs font-bold px-4 py-2 rounded-full border ${
                                    isDoji ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/60' : 
                                    candleData[i].signal.includes('Strong') ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/60' : 
                                    candleData[i].signal.includes('Buy') ? 'bg-cyan-400/15 text-cyan-300 border-cyan-400/40' : 
                                    'bg-red-500/20 text-red-400 border-red-500/60'
                                  }`}>
                                    {candleData[i].signal}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Tooltip Arrow */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-transparent border-t-slate-950/98"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Professional Time Scale */}
                    <div className="absolute bottom-2 left-12 right-8 flex justify-between text-xs text-cyan-400/60 font-mono">
                      {['09:00', '10:30', '12:00', '13:30', '15:00', '16:30'].map((time, i) => (
                        <span 
                          key={time}
                          className="animate-fade-in bg-slate-950/80 px-1 rounded"
                          style={{ animationDelay: `${(i + 1) * 0.3}s` }}
                        >
                          {time}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced AI Processing Indicator */}
                    <div className="absolute top-4 right-4 flex items-center space-x-3 bg-cyan-400/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-cyan-400/30">
                      <Brain className="h-5 w-5 text-cyan-400 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-xs text-cyan-400 font-bold">AI Analysis</span>
                        <span className="text-xs text-cyan-300/70">Active</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 space-y-4">
                <div className="space-y-3">
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light">
                    <span className="text-pantone-298 font-semibold">AI Pattern:</span> Spot hidden formations that were not visible before.
                  </p>
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg font-light">
                    <span className="text-pantone-298 font-semibold">AI Insight:</span> Hover over any candle for real-time, context-driven analysis.
                  </p>
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