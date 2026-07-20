import React, { useState } from 'react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { MessageCircle, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

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
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
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
      
      setFormData({
        name: '',
        phone: '',
        product: '',
        message: ''
      });
    }
  };

  return (
    <div className="bg-brand-light text-brand-charcoal min-h-screen">
      {/* Premium Hero Header */}
      <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-brand-charcoal/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" 
          alt="Luxury Architecture" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
              Design Brief & Consultation
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight mb-4">
              Connect With <span className="italic font-normal">Our Studio</span>
            </h1>
            <div className="h-[2px] w-24 bg-brand-blue mb-6" />
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-light leading-relaxed">
              Connect with our design team for site measurements, material samples, and precise CAD estimations. Engineered for durability, styled for ultimate luxury.
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Section */}
      <div className="py-24 relative overflow-hidden bg-brand-light">
        {/* Soft background glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
                  Direct Channels
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-brand-charcoal mb-6">
                  Visit Studio & Workshop
                </h2>
              </div>

              {/* Address Card */}
              <div className="border border-brand-gray/20 bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light border border-brand-gray/20 rounded-sm flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-lg font-medium text-brand-charcoal mb-3">Main Workshop</h3>
                    <address className="not-italic text-brand-charcoal/70 text-sm space-y-1.5 leading-relaxed">
                      <p className="font-medium text-brand-charcoal font-serif">Asha Smart Shades</p>
                      <p>48, GIDC Rd, Makarpura GIDC</p>
                      <p>Vadsar, Vadodara</p>
                      <p>Gujarat 390010</p>
                    </address>
                    <a 
                      href="https://maps.app.goo.gl/RrxpNpqpV4ooDC9V9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-brand-charcoal transition-colors mt-4 font-semibold uppercase tracking-wider"
                    >
                      Open Directions <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="border border-brand-gray/20 bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light border border-brand-gray/20 rounded-sm flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-lg font-medium text-brand-charcoal mb-3">Direct Communication</h3>
                    <div className="space-y-3">
                      <a href="mailto:Contact@Ashasmartshades.Com" className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-charcoal transition-colors text-sm">
                        <Mail size={14} className="text-brand-charcoal/40" /> Contact@Ashasmartshades.Com
                      </a>
                      <a href="tel:+919574720006" className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-charcoal transition-colors text-sm">
                        <Phone size={14} className="text-brand-charcoal/40" /> +91 95747 20006
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="border border-brand-gray/20 bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light border border-brand-gray/20 rounded-sm flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-dark transition-colors duration-300">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-brand-charcoal mb-3">Studio Availability</h3>
                    <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-1">
                      Sunday - Friday: <span className="text-brand-charcoal font-medium">8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="text-brand-charcoal/40 text-xs italic">
                      * Architectural consults by appointment only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-brand-gray/10 p-8 md:p-12 rounded-sm shadow-lg relative text-left">
                <div className="absolute top-0 right-0 w-24 h-[2px] bg-gradient-to-l from-brand-blue to-transparent" />
                <div className="absolute bottom-0 left-0 w-24 h-[2px] bg-gradient-to-r from-brand-green to-transparent" />

                <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
                  Interactive Brief
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-charcoal mb-8 tracking-tight">
                  Request a Private Consultation
                </h3>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-brand-gray/30'} py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 absolute left-0">{errors.name}</p>}
                  </div>

                  <div className="relative pt-2">
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-brand-gray/30'} py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 absolute left-0">{errors.phone}</p>}
                  </div>

                  <div className="relative pt-2">
                    <select 
                      id="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b ${errors.product ? 'border-red-500' : 'border-brand-gray/30'} py-4 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors cursor-pointer ${!formData.product ? 'text-brand-charcoal/40' : ''}`}
                    >
                      <option value="" disabled className="text-brand-charcoal/50">Select Product of Interest</option>
                      <option value="Retractable Awnings">Retractable Awnings</option>
                      <option value="Glazed & Fabric Canopies">Glazed & Fabric Canopies</option>
                      <option value="Tensile Membranes">Tensile Membranes</option>
                      <option value="Gazebos & Umbrellas">Gazebos & Umbrellas</option>
                      <option value="Other">Other Custom Shading Project</option>
                    </select>
                    {errors.product && <p className="text-red-500 text-xs mt-1 absolute left-0">{errors.product}</p>}
                  </div>

                  <div className="relative pt-2">
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project specifications..." 
                      rows={4}
                      className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-brand-gray/30'} py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-charcoal transition-colors resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 absolute left-0">{errors.message}</p>}
                  </div>

                  <div className="pt-6">
                    <button 
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="bg-gradient-to-r from-brand-blue to-brand-green hover:opacity-90 text-white px-8 py-5 w-full rounded-sm tracking-widest uppercase text-sm font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 hover:-translate-y-0.5 active:translate-y-0 transform cursor-pointer"
                    >
                      <MessageCircle size={20} />
                      Send via WhatsApp Securely
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="relative w-full h-[450px] rounded-sm overflow-hidden border border-brand-gray/20 shadow-lg bg-white p-2 group hover:border-brand-blue/30 transition-colors duration-500">
          <iframe 
            title="Asha Smart Shades Workshop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.498100193529!2d73.1965591!3d22.259114000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cc30e93e2f%3A0x922e858606bf003e!2sAsha%20Industries%20%7CAwnings%20in%20Vadodara%7C%20%7CAwnings%20manufacturer%7C!5e0!3m2!1sen!2sin!4v1784089791263!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-sm"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
