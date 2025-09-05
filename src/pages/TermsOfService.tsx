import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <p><strong>Effective Date:</strong> [Insert Date]</p>
              <p><strong>Last Updated:</strong> [Insert Date]</p>
            </div>

            <p>
              These Terms of Service ("Terms") govern your use of tracr.ai ("the Platform"). By accessing or using our Services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Eligibility</h2>
              <p>You must be at least 18 years old and legally able to enter contracts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p>tracr.ai provides AI-powered insights, analytics, and tools for trading education and research. We do not provide financial advice or guarantee profits.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and update it as needed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse or abuse the Services</li>
                <li>Reverse engineer or scrape the platform</li>
                <li>Use tracr.ai to provide competing services</li>
                <li>Violate laws, regulations, or third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payments & Subscriptions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deposits with partnered brokers may unlock access, subject to broker terms.</li>
                <li>Subscription fees (if applicable) are billed in advance and non-refundable.</li>
                <li>We reserve the right to change pricing with reasonable notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimers</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">No Financial Advice:</h3>
                  <p>All insights are for educational purposes only.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">No Guarantee:</h3>
                  <p>Past performance is not indicative of future results.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Availability:</h3>
                  <p>Services may be interrupted for maintenance or updates.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, tracr.ai and its affiliates are not liable for indirect, incidental, or consequential damages, including trading losses.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p>We may suspend or terminate accounts that violate these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p>These Terms are governed by the laws of [Insert Jurisdiction, e.g., England & Wales].</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes</h2>
              <p>We may update these Terms from time to time. Continued use of Services means acceptance of updates.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;