import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../pages/Blog';

export default function BlogSection() {
  // Show only the 3 most recent posts on the homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Latest <span className="text-brand-blue">Insights</span></h2>
          <p className="text-brand-charcoal/70 max-w-2xl">
            News, case studies, and technical deep-dives into the world of architectural tension systems.
          </p>
        </div>
        <Link to="/blog" className="hidden md:inline-block border border-brand-charcoal/20 text-brand-charcoal px-6 py-2 text-sm tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors mt-8 md:mt-0">
          View All Posts
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
                <span className="text-brand-blue text-sm font-medium uppercase tracking-wide group-hover:underline mt-auto pt-4">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link to="/blog" className="inline-block border border-brand-charcoal/20 text-brand-charcoal px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
