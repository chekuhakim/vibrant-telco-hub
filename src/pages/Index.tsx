
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SignalSamurai from '@/components/game/SignalSamurai';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 bg-gradient-to-b from-orange-50 to-white">
        <SignalSamurai />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
