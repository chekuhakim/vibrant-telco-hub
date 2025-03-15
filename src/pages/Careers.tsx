
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, Mail, Users, CheckCircle } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const Careers = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const positions = [
    {
      title: "Telecommunications Engineer",
      location: "Shah Alam, Selangor",
      type: "Full-time",
      description: "We're seeking experienced telecommunications engineers to design, deploy, and optimize our network infrastructure."
    },
    {
      title: "Site Acquisition Specialist",
      location: "Various Locations",
      type: "Full-time",
      description: "Join our team to identify, evaluate, and secure optimal locations for telecommunications infrastructure."
    },
    {
      title: "Project Manager",
      location: "Ipoh, Perak",
      type: "Full-time",
      description: "Lead and manage telecommunications infrastructure projects from planning to completion."
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      text: "Excellence in everything we do"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      text: "Integrity and ethical conduct"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      text: "Innovation and continuous improvement"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      text: "Teamwork and collaboration"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      text: "Customer-focused solutions"
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
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
              <p className="text-xl text-muted-foreground">
                We're constantly looking for motivated, talented and experienced professionals to join our diverse team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Join Alpha Orange?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Diverse Team</h3>
                  <p className="text-muted-foreground">
                    Join a diverse team of professionals working together towards mutual success.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Develop your skills and advance your career with our supportive professional environment.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl mb-12">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {value.icon}
                      <p>{value.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
              
              <div className="space-y-6 mb-12">
                {positions.map((position, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <div className="bg-secondary p-6">
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium">
                          {position.location}
                        </span>
                        <span className="inline-block bg-orange-100 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <CustomButton variant="outline" size="sm">
                        View Details
                      </CustomButton>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-orange-50 p-8 rounded-xl text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
                <p className="text-muted-foreground mb-6">
                  Submit your resume to our HR department at:
                </p>
                <a 
                  href="mailto:hr@alphaorange.com.my" 
                  className="inline-block font-medium text-primary text-lg hover:underline"
                >
                  hr@alphaorange.com.my
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
