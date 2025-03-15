
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const RAO = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="relative py-16 md:py-24 bg-orange-50">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
                Reference Access Offer
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">RAO</h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-orange-50 p-8 rounded-xl mb-12 text-center">
                <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Reference Access Offer</h2>
                <p className="text-muted-foreground mb-6">
                  This section contains information about Alpha Orange's Reference Access Offer, which outlines the terms and conditions for access to our telecommunication infrastructure.
                </p>
                <CustomButton>
                  Download RAO Document
                </CustomButton>
              </div>
              
              <div className="prose prose-orange mx-auto">
                <p>
                  The Reference Access Offer (RAO) details the specific services offered by Alpha Orange Sdn Bhd, along with the associated terms and conditions for access seekers.
                </p>
                
                <p>
                  In accordance with regulatory requirements, Alpha Orange has developed this comprehensive document to facilitate fair and transparent access to our telecommunication infrastructure.
                </p>
                
                <p>
                  For more detailed information or to request a copy of our RAO, please contact our regulatory affairs department.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RAO;
