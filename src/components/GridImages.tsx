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
    "/images/Product1.webp",
    "/images/Product2.webp",
    "/images/Product3.webp",
    "/images/Product4.webp"
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
          className="w-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <a 
                data-fancybox="gallery" 
                href={src} 
                className="block aspect-square overflow-hidden cursor-zoom-in"
              >
                <img src={src} alt="Lifestyle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
