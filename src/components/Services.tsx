import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building2, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Trees // Added Trees icon for the Land category (ensure you import this from lucide-react)
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Properties",
      description: "Strategic commercial investments offering high returns and business growth opportunities.",
      features: ["SCO Plots", "Retail Shops", "Office Spaces", "High Street Retail"]
    },
    {
      icon: Home,
      title: "Residential Properties",
      description: "Find your dream home with our wide range of premium residential options.",
      features: ["Residential Plots", "Builder Floors", "Highrise Apartments", "Luxury Villas"]
    },
    {
      icon: Trees, // Using Trees icon for Land/Nature context (fallback to MapPin if Trees not available)
      title: "Land & Farmhouses",
      description: "Exclusive land parcels and tranquil farmhouse locations for leisure and investment.",
      features: ["Farm Houses", "Agricultural Farmland", "Holiday Homes", "Green Belts"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            T and T Realty{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your investment goals and lifestyle needs
          </p>
        </div>

        {/* Services Grid - Updated to grid-cols-3 to fit the 3 categories perfectly */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl border border-gray-100 h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-5 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-lg">
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-6 text-center">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                          <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-16 rounded-3xl text-center text-black mb-20 shadow-xl bg-[radial-gradient(circle_at_center,_#FBE03F,_#F68C1E_80%)]"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Your Future?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let our expert team guide you to the perfect property investment. 
            Get personalized recommendations based on your budget and goals.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-black text-white hover:bg-gray-800 font-semibold transition-all"
          >
            Request a Callback
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;