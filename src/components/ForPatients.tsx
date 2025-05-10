import React from 'react';
import { HeartPulse, UserCheck, Newspaper } from 'lucide-react';

const ForPatients = () => {
  return (
    <section id="for-patients" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Putting Patients First
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SehaWave empowers you to take control of your health with personalized care, 
            convenient access to medical professionals, and comprehensive health tracking.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Background decorative elements */}
          <div className="hidden lg:block absolute -left-12 top-1/3 h-64 w-64 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="hidden lg:block absolute -right-12 bottom-1/3 h-48 w-48 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-blue-50 rounded-full">
                  <HeartPulse className="h-10 w-10 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Health Monitoring
              </h3>
              <p className="text-gray-600 text-center">
                Track your vital signs and health metrics through connected devices. 
                Receive personalized insights and recommendations to improve your wellbeing.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Heart Rate</span>
                  <span className="font-medium text-gray-800">Continuously</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Blood Pressure</span>
                  <span className="font-medium text-gray-800">Daily</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Sleep Quality</span>
                  <span className="font-medium text-gray-800">Nightly</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-teal-50 rounded-full">
                  <UserCheck className="h-10 w-10 text-teal-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Virtual Consultations
              </h3>
              <p className="text-gray-600 text-center">
                Connect with healthcare professionals from home through high-quality video calls.
                Get expert medical advice without the hassle of travel or waiting rooms.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Wait Times</span>
                  <span className="font-medium text-gray-800">Under 15 min</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Specialists</span>
                  <span className="font-medium text-gray-800">40+ Specialties</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Availability</span>
                  <span className="font-medium text-gray-800">24/7</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-green-50 rounded-full">
                  <Newspaper className="h-10 w-10 text-green-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Health Records
              </h3>
              <p className="text-gray-600 text-center">
                Access your complete medical history in one secure location. 
                Share records with providers instantly and maintain control over your data.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Data Security</span>
                  <span className="font-medium text-gray-800">Military-grade</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Access Control</span>
                  <span className="font-medium text-gray-800">Granular</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Integrations</span>
                  <span className="font-medium text-gray-800">All major EMRs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPatients;