import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-luxury-black/95 backdrop-blur-md border-b border-gold-700/30 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-white">
              GLOBAL <span className="text-gold-500">EDGE REALTY</span>
            </h1>
            <span className="text-[10px] tracking-[0.3em] text-gold-200 uppercase">Premium Real Estate</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide">
            <a href="#why-invest" className="text-gray-300 hover:text-gold-400 transition-colors">WHY DUBAI</a>
            <a href="#founder" className="text-gray-300 hover:text-gold-400 transition-colors">THE FOUNDER</a>
            <a href="#contact" className="px-6 py-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 uppercase font-medium">
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gold-400">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-gold-700/30 animate-fade-in">
          <div className="flex flex-col items-center py-8 space-y-6">
            <a href="#why-invest" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 hover:text-gold-400">WHY DUBAI</a>
            <a href="#founder" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 hover:text-gold-400">THE FOUNDER</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gold-500 font-bold">CONTACT US</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;