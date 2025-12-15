// src/components/WhyChoose.tsx
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Briefcase, 
  Compass 
} from 'lucide-react';
import { motion } from "framer-motion";

const whyChoose = [
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Navigate the complex real estate market with confidence using our data-driven insights and personalized professional advice."
  },
  {
    icon: Briefcase,
    title: "Exclusive Portfolio Management",
    description: "End-to-end management of your real estate assets, ensuring premium maintenance and optimized rental yields."
  },
  {
    icon: TrendingUp,
    title: "Short & Long Term Wealth Creation",
    description: "Strategic investment planning designed to capture immediate market opportunities while securing sustainable long-term growth."
  }
];

const WhyChoose = () => {
  return (
    <motion.section 
      id="why-choose"
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">T&T Realty?</span>
      </h3>
      
      {/* Updated Grid: md:grid-cols-3 to center the 3 items perfectly */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {whyChoose.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-xl bg-white/90 backdrop-blur border-none ring-1 ring-gray-100">
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-secondary rounded-full text-white shadow-lg transform transition-transform group-hover:scale-110">
                    <item.icon size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChoose;