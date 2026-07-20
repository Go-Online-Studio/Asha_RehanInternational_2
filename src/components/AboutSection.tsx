import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-light">
      {/* Background shape */}
      <div className="absolute inset-0 z-0 bg-gray-200 [clip-path:polygon(0_8vw,100%_0,100%_calc(100%-8vw),0_100%)] lg:[clip-path:polygon(0_12.25%,100%_0%,50%_100%)] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-charcoal mb-4 tracking-tight leading-tight">
              Discover Bespoke 
              <span className="text-brand-blue"> Architectural Shading</span>
            </h2>
            {/* Minimal line */}
            <div className="w-16 h-px bg-brand-blue mb-8" />
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Alba Butterfly Pergola" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-brand-charcoal max-w-md mx-auto lg:mx-0">
                High-performance tension systems engineered for luxury and commercial spaces.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
