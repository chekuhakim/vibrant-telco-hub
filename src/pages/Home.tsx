
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Services from '@/components/sections/Services';
import Licenses from '@/components/sections/Licenses';
import LandOwners from '@/components/sections/LandOwners';
import Contact from '@/components/sections/Contact';
import Careers from '@/components/sections/Careers';

const Home = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <Services />
        <Licenses />
        <LandOwners />
        <Contact />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
