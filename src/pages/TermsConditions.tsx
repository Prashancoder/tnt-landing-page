import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <p>
              <strong>Effective Date:</strong> 2026
            </p>

            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using this website related to Orchid IVY, Sector 51, Gurugram,
                you agree to comply with and be bound by the following Terms and Conditions.
              </p>
            </section>

            {/* Project Information Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Project Information Disclaimer
              </h2>
              <p>
                All information provided on this website regarding Orchid IVY, Sector 51, Gurugram,
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Pricing</li>
                <li>Layouts</li>
                <li>Availability</li>
                <li>Specifications</li>
                <li>Location details</li>
              </ul>
              <p className="mt-4">
                is subject to change without prior notice and is for informational purposes only.
              </p>
            </section>

            {/* No Legal Offer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. No Legal Offer
              </h2>
              <p>
                The content on this website does not constitute a legal offer,
                contract, or guarantee of property sale. Final terms shall be governed
                by official agreements and documentation issued by the developer.
              </p>
            </section>

            {/* Pricing Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Pricing Disclaimer
              </h2>
              <p>
                Starting price ₹3.80 Cr onwards* is indicative and subject to
                availability and change at the discretion of the developer.
              </p>
            </section>

            {/* Site Visit & Booking */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Site Visit & Booking
              </h2>
              <p>
                Site visits are subject to prior appointment confirmation.
                Booking terms, payment plans, and official documentation will be shared separately.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Intellectual Property
              </h2>
              <p>
                All content including images, artwork, text, design, and branding used on this
                website is protected and may not be reproduced, copied, or distributed without permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Limitation of Liability
              </h2>
              <p>
                Lavneet Dabas shall not be liable for any direct or indirect loss arising from
                reliance on the information provided on this website.
              </p>
              <p className="mt-4">
                Buyers are advised to conduct independent due diligence before making
                any investment or purchase decisions.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with
                the laws of India. Any disputes shall be subject to the jurisdiction
                of courts in Gurugram, Haryana.
              </p>
            </section>

            {/* Independent Consultant Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Marketing Disclaimer
              </h2>
              <p>
                This website is managed by Lavneet Dabas, an independent real estate consultant,
                for marketing and informational purposes only. We are not the developer of the project.
              </p>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Contact Information
              </h2>
              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Lavneet Dabas</strong></p>
                <p>Independent Real Estate Consultant</p>
                <p>Phone: 9971809303</p>
                <p>Email: Lavneet Dabastdabbas27@gmail.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;