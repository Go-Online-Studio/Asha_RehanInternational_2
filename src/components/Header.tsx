import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // If not on home page, always consider header scrolled (solid bg)
  const isHomePage = location.pathname === '/';
  const headerSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = `text-sm tracking-wide transition-colors ${
    headerSolid ? 'text-brand-charcoal hover:text-brand-blue' : 'text-white/90 hover:text-white'
  }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        headerSolid ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-black/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center py-1">
          <img 
            src={headerSolid ? "/images/asha-logo.webp" : "/images/asha-logo_Footer.webp"} 
            alt="Asha Smart Shades" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={navLinkClass}>About</Link>
          <div className="relative group cursor-pointer">
            <span className={`${navLinkClass} flex items-center gap-1`}>
              Products <ChevronDown size={14} />
            </span>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 border border-brand-gray/20">
              <Link to="/products/retractable-awnings" className="px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-light transition-colors">Retractable Awnings</Link>
              <Link to="/products/glazed-canopies" className="px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-light transition-colors">Glazed & Fabric Canopies</Link>
              <Link to="/products/tensile-membranes" className="px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-light transition-colors">Tensile Membranes</Link>
              <Link to="/products/gazebos-umbrellas" className="px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-light transition-colors">Gazebos & Umbrellas</Link>
            </div>
          </div>
          <Link to="/faq" className={navLinkClass}>FAQ</Link>
          <Link to="/blog" className={navLinkClass}>Blog</Link>
          <Link to="/contact" className="bg-brand-blue text-white px-6 py-2.5 rounded-sm text-sm tracking-wide hover:bg-blue-600 transition-colors">
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={headerSolid ? 'text-brand-charcoal' : 'text-white'} />
          ) : (
            <Menu className={headerSolid ? 'text-brand-charcoal' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link to="/about" className="text-brand-charcoal text-lg" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <div className="text-brand-charcoal text-lg font-medium pt-2">Products</div>
            <Link to="/products/retractable-awnings" className="text-brand-charcoal/70 hover:text-brand-blue pl-4" onClick={() => setIsMobileMenuOpen(false)}>Retractable Awnings</Link>
            <Link to="/products/glazed-canopies" className="text-brand-charcoal/70 hover:text-brand-blue pl-4" onClick={() => setIsMobileMenuOpen(false)}>Glazed Canopies</Link>
            <Link to="/products/tensile-membranes" className="text-brand-charcoal/70 hover:text-brand-blue pl-4" onClick={() => setIsMobileMenuOpen(false)}>Tensile Membranes</Link>
            <Link to="/products/gazebos-umbrellas" className="text-brand-charcoal/70 hover:text-brand-blue pl-4" onClick={() => setIsMobileMenuOpen(false)}>Gazebos & Umbrellas</Link>
            <Link to="/faq" className="text-brand-charcoal text-lg" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link to="/blog" className="text-brand-charcoal text-lg" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="bg-brand-blue text-white px-6 py-3 text-center rounded-sm text-lg mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
