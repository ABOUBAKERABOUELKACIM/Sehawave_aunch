import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(''); // For success/error messages

  // Type the event parameter correctly for a form submission
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Now TypeScript knows 'preventDefault' exists on this event type
  setIsSubmitting(true);
  setSubmitMessage('');

  if (!termsAccepted) {
    setSubmitMessage('Please accept the Terms & Conditions and Privacy Policy.');
    setIsSubmitting(false);
    return;
  }

  // Basic validation (add more as needed)
  if (!firstName || !lastName || !email || !userType) {
      setSubmitMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
  }

  const formData = {
    firstName,
    lastName,
    email,
    userType,
  };

  try {
    // Replace with your actual Render backend API endpoint
    const response = await fetch('https://api.sehawave.com/join-beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // It's good practice to type your expected API response as well,
    // but for now, we'll assume it's an object with a potential 'message' property.
    const result: { message?: string; data?: any } = await response.json();


    if (response.ok) {
      setSubmitMessage(result.message || 'Thanks for joining the beta! We will be in touch.');
      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setUserType('');
      setTermsAccepted(false);
    } else {
      setSubmitMessage(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    setSubmitMessage('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="join-beta" className="py-20 bg-gradient-to-br from-teal-500 to-blue-600 relative overflow-hidden">
      {/* Background elements (keep as is) */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full min-w-[1000px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the Health Revolution
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be among the first to experience the future of healthcare.
            Join our beta program and help shape the future of SehaWave.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
            {/* Link the handleSubmit function to the form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring focus:ring-teal-300/50 text-white placeholder:text-white/60"
                    placeholder="Enter your first name"
                    value={firstName} // Bind value to state
                    onChange={(e) => setFirstName(e.target.value)} // Update state on change
                    required // Add basic HTML5 validation
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring focus:ring-teal-300/50 text-white placeholder:text-white/60"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring focus:ring-teal-300/50 text-white placeholder:text-white/60"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="userType">
                  I am a
                </label>
                <select
                  id="userType"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring focus:ring-teal-300/50 text-white"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="" className="text-gray-800">Select your role</option>
                  <option value="patient" className="text-gray-800">Patient</option>
                  <option value="doctor" className="text-gray-800">Doctor</option>
                  <option value="healthcare-provider" className="text-gray-800">Healthcare Provider</option>
                  <option value="researcher" className="text-gray-800">Medical Researcher</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-white/30 rounded"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white/90">
                  I agree to the <a href="#" className="text-white underline">Terms & Conditions</a> and <a href="#" className="text-white underline">Privacy Policy</a>
                </label>
              </div>

              {submitMessage && (
                <p className={`text-sm ${submitMessage.startsWith('Thanks') ? 'text-green-300' : 'text-red-300'}`}>
                  {submitMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-teal-50 transition duration-300 flex items-center justify-center"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? 'Submitting...' : 'Join the Beta Program'}
                {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;