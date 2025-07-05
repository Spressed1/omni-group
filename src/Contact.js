import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => (
  <section className="w-full max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
    <div className="bg-white/10 rounded-2xl shadow-lg p-10 w-full text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Contact</h2>
      <div className="flex flex-col gap-4 items-center mb-6">
        <div className="flex items-center gap-3 text-lg text-gray-200">
          <FaEnvelope className="text-yellow-400" />
          <span>contact@omnigroup.com</span>
        </div>
        <div className="flex items-center gap-3 text-lg text-gray-200">
          <FaPhone className="text-yellow-400" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-lg text-gray-200">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>123 Main St, Pristina, Kosovo</span>
        </div>
      </div>
      <p className="text-gray-400 text-sm">(Replace with your real contact details)</p>
    </div>
  </section>
);

export default Contact; 