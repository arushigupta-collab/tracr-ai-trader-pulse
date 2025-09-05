import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <p><strong>Effective Date:</strong> 09.08.2025</p>
              <p><strong>Last Updated:</strong> 09.08.2025</p>
            </div>

            <p>
              tracr.ai uses cookies to improve user experience and analyze platform performance.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Essential Cookies:</h3>
                  <p>Enable core site functionality (login, navigation).</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Analytics Cookies:</h3>
                  <p>Help us understand how the site is used (Google Analytics, etc.).</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Preference Cookies:</h3>
                  <p>Save user settings like language or dark mode.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground">Marketing Cookies:</h3>
                  <p>Track referrals, campaigns, and traffic sources.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookie Control</h2>
              <p>You can manage cookie preferences through our Cookie Settings Panel:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accept All Cookies</li>
                <li>Reject Non-Essential Cookies</li>
                <li>Customise Preferences (toggle analytics, marketing, preferences individually)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>Some cookies may be set by third parties (e.g., payment providers, analytics).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p>You can also clear or block cookies via your browser settings. Note: blocking essential cookies may limit platform functionality.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;