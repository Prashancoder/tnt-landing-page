import React from 'react';
import { Button } from '@/components/ui/button';
import artwork from '../assets/artwork.jpeg';

const Projects = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="projects">
      
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Orchid IVY – Premium Independent Floor
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          3 & 4 BHK + Study | Sector 51, Gurugram
        </p>
        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-5 rounded-full"></span>
      </div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-2xl rounded-3xl overflow-hidden">

          {/* LEFT SIDE – IMAGE */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
            <img
              src={artwork}
              alt="Orchid IVY Sector 51 Gurugram"
              className="w-full h-auto object-contain max-h-[500px]"
            />

            <div className="absolute top-6 left-6 bg-white px-5 py-2 rounded-full shadow-lg text-sm font-bold text-black">
              Limited Inventory
            </div>
          </div>

          {/* RIGHT SIDE – CONTENT */}
          <div className="p-8 md:p-12">

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Experience Premium Independent Living
            </h3>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Spacious 3 & 4 BHK + Study independent floors with dedicated servant room,
              basement area and exclusive terrace space. Designed for families who prefer
              privacy, exclusivity and strong long-term appreciation in one of
              Gurugram’s most established residential sectors.
            </p>

            {/* Property Details */}
            <div className="space-y-4 mb-10">

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-700">Starting Price</span>
                <span className="font-bold text-yellow-600 text-lg">
                  ₹3.80 Cr onwards*
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-700">Location</span>
                <span className="font-medium">
                  Sector 51, Gurugram
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-700">Configuration</span>
                <span className="font-medium">
                  3 & 4 BHK + Study
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Availability</span>
                <span className="font-medium text-red-600">
                  Limited Premium Units
                </span>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white py-4 text-lg font-semibold rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                Book a Site Visit
              </Button>

              <a
                href="tel:919971809303"
                className="text-center bg-yellow-500 text-black py-4 text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300"
              >
                📞 Call Now – 9971809303
              </a>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;