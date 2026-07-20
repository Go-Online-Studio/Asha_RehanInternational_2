import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I request a custom CAD estimate?",
    answer: "You can request a custom CAD estimate by booking a consultation through our website or contacting us directly via WhatsApp. Our engineering team will assess your site dimensions and architectural requirements before providing a detailed preliminary model."
  },
  {
    question: "What materials do you use for tensile membranes?",
    answer: "We use high-performance architectural fabrics, including PVC-coated polyester, PTFE-coated fiberglass, and ETFE films. These materials are engineered to withstand extreme weather conditions while maintaining their aesthetic appeal and structural tension."
  },
  {
    question: "Do you handle installations outside of Vadodara?",
    answer: "Yes. While our primary workshop facility is located in Makarpura GIDC, Vadodara, our installation teams operate across Gujarat and undertake significant commercial projects nationwide."
  },
  {
    question: "What is the typical lifespan of a motorized awning?",
    answer: "Our motorized retractable awnings are built with marine-grade aluminum and UV-resistant acrylic fabrics. With standard maintenance, the structural frames last 15-20 years, while the fabric typically offers a 10-year performance guarantee."
  },
  {
    question: "Can these structures withstand heavy monsoon rains?",
    answer: "Absolutely. All our solutions, particularly the motorized awnings and tensile membranes, are engineered for high-performance weather resistance. They feature integrated water drainage systems to ensure no water pooling occurs during heavy monsoons."
  },
  {
    question: "Do you offer smart home integration for motorized products?",
    answer: "Yes, our motorized bioclimatic pergolas and retractable awnings can be integrated with modern home automation systems. You can control them via smartphone apps, remote controls, or wind/sun sensors that automatically adjust the shades based on weather."
  },
  {
    question: "How much maintenance do tensile membranes require?",
    answer: "Very little. Most architectural fabrics we use are treated with self-cleaning topcoats (like PVDF or TiO2) which repel dirt. Usually, a biannual wash with mild soapy water and a soft brush is sufficient to keep them looking pristine."
  },
  {
    question: "Are your products suitable for commercial and hospitality spaces?",
    answer: "Yes, a significant portion of our portfolio consists of B2B projects for hotels, restaurants, corporate parks, and educational institutions. We specialize in large-span shading solutions tailored for commercial usability and aesthetics."
  }
];

export default function FAQ({ hideTitle }: { hideTitle?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Frequently Asked Questions</h2>
          </div>
        )}

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group border-b transition-colors duration-300 ${openIndex === index ? 'border-brand-blue' : 'border-brand-charcoal/20 hover:border-brand-charcoal/50'}`}
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-6 pr-8">
                  <span className={`text-sm font-bold tracking-widest transition-colors ${openIndex === index ? 'text-brand-blue' : 'text-brand-charcoal/40 group-hover:text-brand-charcoal/70'}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-brand-blue' : 'text-brand-charcoal group-hover:text-brand-charcoal/80'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center border transition-colors ${openIndex === index ? 'border-brand-blue bg-brand-blue text-white' : 'border-brand-charcoal/10 group-hover:border-brand-charcoal/30 text-brand-charcoal'}`}>
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out pl-12 md:pl-16 pr-16 ${
                  openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-brand-charcoal/70 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
