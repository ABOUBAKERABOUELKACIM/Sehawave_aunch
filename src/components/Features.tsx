import React from 'react';
import { Smartphone, Shield, Clock, Users, Brain, HeartPulse } from 'lucide-react';

const featureItems = [
  {
    icon: <Smartphone className="h-10 w-10 text-teal-500" />,
    title: "Seamless Telemedicine",
    description: "Connect with healthcare providers from the comfort of your home. High-quality video consultations with end-to-end encryption for privacy."
  },
  {
    icon: <Shield className="h-10 w-10 text-teal-500" />,
    title: "Data Security",
    description: "Your health data is encrypted with enterprise-grade security. You control who can access your information with granular permissions."
  },
  {
    icon: <Brain className="h-10 w-10 text-teal-500" />,
    title: "AI-Assisted Diagnosis",
    description: "Our advanced AI analyzes symptoms and medical history to assist physicians in making accurate diagnoses faster."
  },
  {
    icon: <Clock className="h-10 w-10 text-teal-500" />,
    title: "24/7 Availability",
    description: "Access healthcare professionals around the clock. Get medical advice whenever you need it, without waiting for appointments."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-teal-500" />,
    title: "Continuous Monitoring",
    description: "Connect your wearable devices to track vital signs and receive AI-powered insights and alerts for proactive healthcare."
  },
  {
    icon: <Users className="h-10 w-10 text-teal-500" />,
    title: "Care Team Collaboration",
    description: "All your healthcare providers can collaborate on one platform, ensuring coordinated care and better outcomes."
  }
];

const Features = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Healthcare Reimagined
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SehaWave combines cutting-edge AI technology with human expertise to deliver 
            personalized healthcare experiences that are accessible, affordable, and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 bg-teal-50 p-3 rounded-full inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;