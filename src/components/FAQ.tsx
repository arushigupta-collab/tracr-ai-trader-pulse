import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "How much does tracr AI cost?",
      answer: (
        <div className="space-y-4">
          <p>We offer multiple ways to access tracr AI — including a free option.</p>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Option 1 – Broker Deposit Access (Best Value)</h4>
            <p className="mb-2">Get full platform access simply by opening a trading account with our partnered broker and making a deposit — no extra payment to tracr AI.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>$500 Deposit → 1 year, Unlimited Insights</li>
              <li>$1,000 Deposit → 1 year, Unlimited Insights and new features coming soon</li>
              <li>Access remains active as long as your broker account stays funded.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Option 2 – Monthly Subscription</h4>
            <p className="mb-2">Prefer a standard subscription without linking a broker account?</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Free → 5 Credits a day</li>
              <li>$25/month → Unlimited AI Insights</li>
              <li>$49/month → Unlimited AI Insights and new features coming soon</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "Who can use tracr AI?",
      answer: "Whether you're a beginner trying to understand the markets or an experienced trader refining complex strategies, tracr AI is designed to suit all skill levels."
    },
    {
      question: "How is tracr AI different from other trading platforms?",
      answer: "Unlike traditional platforms, tracr AI doesn't just provide charts — it explains why the market moves. With AI Candle Insights, tracr AI helps traders learn, optimise, and execute with confidence."
    },
    {
      question: "What markets can I trade or test on tracr AI?",
      answer: (
        <div className="space-y-3">
          <p>Currently, tracr AI supports:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li><strong>US Stocks</strong> – full coverage of major listed companies</li>
            <li><strong>Major FX Pairs</strong> – the most liquid currency pairs in the world</li>
            <li><strong>Major Cryptocurrencies</strong> – including Bitcoin, Ethereum, and top market cap coins</li>
            <li><strong>Major US Indices</strong> – such as the S&P 500, NASDAQ, and Dow Jones</li>
          </ul>
          <p className="mt-3">We'll be expanding into additional global markets as the platform grows.</p>
        </div>
      )
    },
    {
      question: "How do I join the waitlist?",
      answer: "Simply enter your email on our website. We'll keep you updated with launch news, beta invites, and exclusive early-access opportunities."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pantone-171 via-pantone-190 to-pantone-298 bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-pantone-426/80 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about tracr AI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqData.map((item, index) => {
            const pantoneColors = ['pantone-171', 'pantone-190', 'pantone-298', 'pantone-426', 'pantone-432', 'pantone-715'];
            const colorClass = pantoneColors[index % pantoneColors.length];
            
            return (
              <Card 
                key={index}
                className={`bg-white/5 backdrop-blur-md border-white/20 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-${colorClass}/40 animate-fade-in rounded-2xl overflow-hidden ${
                  expandedItem === index ? `ring-2 ring-${colorClass}/30 shadow-2xl border-${colorClass}/50 scale-[1.02]` : 'hover:scale-[1.01]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleExpand(index)}
              >
              <CardContent className="p-8">
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-semibold text-${colorClass} pr-6 flex-1 leading-relaxed`}>
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`h-6 w-6 text-${colorClass} transition-all duration-500 flex-shrink-0 ${
                      expandedItem === index ? 'rotate-180 scale-110' : 'hover:scale-110'
                    }`}
                  />
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    expandedItem === index 
                      ? 'max-h-[600px] opacity-100 mt-6' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-white/90 leading-relaxed text-lg">
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;