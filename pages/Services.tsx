import React, { useState } from 'react';
import { SERVICES } from '../constants';
import RequestForm from '../components/Forms/RequestForm';
import { X, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="pb-20">
      <div className="bg-brand-50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-dark-900 mb-4">Academic Research Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From topic selection to final defense, we guide you through every step of your academic journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-dark-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Check size={16} className="text-brand-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">🕒 {service.timeline}</span>
                  {service.priceStart && (
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                      From {service.priceStart}*
                    </span>
                  )}
                </div>
                
                <p className="text-xs text-gray-400 italic mb-6">*Pricing depends on level, length, and deadline.</p>

                
              </div>
              
              {/* Decorative side panel */}
              <div className="hidden md:block w-1/3 bg-gray-50 border-l border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-500/5 rotate-12 scale-150 transform origin-top-right"></div>
                <div className="absolute bottom-0 right-0 p-8 opacity-10 text-brand-900">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Request */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1"
            >
              <X size={24} />
            </button>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-2">Request Service</h3>
              <p className="text-gray-500 mb-6">You are requesting: <span className="font-semibold text-brand-600">{selectedService.title}</span></p>
              <RequestForm initialService={selectedService.title} isDetailed />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;