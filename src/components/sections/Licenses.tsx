
import { motion } from 'framer-motion';
import { Award, FileCheck } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Licenses = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="licenses" className="section bg-white">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
              Our Licenses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Authorized and Licensed</h2>
            <p className="text-muted-foreground mb-6">
              Alpha Orange is a leading Network Facilities Provider (NFP) licensed by the Malaysia Communications and Multimedia Commission (MCMC).
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Network Facilities Provider (NFP)</h3>
                  <p className="text-muted-foreground">Officially licensed to build, operate and maintain network facilities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 mt-1">
                  <FileCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">NFP (I) License No: NFP/I/2000/124</h3>
                  <p className="text-muted-foreground">Issued by the Malaysian Communications and Multimedia Commission.</p>
                </div>
              </div>
            </div>
            
            <CustomButton 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              Request More Information
            </CustomButton>
          </motion.div>
          
          <motion.div variants={fadeIn} className="rounded-xl overflow-hidden relative">
            <div className="aspect-video bg-orange-100 rounded-xl overflow-hidden relative shadow-neobrut group">
              <div className="absolute inset-0 bg-orange-200/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Licensed Provider</h3>
                  <p className="text-muted-foreground">
                    Network Facilities Provider [NFP (I)]<br />
                    License No: NFP/I/2000/124
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Licenses;
