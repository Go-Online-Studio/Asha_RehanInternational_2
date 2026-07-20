import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FAQComponent from '../components/FAQ';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { MessageCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const productData: Record<string, any> = {
  'retractable-awnings': {
    title: 'Retractable Awnings',
    tagline: 'Precision folding-arm motorized tension frames.',
    description: 'Our retractable awnings provide dynamic sun protection, seamlessly extending your indoor living spaces into the outdoors. Engineered with marine-grade aluminum and UV-resistant acrylic fabrics, they offer both aesthetic elegance and robust durability.',
    features: ['Motorized Operation', 'Sun & Wind Sensors', 'Custom Fabric Choices', 'Integrated LED Lighting'],
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510627498534-15e8d89cb2dd?auto=format&fit=crop&q=80'
    ]
  },
  'glazed-canopies': {
    title: 'Glazed & Fabric Canopies',
    tagline: 'Sculpted cantilever entrance protective shields.',
    description: 'Designed to make a lasting impression, our glazed and fabric canopies offer superior weather protection while enhancing architectural aesthetics. Perfect for commercial entrances, hotel lobbies, and luxury residences.',
    features: ['Tempered Glass Options', 'High-Tension PVC Fabrics', 'Custom Steel Frameworks', 'Weatherproof Seals'],
    image: 'https://images.unsplash.com/photo-1510627498534-15e8d89cb2dd?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80'
    ]
  },
  'tensile-membranes': {
    title: 'Tensile Membranes',
    tagline: 'Advanced hyperbolic engineered sailing shapes.',
    description: 'For expansive coverage and striking visual impact, our tensile membrane structures are unparalleled. Using advanced form-finding software and structural analysis, we create soaring hyperbolic paraboloids and cone structures.',
    features: ['PTFE & ETFE Materials', 'Wide-Span Coverage', 'Architectural Impact', 'High Wind Resistance'],
    image: 'https://images.unsplash.com/photo-1506527716155-27a909fc72e8?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510627498534-15e8d89cb2dd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599505877666-8975ed3527e0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80'
    ]
  },
  'gazebos-umbrellas': {
    title: 'Gazebos & Umbrellas',
    tagline: 'Luxury garden frameworks & resort sails.',
    description: 'Elevate premium estates and resort landscapes with our heavy-duty side-pole umbrellas and custom gazebos. Designed for commercial durability but styled for luxury residential comfort.',
    features: ['360-Degree Rotation', 'Marine-Grade Masts', 'Water-Repellent Canvas', 'Minimalist Design'],
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599505877666-8975ed3527e0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
    ]
  },
};

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productData[productId] : null;
  const { getWhatsAppUrl } = useWhatsAppLink('919574720006');
  
  const otherProducts = Object.entries(productData).filter(([key]) => key !== productId);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="product-gallery"]', {});
    Fancybox.bind('[data-fancybox="related-gallery"]', {});

    return () => {
      Fancybox.unbind('[data-fancybox="product-gallery"]');
      Fancybox.unbind('[data-fancybox="related-gallery"]');
      Fancybox.close();
    };
  }, []);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 bg-brand-light">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-charcoal/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="uppercase tracking-widest text-sm text-brand-green font-medium mb-4 block">Bespoke Solution</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-4">{product.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{product.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif text-brand-charcoal mb-6">Engineering Details</h2>
              <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              
              <h3 className="text-xl font-serif text-brand-charcoal mb-4">Key Capabilities</h3>
              <ul className="space-y-3 mb-10">
                {product.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-brand-charcoal/80">
                    <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={getWhatsAppUrl(`Hello, I am interested in ${product.title}. Can we discuss a custom estimate?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-sm tracking-widest uppercase text-sm font-medium hover:bg-[#25D366]/90 transition-colors shadow-sm"
              >
                <MessageCircle size={20} />
                Quick WhatsApp Inquiry
              </a>
            </div>
            
            <div className="flex flex-col gap-6">
              {product.gallery?.[0] && (
                <div className="h-64 md:h-[32rem] overflow-hidden relative group rounded-sm shadow-sm">
                  <a data-fancybox="product-gallery" href={product.gallery[0]} className="block w-full h-full cursor-zoom-in">
                    <img 
                      src={product.gallery[0]} 
                      alt={`${product.title} Detail`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Product Gallery Section */}
      <div className="bg-brand-light">
        <h2 className="text-3xl font-serif text-brand-charcoal mb-8 text-center px-4">Project Gallery</h2>
        {product.gallery && product.gallery.length > 0 && (
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={4}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-64 md:h-96"
            >
              {product.gallery.map((src: string, idx: number) => (
                <SwiperSlide key={idx} className="h-full w-full">
                  <a 
                    data-fancybox="product-gallery" 
                    href={src} 
                    className="block w-full h-full cursor-zoom-in group"
                  >
                    <img 
                      src={src} 
                      alt={`${product.title} Gallery ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-12 text-center">More Inspiration</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full pb-12 px-1"
          >
            {otherProducts.map(([key, item]) => (
              <SwiperSlide key={key}>
                <div className="bg-brand-light group rounded-sm overflow-hidden shadow-sm h-full flex flex-col">
                  <a 
                    data-fancybox="related-gallery" 
                    href={item.image} 
                    className="block h-64 overflow-hidden relative cursor-zoom-in"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </a>
                  <div className="p-6 flex flex-col flex-grow text-center">
                    <h3 className="text-xl font-serif text-brand-charcoal mb-2">{item.title}</h3>
                    <a href={`/products/${key}`} className="text-brand-green font-medium tracking-wide text-sm uppercase hover:text-brand-green/80 transition-colors mt-auto">
                      View Service Details &rarr;
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <FAQComponent />
      
      {/* Final Full-width visual */}
      <div className="w-full h-[50vh] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 object-bottom"
        />
        <div className="absolute inset-0 bg-brand-charcoal/50 flex flex-col items-center justify-center text-center px-4">
           <h2 className="text-white text-3xl md:text-5xl font-serif mb-6">Ready to transform your space?</h2>
           <a href="/contact" className="inline-block bg-brand-blue text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-brand-blue/90 transition-colors">Start Your Project</a>
        </div>
      </div>

    </div>
  );
}
