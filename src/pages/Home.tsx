import React from 'react';
import { HeroSlider, QuickActions } from '@/components/sections/HeroAndActions';
import { AboutSection, ServicesSection } from '@/components/sections/AboutAndServices';
import { HaulageHomeSection } from '@/components/sections/HaulageSection';
import { FeaturedCars, RentalFleet } from '@/components/sections/CarsAndRentals';
import { AutoParts, WhyChooseUs } from '@/components/sections/PartsAndWhyUs';
import { FAQ, BlogSection } from '@/components/sections/BottomSections';
import SEO from '@/components/seo/SEO';

export default function Home() {
  return (
    <main>
      <SEO title="Santa Towing | 24/7 Towing, Haulage, Repairs & Rentals in Ghana" description="Expert 24/7 emergency towing, nationwide haulage & heavy machinery transport, professional auto repairs, car sales, and premium car rentals in Ghana." canonical="/" />
      <HeroSlider />
      <QuickActions />
      <AboutSection />
      <ServicesSection />
      <HaulageHomeSection />
      <FeaturedCars />
      <RentalFleet />
      <AutoParts />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
    </main>
  );
}
