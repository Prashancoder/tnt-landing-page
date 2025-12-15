import { useEffect, useState } from 'react';
import { Star, Users, Building, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/qqq.jpeg';
import heroBgMobile from '@/assets/qqq.jpeg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  // You might want to update these stats to reflect the GIC Project specifics later
  // e.g., "Acres of Land", "Units Available", etc.
  // For now, I kept the structure as is.
  const stats = [
    { id: 1, value: 2000, label: 'Happy Families', icon: <Users size={32} className="text-secondary" /> },
    { id: 2, value: 500, label: 'Properties Sold', icon: <Building size={32} className="text-secondary" /> },
    { id: 3, value: 10, label: 'Years Experience', icon: <TrendingUp size={32} className="text-secondary" /> },
    { id: 4, value: 4.9, label: 'Client Rating', icon: <Star size={32} className="text-secondary" /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {    
            newCounts[index] += Math.ceil(stat.value / 100);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

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
                A self-sustained "City With in a City" featuring residential plots, villas, and commercial zones. 
                <br className="hidden md:block" /> 
                <span className="text-lg mt-2 block">
                  Seamless connectivity to Delhi/NCR via NH-8 & Dwarka Expressway.
                </span>
              </p>

              {/* Stats (Desktop Grid / Mobile Stack) */}
              <div className="hidden md:grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.id} className="text-center">
                    <div className="flex items-center justify-center mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary-foreground">
                      {counts[index] >= stat.value ? stat.value + (stat.value > 10 ? '+' : '') : counts[index]}
                    </div>
                    <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Lead Form (desktop only) */}
            <div className="hidden md:flex justify-center md:justify-end">
              {/* Added a subtle wrapper text to encourage filling the form */}
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

      {/* Mobile Stats + Form Section */}
      <section className="block md:hidden bg-white py-10 px-4 text-center">
        {/* Mobile Form Only */}
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enquire Now</h2>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;