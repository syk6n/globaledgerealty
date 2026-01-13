import React from 'react';
import { Star, Award, Briefcase, Languages, Linkedin } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-black relative overflow-hidden scroll-mt-28">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03]">
        <span className="text-[200px] font-serif font-bold text-white leading-none">EXPERT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/3 relative group">
            <div className="aspect-[3/4] relative z-10 border border-gold-500/50 p-2 bg-luxury-black">
              <img 
                src="https://lh3.googleusercontent.com/d/1WnWwlDFLZAWpGDuhquvb3Brer1PwHqZV=w1000?authuser=1" 
                alt="Shaukat Ali - Founder of Global Edge Realty" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Golden frame corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500 -mt-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500 -mb-1 -mr-1"></div>
            </div>
            
            {/* Background block for depth */}
            <div className="absolute top-6 left-6 w-full h-full border border-gray-800 bg-gray-900/50 -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold-500"></div>
              <span className="text-gold-400 font-sans tracking-widest uppercase text-sm">The Visionary</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">Shaukat Ali</h2>
            <div className="flex items-center gap-3 mb-8">
                <p className="text-xl text-gray-400 font-serif italic">Real Estate Broker & Luxury Sales Expert</p>
                <a 
                    href="https://www.linkedin.com/in/shaukat-ali-87178839b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gold-500 hover:text-white transition-colors p-1.5 border border-gold-500/30 rounded-full hover:bg-gold-500/10"
                    aria-label="Connect on LinkedIn"
                >
                    <Linkedin size={18} />
                </a>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">
              With over <span className="text-gold-400 font-semibold">35 years of excellence</span> in the Middle East market, 
              Shaukat Ali brings a legacy of trust and expertise to Global Edge Realty. A seasoned veteran in luxury sales, 
              his career spans iconic brands like <span className="text-white">Mercedes (Gargash Enterprises)</span> and <span className="text-white">Toyota (Saud Bhawan)</span>, 
              translating the precision of automotive luxury into the world of premium real estate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="flex items-center gap-2 text-gold-500 font-serif text-xl mb-4">
                  <Briefcase size={20} /> Work Legacy
                </h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                    <span><strong>Al-Burraq Real Estate:</strong> Strategic investment advice & luxury property solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                    <span><strong>Gargash Enterprises (Mercedes):</strong> 17 Years of consistent top-tier sales performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                    <span><strong>Saud Bhawan Oman (Toyota Sales):</strong> 14 Years of sales excellence in the automotive sector.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-gold-500 font-serif text-xl mb-4">
                  <Award size={20} /> Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Market Analysis', 'Luxury Negotiation', 'Client Relationship', 'Investment Strategy', 'Pipeline Management'].map((skill) => (
                    <span key={skill} className="px-3 py-1 border border-gray-700 text-xs text-gray-300 uppercase tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>

                 <h4 className="flex items-center gap-2 text-gold-500 font-serif text-xl mt-8 mb-4">
                  <Languages size={20} /> Languages
                </h4>
                <div className="text-gray-400 space-x-4">
                  <span>English</span>
                  <span className="text-gold-700">•</span>
                  <span>Arabic</span>
                  <span className="text-gold-700">•</span>
                  <span>Hindi</span>
                  <span className="text-gold-700">•</span>
                  <span>Urdu</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gold-900/10 border-l-2 border-gold-500">
               <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold-500 fill-current" />)}
               </div>
               <p className="text-gray-300 italic">
                 "My mission is to guide Indian and International investors through the Dubai market with the same transparency and premium service I delivered in the luxury automotive sector for three decades."
               </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;