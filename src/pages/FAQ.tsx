import React from 'react';
import FAQComponent from '../components/FAQ';

export default function FAQ() {
  return (
    <div className="pt-24 bg-brand-light">
      {/* Hero Image for FAQ */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden mb-12 relative">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" 
          alt="Outdoor lounge support" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-brand-charcoal/40 flex flex-col items-center justify-center text-center px-4">
           <h1 className="text-white text-4xl md:text-6xl font-serif mb-4 drop-shadow-md">Help & <span className="text-brand-blue">Support</span></h1>
           <p className="text-white/90 text-lg max-w-2xl drop-shadow-md">
             Everything you need to know about our bespoke tension systems and <span className="text-brand-green">architectural shading products</span>.
           </p>
        </div>
      </div>

      <FAQComponent hideTitle />

      {/* Footer Image */}
      <div className="w-full h-[40vh] overflow-hidden mt-12 relative">
        <img 
          src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80" 
          alt="Customer service" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-brand-charcoal/70 flex flex-col items-center justify-center text-center px-4">
           <h3 className="text-white text-2xl md:text-4xl font-serif mb-6">Still have questions?</h3>
           <a href="/contact" className="bg-brand-blue text-white px-8 py-3 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-blue/90 transition-colors">Reach Out To Us</a>
        </div>
      </div>
    </div>
  );
}
