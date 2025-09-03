import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "How much does tracr cost?",
      answer: (
        <div className="space-y-4">
          <p>We offer multiple ways to access tracr — including a free option.</p>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Option 1 – Broker Deposit Access (Best Value)</h4>
            <p className="mb-2">Get full platform access simply by opening a trading account with our partnered broker and making a deposit — no extra payment to tracr.</p>
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
      question: "Who can use tracr?",
      answer: "Whether you're a beginner trying to understand the markets or an experienced trader refining complex strategies, tracr is designed to suit all skill levels."
    },
    {
      question: "How is tracr different from other trading platforms?",
      answer: "Unlike traditional platforms, tracr doesn't just provide charts — it explains why the market moves. With AI Candle Insights, tracr helps traders learn, optimise, and execute with confidence."
    },
    {
      question: "What markets can I trade or test on tracr?",
      answer: (
        <div className="space-y-3">
          <p>Currently, tracr supports:</p>
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about tracr
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <Card 
              key={index}
              className={`bg-card-gradient border-border cursor-pointer transition-all duration-300 hover:shadow-card ${
                expandedItem === index ? 'ring-2 ring-primary/20' : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                      expandedItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedItem === index 
                      ? 'max-h-96 opacity-100 mt-4' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-muted-foreground">
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;