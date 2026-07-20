import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function FABs() {
  const [isVisible, setIsVisible] = useState(false);
  const { getWhatsAppUrl } = useWhatsAppLink('919574720006');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href={getWhatsAppUrl('Hello! I would like to know more about your products.')} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="tel:+919574720006" 
        className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Phone"
      >
        <Phone size={24} />
      </a>
      <button 
        onClick={scrollToTop}
        className={`w-14 h-14 bg-brand-charcoal text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
