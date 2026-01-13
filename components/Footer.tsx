import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif text-white mb-2">GLOBAL <span className="text-gold-500">EDGE REALTY</span></h2>
        <p className="text-gray-500 text-sm mb-8">Premium Real Estate Solutions | Al Mankhool, Burjuman, Dubai</p>
        
        <div className="flex justify-center gap-8 text-gray-400 mb-8">
          <a 
            href="https://www.instagram.com/globaledge_realty/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/globaledgerealty/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/global-edge-realty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
        
        <div className="flex justify-center gap-6 text-gray-500 text-xs">
           <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>

        <p className="text-gray-700 text-xs mt-8">© {new Date().getFullYear()} Global Edge Realty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;