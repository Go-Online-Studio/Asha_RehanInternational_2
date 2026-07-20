import React from 'react';

const partners = [
  "Foster + Partners", "Zaha Hadid Architects", "Larsen & Toubro", "Taj Hotels", "Reliance Industries", "Adani Realty", "Oberoi Group", "Lodha"
];

export default function Partners() {
  return (
    <section className="py-16 bg-brand-light border-y border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-center text-brand-charcoal/50 text-sm uppercase tracking-widest font-medium">
          Trusted by Industry Leaders & Visionary Architects
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="mx-12 text-2xl md:text-3xl font-serif text-brand-charcoal/30 hover:text-brand-blue transition-colors duration-300"
            >
              {partner}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center" style={{ animationDelay: '-15s' }}>
          {/* This second block ensures a seamless loop depending on width, but the tailwind approach duplicates it enough times.
              To be safe and clean, we'll just rely on the first block with duplicated content and a single keyframe. */}
        </div>
      </div>
    </section>
  );
}
