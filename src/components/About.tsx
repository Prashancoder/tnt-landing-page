// src/components/About.tsx
import { Briefcase, Users, Award, TrendingUp, Building, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from "framer-motion";

// ✅ Import your image
import gurgaoImg from '@/assets/gurgao.webp';

const About = () => {

  const highlights = [
    "Incepted in Year 2014, we bring a proven track record and deep market expertise.",
    "Specializing in a comprehensive range of services for buying, selling, and investing.",
    "Crafting bespoke solutions tailored to every client's unique requirements.",
    "T and T derives its name from 'Trust' and 'Transparency' in all transactions."
  ];

  // ✅ New Data for Service Areas
  const serviceAreas = [
    {
      title: "B2B Services",
      icon: Briefcase,
      focus: "Land Acquisition & Project Planning",
      description: "We specialize in land acquisition, project planning, and conceptualization. We facilitate the entire process from identifying suitable land to negotiating deals and securing necessary approvals.",
      footer: "Our expertise facilitates a seamless journey from opportunity to ownership."
    },
    {
      title: "B2C Services",
      icon: Users,
      focus: "End-to-End Consumer Solutions",
      description: "Our thrust lies on providing market insights, portfolio management, consumer engagement, financing options, and the sale process.",
      footer: "We provide Turnkey end-to-end solutions to our esteemed clients from initial concept to tailored marketing and sales strategies."
    }
  ];

  return (
    <section id="about" className="pt-24 pb-16 bg-background relative">
      <div className="container mx-auto px-6">

        {/* 1. Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            About <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">T and T Realty</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-light">
            Reality Of Real Estate — Driving Social and Economic Growth through <span className="font-semibold text-gray-900">REAL ESTATE</span> since 2014.
          </p>
        </motion.div>

        {/* 2. Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 tracking-wide">Who We Are</h3>
            <p className="text-gray-800 mb-6 text-lg leading-relaxed">
              T and T Realty Services Private Limited stands as a leading name in Real Estate Consulting across the Delhi NCR region, acting as your trusted partner for navigating the landscape.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-yellow-700">11+</div>
                <p className="text-sm text-gray-700 uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-yellow-700">100%</div>
                <p className="text-sm text-gray-700 uppercase tracking-wide">Transparent Deals</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src={gurgaoImg}
                alt="About T and T Realty" 
                className="w-full h-auto max-h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default About;