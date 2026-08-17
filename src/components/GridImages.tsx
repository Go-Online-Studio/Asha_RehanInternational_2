import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function GridImages() {
  const images = [
    {
      thumb: "/images/Product1.webp",
      main: "/images/ProductMain1.jpg"
    },
    {
      thumb: "/images/Product2.webp",
      main: "/images/ProductMain2.jpg"
    },
    {
      thumb: "/images/Product3.avif",
      main: "/images/ProductMain3.jpg"
    },
    {
      thumb: "/images/Product4.avif",
      main: "/images/ProductMain4.jpg"
    }
  ];

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Add any specific Fancybox options here
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, []);

  return (
    <section className="bg-brand-light pt-4 md:pt-8">
      <div className="mb-24 px-1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={4}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full mobile-hide-nav"
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <a 
                data-fancybox="gallery" 
                href={item.main} 
                className="block aspect-square overflow-hidden cursor-zoom-in"
              >
                <img src={item.thumb} alt={`Lifestyle ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto md:me-0 text-center md:text-right">
          <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
            Based in Makarpura GIDC, Vadodara, Asha Smart Shades provides custom CAD-estimated and precision-engineered architectural shading solutions. We create high-durability tensile membranes, canopies, and retractable awnings to enhance luxury residential, commercial, hospitality, and industrial environments across Gujarat and India.
          </p>
        </div>
      </div>
    </section>
  );
}
