import heroBg from '@/assets/qqq.jpeg';
import heroBgMobile from '@/assets/qqq.jpeg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-0">

        {/* Background Images */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="block md:hidden absolute inset-0">
          <img
            src={heroBgMobile}
            alt="Orchid IVY Sector 51 Gurugram"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side Content */}
            <div>

              <div className="inline-block px-4 py-1 mb-4 bg-orange-500 text-white text-sm font-bold rounded-full uppercase tracking-widest">
                Premium Independent Floors
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Orchid IVY <br />
                <span className="text-orange-400">
                  Sector 51, Gurugram
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-xl">
                3 & 4 BHK + Study Independent Floors  
                with Servant Room, Basement & Private Terrace.
              </p>

              <div className="space-y-2 text-gray-200 text-sm md:text-base mb-6">
                <p>✓ Fully Developed Location</p>
                <p>✓ Excellent Rental & Appreciation Potential</p>
                <p>✓ Limited Premium Inventory</p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:919971809303"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all"
                >
                  📞 Call Now –9971809303
                </a>

                <button
                  onClick={() => {
                    const section = document.getElementById('contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/40 backdrop-blur transition-all"
                >
                  Book Site Visit
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-200">
                Starting at <span className="font-semibold">₹3.80 Cr onwards*</span>
              </p>

              <p className="mt-2 text-xs text-gray-400">
                Curated by Lavneet Dabas
              </p>

            </div>

            {/* Right Side – Lead Form */}
            <div className="hidden md:flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-white text-center mb-4 font-semibold text-lg">
                  Download Brochure & Price List
                </p>
                <LeadForm variant="compact" transparent />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="block md:hidden bg-slate-50 py-10 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Book Your Site Visit
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Share your details to receive floor plans, pricing & availability updates.
          </p>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;