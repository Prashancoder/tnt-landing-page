// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Building2, 
  CheckCircle2,
  ArrowRight,
  Trees,
  Zap,
  ShieldCheck,
  Star,
  Users2,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Properties",
      tagline: "Strategic Investments",
      description: "Data-backed commercial options from SCO plots to retail hubs in high-footfall areas.",
      features: ["SCO Plots", "Retail Shops", "Office Spaces"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Home,
      title: "Residential Properties",
      tagline: "Premium Living",
      description: "Handpicked premium homes, high-rise apartments and plots for the perfect lifestyle.",
      features: ["Luxury Plots", "Builder Floors", "Apartments"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trees,
      title: "Land & Farmhouses",
      tagline: "Future Assets",
      description: "Exclusive agricultural land and tranquil farmhouse locations for leisure and growth.",
      features: ["Farm Houses", "Agricultural Land", "Green Belts"],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const companyStats = [
    { label: "Years of Excellence", value: "11+", icon: Star },
    { label: "Happy Families", value: "1000+", icon: Users2 },
    { label: "Transparent Deals", value: "100%", icon: ShieldCheck },
  ];

  return (
    <section id="services" className="relative py-28 bg-[#fdfdfd] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-slate-50/50 -skew-y-3 origin-top-right -z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 1. Header Section with T and T Branding */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-yellow-600 font-bold tracking-widest uppercase text-xs mb-4"
            >
              <span className="w-8 h-[2px] bg-yellow-500" /> Professional Realty Services
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Expertise by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">T and T Realty</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg font-medium leading-relaxed">
              Founded on the pillars of **Trust & Transparency**, we don't just sell properties; we build long-term wealth portfolios for our clients since 2014.
            </p>
          </div>
          
          <div className="hidden lg:flex gap-12 border-l border-gray-200 pl-12">
            {companyStats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="flex items-center gap-2 text-yellow-600 mb-1">
                  <stat.icon size={18} />
                  <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                </div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 rounded-[2rem] overflow-hidden group bg-white">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardHeader className="pt-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={28} className="text-slate-800" />
                  </div>
                  <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">{service.tagline}</span>
                  <CardTitle className="text-2xl font-bold text-slate-900 mt-1">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <CheckCircle2 size={16} className="text-yellow-500" /> {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3. The "T and T Advantage" Section (Company Showcase) */}
        <motion.div 
          className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 shadow-sm mb-24 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
             <Zap size={300} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">The T and T Realty Advantage</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our name stands for <strong>Trust & Transparency</strong>. We specialize in end-to-end solutions, from land acquisition to project planning for B2B clients, and portfolio management for individual investors.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {["In-depth Market Research", "Clear Legal Documentation", "Proven Track Record", "Bespoke Solutions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100">
               <div className="italic text-lg text-slate-600 mb-6">
                 "Our thrust lies in providing market insights and financing options that make ownership a seamless journey for every client."
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500" />
                  <div>
                    <div className="font-bold text-slate-900">T and T Services</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Since 2014</div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 4. CTA Section - WhatsApp Link instead of scroll */}
        <motion.div 
          className="rounded-[3rem] bg-slate-900 p-10 md:p-16 text-center relative overflow-hidden"
          whileInView={{ scale: [0.98, 1] }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Experience Transparency Today</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
              Whether it's Commercial, Residential, or Land, let Panipat's most trusted consultant guide you.
            </p>
            <a 
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in T and T Realty Services. Please contact me." 
              className="inline-flex h-16 px-12 bg-yellow-500 text-slate-900 hover:bg-white font-black text-lg rounded-2xl shadow-xl transition-all items-center gap-3 mx-auto"
            >
              <MessageSquare size={22} /> Talk to an Expert <ArrowRight size={22} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;