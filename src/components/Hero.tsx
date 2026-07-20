import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    category: 'Product',
    title: 'Retractable Awnings: Precision folding-arm motorized tension frames',
    desktopImage: '/images/Banner1.avif',
    mobileImage: '/images/BannerMob1.avif'
  },
  {
    category: 'Product',
    title: 'Glazed & Fabric Canopies: Sculpted cantilever entrance protective shields',
    desktopImage: '/images/Banner2.avif',
    mobileImage: '/images/BannerMob2.avif'
  },
  {
    category: 'Project',
    title: 'Tensile Membranes: Advanced hyperbolic engineered sailing shapes',
    desktopImage: '/images/Banner3.avif',
    mobileImage: '/images/BannerMob3.avif'
  },
  {
    category: 'Solution',
    title: 'Gazebos & Umbrellas: Luxury garden frameworks & side-pole resort sails',
    desktopImage: '/images/Banner4.avif',
    mobileImage: '/images/BannerMob4.avif'
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-brand-charcoal">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-end">
              {/* Background Image */}
              <picture className="absolute inset-0 w-full h-full">
                <source
                  media="(max-width: 767px)"
                  srcSet={slide.mobileImage}
                />
                <img
                  src={slide.desktopImage}
                  alt={slide.title}
                  fetchPriority={index === 0 ? "high" : "low"}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
                />
              </picture>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /> 

              {/* Content - Bottom Aligned */}
              <div className="relative w-full pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                  <span className="block text-sm md:text-base font-sans font-medium mb-2 drop-shadow-md">
                    {slide.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight font-serif font-semibold drop-shadow-md">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Pagination Container */}
        <div className="hero-pagination absolute bottom-8 left-0 w-full flex justify-center gap-3 z-50"></div>
      </Swiper>
    </section>
  );
}
