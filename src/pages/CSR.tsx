
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Globe, School } from 'lucide-react';

const CSR = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const initiatives = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Community Outreach",
      description: "We are committed to supporting the communities where we operate through various initiatives and programs."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Environmental Sustainability",
      description: "Alpha Orange is dedicated to minimizing our environmental footprint and promoting sustainable practices."
    },
    {
      icon: <School className="h-8 w-8 text-primary" />,
      title: "Education Support",
      description: "We believe in empowering future generations through educational opportunities and technological literacy."
    }
  ];

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
                Our Commitment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
              <p className="text-xl text-muted-foreground">
                At Alpha Orange, we believe in contributing positively to society and the environment while fostering sustainable business practices.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {initiatives.map((initiative, index) => (
                <div key={index} className="glass-card p-8 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto prose prose-orange">
              <h2>Our Approach to CSR</h2>
              <p>
                Alpha Orange's CSR initiatives focus on creating positive impacts in the communities where we operate. We aim to integrate responsible practices into every aspect of our business operations.
              </p>
              
              <h3>Community Development</h3>
              <p>
                We engage with local communities to understand their needs and develop programs that create meaningful impact. Our team participates in volunteer activities and supports local causes that align with our values.
              </p>
              
              <h3>Environmental Stewardship</h3>
              <p>
                As a telecommunication infrastructure provider, we are mindful of our environmental responsibilities. We implement eco-friendly practices in our tower construction and maintenance, aiming to minimize our ecological footprint.
              </p>
              
              <h3>Ethical Business Practices</h3>
              <p>
                Alpha Orange maintains the highest standards of ethical conduct in all our business dealings. We are committed to transparency, fairness, and integrity in our relationships with customers, partners, and stakeholders.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CSR;
