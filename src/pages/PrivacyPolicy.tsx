import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <p><strong>Effective Date:</strong> 09.08.2025</p>
              <p><strong>Last Updated:</strong> 09.08.2025</p>
            </div>

            <p>
              tracr.ai ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, products, and services ("Services").
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Personal Information:</h3>
                  <p>Name, email address, account details, and payment information.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Trading Information:</h3>
                  <p>Broker account IDs, trading data, and performance metrics (where applicable).</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Technical Data:</h3>
                  <p>IP address, browser type, device information, and cookies.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Usage Data:</h3>
                  <p>How you interact with tracr, including insights requested, pages visited, and time spent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our Services</li>
                <li>Deliver AI insights and analytics</li>
                <li>Manage accounts, billing, and subscriptions</li>
                <li>Communicate updates, offers, and support</li>
                <li>Ensure compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Share Information</h2>
              <p>We do not sell your data. We may share limited data with:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Service Providers:</h3>
                  <p>Hosting, analytics, and payment processors under strict confidentiality agreements.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Regulatory Authorities:</h3>
                  <p>If required by law or to protect rights, safety, or compliance.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Partners:</h3>
                  <p>If you connect with a partnered broker, we may exchange account IDs to activate access.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
              <p>We keep personal data only as long as necessary for the purposes outlined, unless a longer retention is required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security</h2>
              <p>We use encryption, access controls, and monitoring to safeguard your data. No system is 100% secure, but we take all reasonable steps to protect it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data ("data portability")</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Data Transfers</h2>
              <p>Your data may be transferred outside your country of residence. Where required, we use safeguards such as EU Standard Contractual Clauses.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;