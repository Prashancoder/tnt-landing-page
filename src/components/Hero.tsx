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
        <div className="block md:hidden absolute inset-0 ">
          <img src={heroBgMobile} alt="Ralith Panipat Plots" className="w-full h-full object-cover" />
        </div>

        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-slate-900/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div>
              <div className="inline-block px-4 py-1 mb-4 bg-orange-500 text-white text-sm font-bold rounded-full uppercase tracking-widest">
                New Launch near Delhi NCR
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ralith Panipat <br/>
                <span className="text-orange-400 text-3xl md:text-5xl">Premium Residential Plots</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
                Invest in Panipat’s emerging growth corridor along the <strong>Delhi–Panipat RRTS</strong> and NH-44. 
                <span className="block mt-4 text-lg border-l-4 border-orange-500 pl-4 bg-black/20 py-2">
                  Own land in the next northward extension of Delhi NCR.
                </span>
              </p>
              
              <div className="flex flex-wrap gap-4">
  <a
    href="https://wa.me/919873092255"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold flex items-center transition-all"
  >
    Get Details on WhatsApp
  </a>
</div>


            </div>

            {/* Right side - Lead Form */}
            <div className="hidden md:flex justify-center md:justify-end">
              <div className='w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20'>
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
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Enquire Now</h2>
          <p className="text-slate-600 mb-6 text-sm">Get exclusive early-bird pricing for Ralith Panipat</p>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;