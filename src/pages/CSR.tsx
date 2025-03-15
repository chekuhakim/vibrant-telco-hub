
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Globe, School, Users, Leaf, HandHeart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-orange-50 via-orange-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
                Our Commitment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                Corporate Social Responsibility
              </h1>
              <p className="text-xl text-muted-foreground">
                At Alpha Orange, we believe in contributing positively to society and the environment while fostering sustainable business practices.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {initiatives.map((initiative, index) => (
                <motion.div 
                  key={index} 
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card className="h-full glass-card hover:shadow-lg transition-all duration-300 border-none">
                    <CardHeader className="text-center pb-2">
                      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                        {initiative.icon}
                      </div>
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground text-base">
                        {initiative.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Our Approach to CSR</h2>
                      <p className="text-muted-foreground">
                        Alpha Orange's CSR initiatives focus on creating positive impacts in the communities where we operate. 
                        We aim to integrate responsible practices into every aspect of our business operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white to-orange-50 p-8 rounded-2xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Community Development</h3>
                      <p className="text-muted-foreground">
                        We engage with local communities to understand their needs and develop programs that create meaningful impact. 
                        Our team participates in volunteer activities and supports local causes that align with our values.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
                      <p className="text-muted-foreground">
                        As a telecommunication infrastructure provider, we are mindful of our environmental responsibilities. 
                        We implement eco-friendly practices in our tower construction and maintenance, aiming to minimize our ecological footprint.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white to-orange-50 p-8 rounded-2xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <HandHeart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ethical Business Practices</h3>
                      <p className="text-muted-foreground">
                        Alpha Orange maintains the highest standards of ethical conduct in all our business dealings. 
                        We are committed to transparency, fairness, and integrity in our relationships with customers, partners, and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CSR;
