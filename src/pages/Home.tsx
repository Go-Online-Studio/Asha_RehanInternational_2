import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Products from '../components/Products';
import Projects from '../components/Projects';
import GridImages from '../components/GridImages';
import ExploreProducts from '../components/ExploreProducts';
import Partners from '../components/Partners';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <div className="w-full [clip-path:polygon(0_8vw,100%_0,100%_calc(100%-8vw),0_100%)] md:[clip-path:polygon(0_4vw,100%_0,100%_calc(100%-4vw),0_100%)]">
        <Products />
        <Projects />
      </div>
      <ExploreProducts />
      <GridImages />
      <BlogSection />
      <Partners />
    </>
  );
}
