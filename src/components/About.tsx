// src/components/About.tsx
import { MapPin, Train, Landmark, TrendingUp, Building2, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    "Strategic Delhi–Panipat RRTS Corridor location.",
    "High-yield potential in NCR's newest growth zone.",
    "Fully planned layout with premium amenities.",
    "100% Transparent documentation by T and T Realty."
  ];

  const investmentUSPs = [
    {
      title: "Connectivity Catalyst",
      icon: Train,
      focus: "RRTS / Namo Bharat",
      description: "Reach Delhi in under 60 mins. High-speed rail always increases land value exponentially.",
      color: "bg-blue-50 border-blue-100 text-blue-700"
    },
    {
      title: "Land vs Apartments",
      icon: TrendingUp,
      focus: "Maximum ROI",
      description: "Land appreciates faster. No depreciation. Full control over your independent villa construction.",
      color: "bg-orange-50 border-orange-100 text-orange-700"
    },
    {
      title: "Future Growth Hub",
      icon: Building2,
      focus: "Next Gurgaon/Sonipat",
      description: "Early-stage entry ensures you capture the price gap before the RRTS becomes operational.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section id="about" className="relative pt-24 pb-20 bg-[#f8fafc] overflow-hidden">
      
      {/* Subtle Background Patterns to remove "emptiness" */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-yellow-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-yellow-600 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">New Launch Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
            Ralith <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500 font-black">Panipat Plots</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Premium Residential Plots in Panipat’s Emerging NCR Growth Corridor. Strategically located for <span className="text-slate-900 underline decoration-yellow-500 decoration-2">Modern Living & High ROI.</span>
          </p>
        </motion.div>

        {/* 2. Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-slate-900 leading-snug">The Golden Opportunity in <br/>Delhi NCR's Extension</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              As Delhi expands northward, cities with strong transport infrastructure like Panipat are witnessing massive real estate appreciation. Ralith Panipat puts you right in the center of this growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all flex items-center gap-2">
                    Book Site Visit <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl">
                    <div className="text-2xl font-black text-yellow-600">NH-44</div>
                    <div className="text-[10px] uppercase text-slate-400 leading-tight font-bold">Direct<br/>Connectivity</div>
                </div>
            </div>
          </motion.div>

          {/* 3. Image Section - Using a High-Quality Plot Link */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 p-3 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
                <img 
                  src="https://imagecdn.99acres.com/media1/25147/5/502945573M-1755647120469.jpg" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Premium Land Plots in Panipat" 
                />
              </div>
            </div>
            {/* Decorative Background for Image */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-yellow-100 rounded-[2.5rem] -z-0"></div>
            
            <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Starting Early Phase</p>
                <p className="text-xl font-black text-slate-900">Limited Plots</p>
            </div>
          </motion.div>
        </div>

        {/* 4. USP Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {investmentUSPs.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${usp.color} transition-transform hover:-translate-y-2`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <usp.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">{usp.title}</h4>
              <p className="font-bold mb-4 text-xs tracking-widest uppercase opacity-80">{usp.focus}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{usp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 5. Trust Bar */}
        <div className="mt-20 py-10 border-t border-b border-slate-200 flex flex-wrap justify-around gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-slate-500"><ShieldCheck className="text-green-600" /> RERA APPROVED</div>
            <div className="flex items-center gap-2 font-bold text-slate-500"><Landmark className="text-blue-600" /> BANK LOAN AVAILABLE</div>
            <div className="flex items-center gap-2 font-bold text-slate-500"><TrendingUp className="text-orange-600" /> 100% REGISTRY</div>
        </div>

        {/* 6. Final Call to Action */}
        <motion.div 
          className="mt-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 italic">Don’t wait to buy land,<br/> buy land and wait.</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                Get the full project brochure, pricing sheet, and location map directly on your phone. 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/919873092255?text=Hi, I am interested in Ralith Panipat Plots. Please share details." 
                className="flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-900/20"
              >
                <MessageSquare className="w-6 h-6" /> Get Details on WhatsApp
              </a>
              <button className="flex items-center gap-3 px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold rounded-2xl transition-all shadow-lg shadow-yellow-900/20">
                Download Layout Plan
              </button>
            </div>
          </div>
          {/* Decorative blur circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;