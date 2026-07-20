import React from 'react';

export default function Products() {
  return (
    <section className="bg-[#b8d7c9] w-full relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row w-full max-w-[1920px] mx-auto min-h-[600px] xl:min-h-[700px]">
        {/* Left Side Image */}
        <div className="w-1/2 relative h-full min-h-[600px] xl:min-h-[700px]">
          <img 
            src="https://img.magnific.com/free-photo/beauty-park_1127-2277.jpg?t=st=1784028582~exp=1784032182~hmac=fe0c1b8fafb38212bf7df11ff29723de5f0e381f896f800ac4691ebc6298f6ff&w=1480" 
            alt="Intelligent Exterior Shading"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side Content Container */}
        <div className="w-1/2 flex flex-col justify-start pt-24 pl-16 pr-8">
          <h2 className="text-5xl lg:text-7xl font-serif text-[#222222] leading-tight mb-8">
            Intelligent Exterior Shading
          </h2>
        </div>

        {/* Overlapping Content Box */}
        <div className="absolute top-[40%] left-[45%] w-[45%] z-20">
          <div className="bg-white p-10 md:p-12 shadow-sm">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sans">
              Based in Makarpura GIDC, Vadodara, Asha Smart Shades has been designing and producing personalized and unique <strong>outdoor solutions</strong> for luxury residential and commercial spaces. We provide custom CAD estimates, precise site measurements, and professional architectural design consultations to seamlessly extend your living and working environments.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest hover:bg-gray-100 transition-colors uppercase shadow-sm">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col w-full">
        <div className="w-full h-[400px]">
          <img 
            src="https://img.magnific.com/free-photo/beauty-park_1127-2277.jpg?t=st=1784028582~exp=1784032182~hmac=fe0c1b8fafb38212bf7df11ff29723de5f0e381f896f800ac4691ebc6298f6ff&w=1480" 
            alt="Intelligent Exterior Shading"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-6 py-12 flex flex-col">
          <h2 className="text-4xl font-serif text-[#222222] leading-tight mb-12">
            Intelligent <br />
            Exterior Shading
          </h2>
          
          <div className="bg-white p-8 shadow-sm relative -mt-8 mx-auto w-full z-10">
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Based in Makarpura GIDC, Vadodara, Asha Smart Shades has been designing and producing personalized and unique <strong>outdoor solutions</strong> for luxury residential and commercial spaces. We provide custom CAD estimates, precise site measurements, and professional architectural design consultations to seamlessly extend your living and working environments.
            </p>
          </div>
          
          <div className="mt-8 flex justify-start w-full">
            <button className="bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest hover:bg-gray-100 transition-colors uppercase shadow-sm">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
