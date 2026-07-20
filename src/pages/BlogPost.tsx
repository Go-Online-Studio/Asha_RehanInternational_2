import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="uppercase tracking-widest text-sm text-brand-green font-medium mb-4 block">
          {post.category} &bull; {post.date}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 leading-tight">
          {post.title}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-sm">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="prose prose-lg text-brand-charcoal/80 max-w-none">
          <p className="lead text-2xl text-brand-charcoal font-serif mb-8">
            {post.excerpt}
          </p>
          <p className="mb-6">
            In the evolving landscape of architectural design, the integration of exterior shading systems has shifted from an afterthought to a core component of building performance. Modern structures demand solutions that not only protect against the elements but also contribute to the overall aesthetic and energy efficiency of the space.
          </p>
          <h2 className="text-3xl font-serif text-brand-charcoal mt-12 mb-6">Engineering and Material Innovation</h2>
          <p className="mb-6">
            The use of high-performance materials, such as PVC-coated polyesters and ETFE films, has revolutionized what is possible. These materials offer unprecedented strength-to-weight ratios, allowing for sweeping, unsupported spans that were previously impossible with traditional construction methods.
          </p>
          <p className="mb-6">
            Furthermore, the integration of motorized systems and smart sensors means these structures can dynamically respond to environmental conditions—retracting during high winds or extending during peak sunlight hours to optimize interior temperatures.
          </p>
          <blockquote className="border-l-4 border-brand-green pl-6 italic text-2xl my-10 font-serif text-brand-charcoal">
            "The synergy between structural integrity and aesthetic lightness is the hallmark of modern tension architecture."
          </blockquote>
          <p>
            As we look to the future, the focus will increasingly be on sustainability and intelligent integration, ensuring that every shading solution adds measurable value to the built environment.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-charcoal/10">
          <Link to="/blog" className="text-brand-blue hover:text-brand-blue/80 font-medium tracking-wide uppercase text-sm flex items-center">
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
