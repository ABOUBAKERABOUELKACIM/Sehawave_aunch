import React from 'react';
import { ArrowRight } from 'lucide-react';
import WaveBackground from './ui/WaveBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <WaveBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI-Powered <span className="text-teal-300">Healthcare</span> For Everyone
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              SehaWave connects patients with healthcare professionals through secure, 
              AI-enhanced telemedicine. Get accurate diagnoses, personalized care plans, 
              and continuous monitoring - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                <span className="flex items-center justify-center">
                  Join the Health Revolution
                  <ArrowRight size={18} className="ml-2" />
                </span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                For Healthcare Providers
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="animation-delay-1000 absolute w-12 h-12 bg-teal-400/30 rounded-full -top-6 -left-6 animate-blob"></div>
            <div className="animation-delay-2000 absolute w-24 h-24 bg-blue-400/30 rounded-full top-24 -right-12 animate-blob"></div>
            <div className="animation-delay-4000 absolute w-16 h-16 bg-teal-300/30 rounded-full bottom-8 left-8 animate-blob"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-teal-400/10 to-blue-500/10 p-1 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="bg-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Doctor with patient" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;