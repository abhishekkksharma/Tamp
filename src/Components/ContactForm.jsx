import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('error');
      setResponseMessage('Please fill in all required fields.');
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'e8a68a35-5235-4129-9ed1-9b058febe900');
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setResponseMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage('Network error. Please check your connection and try again.');
    }
  };

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.278 1.139a9.6 9.6 0 004.836 4.836l1.139-2.278a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-blue-600 mt-1">
                <MailIcon />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Email</h4>
                <a href="mailto:kushalsaha229@gmail.com" className="text-gray-600 text-sm hover:text-blue-600">kushalsaha229@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-blue-600 mt-1">
                <PhoneIcon />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Phone</h4>
                <a href="tel:+917340733286" className="text-gray-600 text-sm hover:text-blue-600">(+91) 76578 05385</a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-blue-600 mt-1">
                <LocationIcon />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Address</h4>
                <p className="text-gray-600 text-sm">Chandigarh, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Aryan"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Singh"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="aryan@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="xxxxxxxxxx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {status === 'loading' && (
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  Sending message...
                </div>
              )}
              {status === 'success' && (
                <div className="text-green-600 text-sm">{responseMessage}</div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-sm">{responseMessage}</div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}