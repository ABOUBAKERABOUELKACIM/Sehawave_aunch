import React from 'react';
import { LineChart, ClipboardCheck, Stethoscope } from 'lucide-react';

const ForDoctors = () => {
  return (
    <section id="for-doctors" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empowering Healthcare Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SehaWave provides physicians and healthcare teams with powerful tools to enhance 
            diagnostic accuracy, streamline workflow, and improve patient outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
              <ClipboardCheck className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Streamlined Workflow
              </h3>
              <p className="text-gray-600 mb-4">
                Reduce administrative burden with automated documentation, intelligent scheduling, 
                and seamless integration with your existing EMR systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                  AI-assisted clinical note generation
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                  Smart patient prioritization
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                  Secure messaging and coordination
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Stethoscope className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Enhanced Clinical Decision-Making
              </h3>
              <p className="text-gray-600 mb-4">
                Access AI-powered insights and recommendations based on the latest medical research 
                and patient-specific data to improve diagnostic accuracy.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Real-time clinical decision support
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Evidence-based treatment recommendations
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Drug interaction and allergy alerts
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <LineChart className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Continuous Patient Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Monitor patient health remotely through connected devices and receive alerts 
                when intervention may be needed, enabling proactive care.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Remote vital sign monitoring
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Personalized risk assessment
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Early intervention opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDoctors;