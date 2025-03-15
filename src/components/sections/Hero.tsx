
import { ArrowDownCircle } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Hero = () => {
  const scrollToContent = () => {
    const whatWeDoSection = document.getElementById('what-we-do');
    if (whatWeDoSection) {
      whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-20 w-64 h-64 rounded-full bg-orange-300/10 animate-float"></div>
        <div className="absolute bottom-1/4 left-20 w-48 h-48 rounded-full bg-orange-200/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-orange-100/30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container px-4 md:px-6 space-y-12 z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-down">
          <div className="mb-6 inline-block p-2 bg-orange-100 rounded-full">
            <div className="bg-white rounded-full px-4 py-1.5 text-sm font-medium text-orange-600">
              Preferred Telecommunication Infrastructure Provider
            </div>
          </div>
          
          <h1 className="font-bold tracking-tighter mb-6">
            <span className="hero-text-gradient">ALPHA ORANGE</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Provider of shared telecommunication infrastructure for rent by Telecommunication Operators
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" onClick={scrollToContent}>
              FIND OUT MORE
            </CustomButton>
            <CustomButton size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
              CONTACT US
            </CustomButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ArrowDownCircle className="h-10 w-10 text-primary cursor-pointer" onClick={scrollToContent} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
