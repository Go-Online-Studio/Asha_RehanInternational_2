import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-light flex items-center justify-center transition-opacity duration-500">
      <div className="w-16 h-16 border-4 border-brand-charcoal/20 border-t-brand-blue rounded-full animate-spin"></div>
    </div>
  );
}
