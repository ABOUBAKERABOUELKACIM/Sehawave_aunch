import React from 'react';
import { ZoomIn, ZapIcon, Target, Scan } from 'lucide-react';

const AICancerDetection = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-1 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Cancer Detection" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay highlighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10"></div>
                
                {/* Detection areas */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 border-4 border-teal-500 rounded-full animate-pulse">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full"></div>
                </div>
                
                <div className="absolute top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 h-12 w-12 border-4 border-red-500 rounded-full animate-pulse animation-delay-1000">
                  <div className="absolute inset-0 bg-red-500/20 rounded-full"></div>
                </div>
                
                {/* Data lines */}
                <svg className="absolute inset-0 w-full h-full z-10 opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(13, 148, 136, 0.6)" strokeWidth="0.5" fill="none" />
                  <path d="M0,60 Q35,40 70,60 T100,60" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.5" fill="none" />
                  <path d="M0,40 Q45,60 75,40 T100,40" stroke="rgba(13, 148, 136, 0.5)" strokeWidth="0.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AI Cancer Detection & Segmentation
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Our advanced AI algorithms can detect and segment cancerous regions with remarkable 
              precision, enabling earlier diagnosis and more targeted treatment plans. This technology 
              has shown a 94% accuracy rate in clinical trials, potentially saving countless lives 
              through early intervention.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Scan className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Precise Detection</h3>
                  <p className="text-gray-600">
                    Multi-layered neural networks analyze medical imagery to identify suspicious areas 
                    that might be missed by the human eye.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Advanced Segmentation</h3>
                  <p className="text-gray-600">
                    Our AI precisely outlines the boundaries of tumors, helping surgeons plan 
                    more effective and less invasive procedures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <ZapIcon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Rapid Processing</h3>
                  <p className="text-gray-600">
                    Results delivered in minutes instead of days, dramatically reducing wait times 
                    and enabling faster treatment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICancerDetection;