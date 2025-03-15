
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Careers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="careers" className="section bg-orange-50">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <div className="inline-block px-3 py-1 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
              Join Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Opportunities</h2>
            <p className="text-muted-foreground mb-6">
              Alpha Orange is constantly looking for motivated, talented and experienced people to join our diverse team of professionals.
            </p>
            
            <div className="space-y-6 mb-8">
              <p>
                We value diversity and honor your integrity and dedication. If you're looking for a new challenge with a company that appreciates your unique skills and perspective, we'd love to hear from you.
              </p>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Submit your resume to:</p>
                  <a 
                    href="mailto:hr@alphaorange.com.my" 
                    className="text-primary hover:underline"
                  >
                    hr@alphaorange.com.my
                  </a>
                </div>
              </div>
            </div>
            
            <CustomButton 
              onClick={() => window.location.href = '/careers'}
            >
              View Open Positions
            </CustomButton>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="aspect-square max-w-md mx-auto bg-white rounded-xl shadow-sm p-8 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-100 rounded-full"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-orange-200 rounded-full"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <Users className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-2">Join Our Diverse Team</h3>
                <p className="text-muted-foreground mb-6">
                  We're building a talented team to deliver exceptional telecommunication infrastructure services across Malaysia.
                </p>
                
                <CustomButton 
                  variant="outline"
                  onClick={() => window.location.href = '/careers'}
                >
                  Explore Opportunities
                </CustomButton>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Careers;
