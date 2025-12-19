import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-dark-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">Have a question? We're here to help.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-12 bg-brand-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-brand-900 mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Chat with our team directly.</p>
        <button 
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
          className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-brand-100 transition-colors"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};

const Accordion: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-dark-900">{question}</span>
        {isOpen ? <Minus size={20} className="text-brand-500" /> : <Plus size={20} className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;