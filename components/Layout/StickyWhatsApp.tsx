import React from 'react';
import WhatsAppIcon from '../Icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../../constants';

const StickyWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Research%20Mate,%20I%20would%20like%20to%20enquire%20about%20your%20services.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105 animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </button>
  );
};

export default StickyWhatsApp;