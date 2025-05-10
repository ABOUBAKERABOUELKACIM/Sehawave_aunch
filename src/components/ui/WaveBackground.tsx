import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-500"></div>
      
      {/* Animated wave overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          className="absolute bottom-0 left-0 w-full min-w-[1000px]"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave-slow"
          ></path>
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-full min-w-[1000px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="#fff" 
            fillOpacity="0.8" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute h-3 w-3 rounded-full bg-white/30 top-1/4 left-1/4 animate-float"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white/20 top-1/3 left-1/2 animate-float animation-delay-1000"></div>
        <div className="absolute h-4 w-4 rounded-full bg-white/30 top-1/2 left-1/3 animate-float animation-delay-2000"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white/20 top-2/3 left-3/4 animate-float animation-delay-3000"></div>
        <div className="absolute h-3 w-3 rounded-full bg-white/30 top-3/4 left-1/4 animate-float animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default WaveBackground;