import React from 'react';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 'future-of-tensile-architecture',
    title: 'The Future of Tensile Architecture in Commercial Spaces',
    excerpt: 'Exploring how lightweight membrane structures are redefining modern architectural landscapes and offering sustainable shading solutions.',
    date: 'August 12, 2024',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1506527716155-27a909fc72e8?auto=format&fit=crop&q=80',
  },
  {
    id: 'choosing-right-awning-fabric',
    title: 'How to Choose the Right Fabric for Your Motorized Awning',
    excerpt: 'A comprehensive guide to selecting between acrylic, polyester, and PVC-coated fabrics for maximum durability and UV protection.',
    date: 'July 28, 2024',
    category: 'Materials',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80',
  },
  {
    id: 'bioclimatic-pergolas-explained',
    title: 'Bioclimatic Pergolas: Intelligent Temperature Regulation',
    excerpt: 'Understanding the mechanics behind adjustable louvered roofs and how they create microclimates for year-round outdoor comfort.',
    date: 'July 15, 2024',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
  },
  {
    id: 'wind-resistance-standards',
    title: 'Understanding Wind Load Resistance in Exterior Shading',
    excerpt: 'Why the Beaufort scale matters when engineering canopies and how Asha Industries ensures structural integrity during extreme weather.',
    date: 'June 30, 2024',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
  },
  {
    id: 'luxury-resort-shading-trends',
    title: '2024 Design Trends for Luxury Resort Shading',
    excerpt: 'From minimalist side-pole umbrellas to expansive stretch tents, discover what high-end hospitality venues are adopting this year.',
    date: 'June 10, 2024',
    category: 'Design Trends',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80',
  },
];

export default function Blog() {
  return (
    <div className="pt-24 bg-brand-light min-h-screen">
      <div className="py-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6">Insights & Engineering</h1>
        <p className="text-lg text-brand-charcoal/70">
          News, case studies, and technical deep-dives into the world of architectural tension systems.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-brand-charcoal/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-brand-green mb-4">
                  <span>{post.category}</span>
                  <span className="text-brand-charcoal/40">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-brand-blue text-sm font-medium uppercase tracking-wide group-hover:underline">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
