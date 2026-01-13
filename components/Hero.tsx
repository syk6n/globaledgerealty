import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.locationscout.net/2022/12/dubai-skyline-at-al-jaddaf-walkway-united-arab-emirates-mhg3.webp?h=1400&q=80" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-luxury-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-20">
        <div className="mb-6 inline-block px-4 py-1 border border-gold-500/50 rounded-full bg-black/40 backdrop-blur-sm">
          <span className="text-gold-300 text-xs md:text-sm tracking-widest uppercase font-sans">
            Your Gateway to Luxury Living
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Invest in the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200">
            Future of Dubai
          </span>
        </h1>
        
        <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          From the Palm Jumeirah to Downtown, discover exclusive off-plan opportunities and high-yield assets tailored for the discerning investor.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-gold-500 text-black font-sans font-bold uppercase tracking-wider overflow-hidden hover:bg-gold-400 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#founder" 
            className="px-8 py-4 border border-white/20 text-white font-sans uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Meet The Expert
          </a>
        </div>
      </div>
      
      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-luxury-black to-transparent"></div>
    </div>
  );
};

export default Hero;