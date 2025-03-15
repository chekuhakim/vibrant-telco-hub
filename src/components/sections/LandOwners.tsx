
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const LandOwners = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const benefits = [
    "Steady long-term rental income",
    "Minimal impact on land use",
    "Professional management and maintenance",
    "Contribute to improved telecommunications access",
    "Flexible leasing terms"
  ];

  return (
    <section id="landowners" className="section bg-orange-50">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn} className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-4 mb-6">
                <h3 className="text-2xl font-semibold mb-4">Benefits for Landowners</h3>
                
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <p className="text-sm italic">
                  "The places we build or develop new tower sites are decided by our customers' needs and requirements."
                </p>
              </div>
              
              <CustomButton 
                size="lg"
                className="w-full"
                onClick={() => window.location.href = '/contact'}
              >
                SUBMIT YOUR INQUIRY
                <ExternalLink className="h-4 w-4 ml-1" />
              </CustomButton>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
              Landowner Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Do you own land or buildings?</h2>
            <p className="text-muted-foreground mb-6">
              Alpha Orange looks forward to working with landowners interested in leasing their land for the development of communications sites.
            </p>
            
            <div className="mb-6">
              <p className="mb-4">
                We welcome inquiries from any individual, private or corporate landowners. Our team evaluates each submission based on our customers' network requirements.
              </p>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Ideal locations include elevated areas, strategic urban locations, and areas with telecommunications coverage needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandOwners;
