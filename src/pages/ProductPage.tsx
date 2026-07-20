import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import FAQComponent from '../components/FAQ';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { MessageCircle, ArrowRight } from 'lucide-react';
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

    return () => {
      Fancybox.unbind('[data-fancybox="product-gallery"]');
      Fancybox.close();
    };
  }, []);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-18 bg-brand-light">
      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen min-h-[560px] w-full overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent flex items-end pb-16 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="uppercase tracking-widest text-sm md:text-base text-brand-green font-medium mb-4 block">Bespoke Solution</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-6 font-light tracking-tight">{product.title}</h1>
            <p className="text-xl md:text-3xl text-white/90 max-w-3xl font-light leading-relaxed">{product.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif text-brand-charcoal mb-8 leading-tight">Engineering Details</h2>
              <p className="text-brand-charcoal/70 text-lg md:text-xl leading-relaxed mb-12">
                {product.description}
              </p>
              
              <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Key Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {product.features.map((feature: string, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-brand-charcoal/5 flex items-center group hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                    <span className="w-2 h-2 bg-brand-green rounded-full mr-4 group-hover:scale-150 transition-transform duration-500"></span>
                    <span className="text-brand-charcoal/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={getWhatsAppUrl(`Hello, I am interested in ${product.title}. Can we discuss a custom estimate?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-charcoal text-white px-10 py-5 rounded-sm tracking-widest uppercase text-sm font-bold hover:bg-brand-charcoal/90 hover:shadow-lg transition-all duration-300 w-full sm:w-auto group"
              >
                <MessageCircle size={22} className="text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                Quick WhatsApp Inquiry
              </a>
            </div>
            
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              {product.gallery?.[0] && (
                <div className="h-80 md:h-[40rem] overflow-hidden relative group rounded-sm shadow-xl">
                  <div className="block w-full h-full">
                    <img 
                      src={product.gallery[0]} 
                      alt={`${product.title} Detail`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
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
                    className="block w-full h-full overflow-hidden cursor-zoom-in group"
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

      <div className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal">More Inspiration</h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full pb-12"
          >
            {otherProducts.map(([key, item]) => (
              <SwiperSlide key={key}>
                <Link to={`/products/${key}`} className="group relative w-full h-[300px] md:h-[400px] overflow-hidden block rounded-sm shadow-md">
                  <div className="block w-full h-full">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute bottom-6 left-6 flex flex-col text-white pointer-events-none z-10">
                    <h3 className="text-2xl font-serif mb-1 group-hover:text-brand-blue transition-colors duration-500">{item.title}</h3>
                    <div className="flex items-center text-brand-green font-medium tracking-wide text-xs uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      View Details 
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
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
