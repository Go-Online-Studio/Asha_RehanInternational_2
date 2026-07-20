import React, { useState } from 'react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  const { getWhatsAppUrl } = useWhatsAppLink('919574720006');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error when user types
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Basic phone validation (allowing digits, spaces, plus, dashes, parentheses)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone) || formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.product) newErrors.product = 'Please select a product';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const messageText = `*New Inquiry from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Product:* ${formData.product}
*Message:*
${formData.message}`;
      
      const url = getWhatsAppUrl(messageText);
      window.open(url, '_blank');
      
      // Clear form
      setFormData({
        name: '',
        phone: '',
        product: '',
        message: ''
      });
    }
  };

  return (
    <div className="pt-24 bg-brand-light">
      <div className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6">Contact <span className="text-brand-blue">Us</span></h1>
        <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto px-4">
          Connect with our design team for site measurements, material samples, and precise CAD estimations.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Workshop</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">Asha Smart Shades<br />48, GIDC Rd, Makarpura GIDC<br />Vadsar, Vadodara<br />Gujarat 390010</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Direct Inquiries</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">Contact@Ashasmartshades.Com<br />+91 95747 20006</p>
          </div>
          <div className="sm:col-span-2">
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Business Hours</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">Sunday - Friday<br />8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-gray/10">
          <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Request a Consultation</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name" 
                className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-brand-gray/40'} px-0 py-3 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-brand-gray/40'} px-0 py-3 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="product" className="sr-only">Product of Interest</label>
              <select 
                id="product"
                value={formData.product}
                onChange={handleChange}
                className={`w-full bg-transparent border-b ${errors.product ? 'border-red-500' : 'border-brand-gray/40'} px-0 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors ${!formData.product ? 'text-brand-charcoal/40' : ''}`}
              >
                <option value="" disabled className="text-brand-charcoal">Select Product of Interest</option>
                <option value="Retractable Awnings" className="text-brand-charcoal">Retractable Awnings</option>
                <option value="Glazed & Fabric Canopies" className="text-brand-charcoal">Glazed & Fabric Canopies</option>
                <option value="Tensile Membranes" className="text-brand-charcoal">Tensile Membranes</option>
                <option value="Gazebos & Umbrellas" className="text-brand-charcoal">Gazebos & Umbrellas</option>
                <option value="Other" className="text-brand-charcoal">Other / Not Sure</option>
              </select>
              {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..." 
                rows={4}
                className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-brand-gray/40'} px-0 py-3 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="flex flex-col gap-4">
              <button 
                type="button"
                onClick={handleWhatsAppSubmit}
                className="bg-[#25D366] text-white px-8 py-4 w-full rounded-sm tracking-widest uppercase text-sm font-medium hover:bg-[#25D366]/90 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
