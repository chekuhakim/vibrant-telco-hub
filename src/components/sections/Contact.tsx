
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const locations = [
    {
      title: "Headquarters",
      address: "No.27 & 27-01, Jalan Snuker 13/28, Seksyen 13, 40100 Shah Alam, Selangor",
      phone: "03-58858550",
      fax: "03-27268818",
      mobile: "017-9497990"
    },
    {
      title: "Perak Branch",
      address: "C-G-12, Greentown Square, Jalan Dato' Seri Ahmad Said, 30450 Ipoh, Perak",
      phone: "05-2557727",
      fax: "05-2557227"
    },
    {
      title: "Sabah Branch",
      address: "Unit 10-1-8, 1st Floor, Wawasan Plaza, 88000 Kota Kinabalu, Sabah",
      phone: "088-204800",
      fax: "088-204900"
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-muted-foreground">
            We're here to answer any questions you might have about our services, locations, or partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={index}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{location.title}</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{location.address}</p>
                </div>
                
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Tel: {location.phone}</p>
                    {location.fax && <p className="text-sm">Fax: {location.fax}</p>}
                    {location.mobile && <p className="text-sm">Mobile: {location.mobile}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <CustomButton 
            size="lg" 
            onClick={() => window.location.href = '/contact'}
          >
            View Full Contact Details
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
