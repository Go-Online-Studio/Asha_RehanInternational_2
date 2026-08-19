import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section className="relative w-full flex flex-col">
      {/* Background Image Container */}
      <div className="relative w-full min-h-[70vh] flex flex-col justify-end pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: 'url("/images/ClipBack.avif")' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white w-full">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
                Advanced Tensile <br />
                Membranes & Canopies
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                <strong>Innovation, precision engineering, crafted in Vadodara</strong> and a commitment to architectural excellence are the elements that distinguish our bespoke shading systems, engineered for luxury and highly durable performance.
              </p>
            </div>
            <div className="md:mt-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
                The outdoors as a living <br />
                space
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Asha Smart Shades specializes in large-span shading solutions, tailored for commercial projects, luxury residences, and industrial estates across Gujarat and India, ensuring your outdoor spaces can be enjoyed all year round.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact / Consultation CTA Block */}
      <div className="w-full bg-black text-white py-20 px-4 md:px-16 lg:px-24 min-h-[300px] flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
          <h3 className="text-2xl md:text-4xl font-serif max-w-xl leading-tight">
            Ready to design your bespoke architectural shading system?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-brand-blue hover:bg-blue-600 transition-colors px-10 py-5 text-white text-sm font-bold tracking-widest flex items-center justify-center gap-4 uppercase rounded-sm shadow-md"
            >
              Book Consultation <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
