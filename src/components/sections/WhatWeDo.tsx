
import { CellTower, Radio, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import CustomButton from '../ui/CustomButton';

// Adding framer-motion dependency
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const WhatWeDo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="what-we-do" className="section bg-white">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            Our Core Business
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-muted-foreground">
            Alpha Orange Sdn Bhd is a leading telecommunication infrastructure provider in Malaysia, building and leasing towers to telecommunication providers based on a tower-sharing concept.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={fadeIn}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <CellTower className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Infrastructure Provider</h3>
            <p className="text-muted-foreground">
              We build and maintain high-quality telecommunication towers across Malaysia, ensuring reliable coverage for operators.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Share2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Tower Sharing</h3>
            <p className="text-muted-foreground">
              Our tower-sharing concept allows multiple operators to utilize the same infrastructure, reducing costs and environmental impact.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Radio className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Trusted Partner</h3>
            <p className="text-muted-foreground">
              We're entrusted by respected telecommunication providers such as Umobile, Digi, Celcom, Webe and Maxis.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <CustomButton variant="outline" size="lg" onClick={() => window.location.href = '/#services'}>
            Explore Our Services
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
