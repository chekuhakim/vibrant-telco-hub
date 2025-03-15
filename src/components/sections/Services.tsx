
import { motion } from 'framer-motion';
import { Building, FileSpreadsheet, Users } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Shared Infrastructure",
      description: "We provide shared telecommunication infrastructure for rent by Telecommunication Operators, optimizing resources and reducing costs."
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      title: "Site Acquisition",
      description: "Our team handles the complex process of site acquisition, ensuring optimal locations for telecommunication infrastructure."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Construction Services",
      description: "We offer complete construction services for telecommunication infrastructure, meeting the highest industry standards."
    }
  ];

  return (
    <section id="services" className="section bg-orange-50">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-muted-foreground">
            Alpha Orange provides comprehensive telecommunications infrastructure services, from site acquisition to construction and leasing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <div className="px-6 pb-6">
                <CustomButton 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary"
                  onClick={() => window.location.href = '/contact'}
                >
                  Learn More
                </CustomButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <CustomButton 
            size="lg" 
            onClick={() => window.location.href = '/contact'}
          >
            Request a Service
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
