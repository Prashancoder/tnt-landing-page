import heroBg from '@/assets/qqq.jpeg';
import heroBgMobile from '@/assets/qqq.jpeg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-0">
        {/* Desktop Background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0 ">
          <img src={heroBgMobile} alt="Hero Mobile" className="w-full h-full object-cover" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Gurgaon International City <br/>
                <span className="text-secondary">(GIC) Manesar</span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
                A self-sustained "City Within a City" featuring residential plots, villas, and commercial zones. 
                <br className="hidden md:block" /> 
                <span className="text-lg mt-2 block">
                  Seamless connectivity to Delhi/NCR via NH-8 & Dwarka Expressway.
                </span>
              </p>
              
              {/* Stats block removed from here */}
            </div>

            {/* Right side - Lead Form (desktop only) */}
            <div className="hidden md:flex justify-center md:justify-end">
              <div className='w-full max-w-md'>
                <p className="text-white text-center mb-4 font-semibold text-lg drop-shadow-md">
                   Invest in the Future of Manesar
                </p>
                <LeadForm variant="compact" transparent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="block md:hidden bg-white py-10 px-4 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enquire Now</h2>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;