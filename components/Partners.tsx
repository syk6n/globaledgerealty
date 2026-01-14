import React from 'react';

const partners = [
  { name: 'Emaar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Emaar_logo.svg/1280px-Emaar_logo.svg.png' },
  { name: 'DLF', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg' },
  { name: 'Damac', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Damac_logo.svg/3840px-Damac_logo.svg.png' },
  { name: 'Sobha', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Sobha_%28company%29.svg/3840px-Sobha_%28company%29.svg.png' },
  { name: 'Nakheel', logo: 'https://zahabihomes.com/wp-content/uploads/2024/06/Nakheel_3.png' },
  { name: 'Godrej', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1280px-Godrej_Logo.svg.png' },
  { name: 'Danube', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Danube_Properties.png/960px-Danube_Properties.png' },
  { name: 'Meraas', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Meraas-logo.svg' },
  { name: 'Prestige', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Prestige_Group.png' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-black border-b border-white/5 overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .partner-marquee {
            animation: scroll 40s linear infinite;
          }
          .partner-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans">Official Channel Partners</p>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        <div className="flex w-max partner-marquee">
          {/* Double the list for infinite seamless scrolling */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex items-center justify-center mx-8 md:mx-12 min-w-[120px] md:min-w-[160px] group opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 filter brightness-0 invert group-hover:invert-0 group-hover:brightness-100 group-hover:sepia group-hover:hue-rotate-5 group-hover:saturate-200"
                // The filter logic: 
                // brightness-0 invert -> Makes the image White (for black bgs)
                // On Hover: Remove filters or apply specific gold tinting if possible, 
                // but resetting to original colored logo on hover is a nice touch, 
                // or keeping it white/bright is fine.
                // For this specific design, we want white by default.
                style={{ 
                   // Special handling for JPGs with white backgrounds to blend into black
                   mixBlendMode: partner.logo.endsWith('.jpg') ? 'screen' : 'normal'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;