
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AlertCircle, Send, ShieldCheck } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from 'sonner';

const Grievance = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Grievance submitted:', formData);
    toast.success('Your grievance has been submitted successfully.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: '',
      details: ''
    });
  };

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
                Submit Feedback
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Grievance Portal</h1>
              <p className="text-xl text-muted-foreground">
                We value your feedback and are committed to addressing any concerns or issues you may have.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-6">Submit a Grievance</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium mb-2">
                        Grievance Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a type</option>
                        <option value="Service Issue">Service Issue</option>
                        <option value="Infrastructure Concern">Infrastructure Concern</option>
                        <option value="Environmental Issue">Environmental Issue</option>
                        <option value="Community Concern">Community Concern</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="details" className="block text-sm font-medium mb-2">
                        Grievance Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Please provide detailed information about your grievance..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="consent" className="text-sm">
                        I agree that the information provided will be used to address my grievance.
                      </label>
                    </div>
                    
                    <div>
                      <CustomButton 
                        type="submit" 
                        size="lg"
                      >
                        Submit Grievance
                        <Send className="h-4 w-4 ml-2" />
                      </CustomButton>
                    </div>
                  </form>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="bg-orange-50 p-6 rounded-xl mb-8">
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Our Commitment
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Alpha Orange is committed to addressing all grievances in a fair, transparent, and timely manner.
                    </p>
                    <p className="text-muted-foreground">
                      We take every concern seriously and work diligently to resolve issues to your satisfaction.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-border p-6 rounded-xl">
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      Grievance Process
                    </h3>
                    <ol className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary font-medium">
                          1
                        </span>
                        <span>Submit your grievance through this form.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary font-medium">
                          2
                        </span>
                        <span>Receive acknowledgment within 2 business days.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary font-medium">
                          3
                        </span>
                        <span>Our team investigates your concern.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary font-medium">
                          4
                        </span>
                        <span>Proposed resolution or explanation provided.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary font-medium">
                          5
                        </span>
                        <span>Implementation of resolution if applicable.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Grievance;
