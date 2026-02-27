import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 2/27/2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Introduction
              </h2>
              <p>
                Lavneet Dabas (“we”, “our”, “us”) values your privacy and is committed 
                to protecting your personal information. This Privacy Policy explains how 
                we collect, use, and safeguard your data when you visit our website related 
                to Orchid IVY, Sector 51, Gurugram.
              </p>
              <p className="mt-4">
                This website is operated for informational and marketing purposes 
                in relation to the mentioned property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <p>When you fill out the inquiry form or contact us, we may collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Preferred Visit Date</li>
                <li>Any information you voluntarily provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Contact you regarding Orchid IVY property details</li>
                <li>Schedule site visits</li>
                <li>Share brochures, pricing and availability</li>
                <li>Provide updates about the project</li>
                <li>Improve our services</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Data Security
              </h2>
              <p>
                We implement appropriate technical and security measures to protect 
                your data from unauthorized access, misuse, alteration, or disclosure. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Third-Party Services
              </h2>
              <p>We may use third-party services such as:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>WhatsApp communication services</li>
                <li>Phone call services</li>
                <li>CRM systems for lead management</li>
                <li>Advertising platforms for marketing purposes</li>
              </ul>
              <p className="mt-4">
                These services may process your data according to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Your Consent
              </h2>
              <p>
                By submitting your information on this website, you consent to 
                the collection and use of your data as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Project Disclaimer
              </h2>
              <p>
                This website is maintained by Lavneet Dabas for marketing and 
                informational purposes only. All property details including pricing, 
                specifications, availability and offers are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Contact Information
              </h2>
              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Lavneet Dabas</strong></p>
                <p>Independent Real Estate Consultant</p>
                <p>Orchid IVY, Sector 51, Gurugram</p>
                <p>Phone: 9971809303</p>
                <p>Email: Lavneet Dabastdabbas27@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will 
                be posted on this page with an updated effective date.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;