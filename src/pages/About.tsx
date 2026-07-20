import React from 'react';
import AboutSection from '../components/AboutSection';
import Partners from '../components/Partners';

export default function About() {
  return (
    <div className="pt-24 bg-brand-light">
      <div className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6">Our <span className="text-brand-blue">Heritage</span></h1>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Decades of <span className="text-brand-green">engineering excellence</span> in architectural shading systems, serving visionary architects and luxury homeowners across India.
          </p>
        </div>
      </div>
      
      {/* Big Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative">
        <img 
          src="/images/Banner4.avif" 
          alt="Architectural Shading" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 md:p-16">
          <span className="text-white text-lg tracking-widest uppercase font-medium drop-shadow-md">Since 1998</span>
        </div>
      </div>

      <AboutSection />
      
      {/* Visual Break Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
        <div className="aspect-[4/3] overflow-hidden relative group">
           <img 
              src="/images/Product3.webp" 
              alt="Engineering detail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl md:text-3xl font-serif">Precision Engineered</h3>
            </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden relative group">
           <img 
              src="/images/Product4.webp" 
              alt="Manufacturing" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-brand-charcoal/70 flex items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div>
                <h3 className="text-white text-2xl md:text-3xl font-serif mb-4">Let's Discuss Your Vision</h3>
                <a href="/contact" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-medium hover:bg-brand-blue/90 transition-colors">Contact Us</a>
             </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-8">Crafting the Outdoors</h2>
        <p className="text-brand-charcoal/70 text-lg leading-relaxed">
          At Asha Smart Shades, we believe that outdoor spaces hold the potential to become the most cherished parts of any property. From initial CAD estimates in our Makarpura workshop to final installations, our approach marries architectural elegance with robust Indian engineering. We use state-of-the-art tensile fabrics, precision-cut aluminum, and motorized systems to ensure every structure is not just beautiful, but built to withstand the elements.
        </p>
      </div>

      {/* Another big image */}
      <div className="w-full h-[50vh] overflow-hidden mb-16 relative">
        <img 
          src="/images/homeProductDesc4.avif" 
          alt="Outdoor lifestyle" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-brand-charcoal/40 flex flex-col items-center justify-center text-center px-4">
           <h2 className="text-white text-3xl md:text-5xl font-serif mb-6">Experience Open Air Luxury</h2>
           <a href="/products/retractable-awnings" className="bg-brand-blue text-white px-8 py-3 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-blue/90 transition-colors">Explore Our Products</a>
        </div>
      </div>

      <Partners />
    </div>
  );
}
