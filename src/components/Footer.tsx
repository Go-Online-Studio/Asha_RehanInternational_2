import React from 'react';
import { Link } from 'react-router-dom';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function Footer() {
  const { getWhatsAppUrl } = useWhatsAppLink('919574720006');

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12 mb-16 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-2.25rem)] flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="mb-6 inline-block">
              <img 
                src="/images/asha-logo_Footer.webp" 
                alt="Asha Smart Shades Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Architectural Tension Systems & Intelligent Exterior Shading. Engineered for precision, crafted for elegance.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[150px]">
            <h5 className="uppercase tracking-widest text-sm font-medium mb-6 text-white/90">Solutions</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/products/retractable-awnings" className="hover:text-brand-blue transition-colors">Retractable Awnings</Link></li>
              <li><Link to="/products/glazed-canopies" className="hover:text-brand-blue transition-colors">Glazed Canopies</Link></li>
              <li><Link to="/products/tensile-membranes" className="hover:text-brand-blue transition-colors">Tensile Membranes</Link></li>
              <li><Link to="/products/gazebos-umbrellas" className="hover:text-brand-blue transition-colors">Gazebos & Umbrellas</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[90px]">
            <h5 className="uppercase tracking-widest text-sm font-medium mb-6 text-white/90">Company</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-blue transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & NAP */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-2.25rem)]">
            <h5 className="uppercase tracking-widest text-sm font-medium mb-6 text-white/90">Visit Workshop</h5>
            <address className="not-italic text-white/60 text-sm space-y-2">
              <p>48, GIDC Rd, Makarpura GIDC, Vadsar, Vadodara, Gujarat 390010</p>
            </address>
            <div className="mt-6">
              <a href="mailto:Contact@Ashasmartshades.Com" className="text-sm text-white/80 hover:text-brand-blue block mb-2">
                Contact@Ashasmartshades.Com
              </a>
              <a href="tel:+919574720006" className="text-sm text-white/80 hover:text-brand-blue block mb-2">
                +91 95747 20006
              </a>
              <a href={getWhatsAppUrl('Hello! I would like to make an inquiry.')} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-brand-blue block">
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center text-sm text-white/40 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved by Asha Smart Shades. Designed and Developed by <a href="https://shriiitrackingsolution.in/" target="_blank" className="text-white/60 hover:text-brand-blue transition-colors"><b>Shriii&nbsp;Tracking&nbsp;Solution</b></a></p>
        </div>
      </div>
    </footer>
  );
}
