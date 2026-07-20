import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Gazebos & Umbrellas',
    image: '/images/homeProductDesc1.avif',
    link: '/products/gazebos-umbrellas'
  },
  {
    title: 'Retractable Awnings',
    image: '/images/homeProductDesc2.avif',
    link: '/products/retractable-awnings'
  },
  {
    title: 'Glazed & Fabric Canopies',
    image: '/images/homeProductDesc3.avif',
    link: '/products/glazed-canopies'
  },
  {
    title: 'Tensile Membranes',
    image: '/images/homeProductDesc4.avif',
    link: '/products/tensile-membranes'
  }
];

export default function ExploreProducts() {
  return (
    <section className="bg-brand-light pt-12 md:pt-24 pb-4 md:pb-8">
      <div className="max-full mx-auto mb-8">
        <h2 className="text-2xl font-serif text-brand-charcoal uppercase tracking-widest pl-4 lg:pl-8">
          Explore Our Products
        </h2>
      </div>

      <div className="flex flex-col space-y-4 max-w-full mx-auto">
        {categories.map((cat, idx) => (
          <Link to={cat.link} key={idx} className="group relative w-full h-[250px] md:h-[400px] overflow-hidden block">
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent" />
            
            {/* Text at bottom left */}
            <div className="absolute bottom-8 left-8 flex items-center text-white space-x-4">
              <h3 className="text-2xl md:text-3xl font-serif group-hover:text-brand-blue transition-colors duration-300">{cat.title}</h3>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-brand-green transition-colors group-hover:translate-x-2 duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
