import React from 'react';
import RequestForm from '../components/Forms/RequestForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY, EMAIL_CONTACT, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-brand-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="opacity-90 max-w-xl mx-auto">Ready to get started? Fill out the form below or reach out to us directly.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp / Call</h3>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-brand-600 font-medium hover:underline block">{WHATSAPP_DISPLAY}</a>
            <p className="text-xs text-gray-400 mt-2">Available 8am - 10pm</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <a href={`mailto:${EMAIL_CONTACT}`} className="text-brand-600 font-medium hover:underline block">{EMAIL_CONTACT}</a>
            <p className="text-xs text-gray-400 mt-2">Response within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 font-medium">Accra, Ghana</p>
            <p className="text-xs text-gray-400 mt-2">Primarily Online Service</p>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <h2 className="text-2xl font-bold text-dark-900 mb-6">Send us a Message</h2>
             <RequestForm isDetailed />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-dark-900 mb-4">Response Time</h3>
              <p className="text-gray-600 text-sm mb-4">
                We typically respond to inquiries within 1-3 hours during business days. For urgent requests, please use the WhatsApp button after submitting your form.
              </p>
              <h3 className="font-bold text-dark-900 mb-4">Payment Methods</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• MTN Mobile Money</p>
                <p>• Bank Transfer</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;