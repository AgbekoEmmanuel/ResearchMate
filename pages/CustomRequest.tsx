import React from 'react';
import RequestForm from '../components/Forms/RequestForm';
import { Sparkles } from 'lucide-react';
import { ServiceCategory } from '../types';

const CustomRequest: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
          <Sparkles size={32} />
        </div>
        <h1 className="text-3xl font-bold text-dark-900 mb-2">Custom Academic Request</h1>
        <p className="text-gray-600">Don't see your specific need listed? Tell us exactly what you require, and we will tailor a solution for you.</p>
      </div>

      <RequestForm initialService={ServiceCategory.Custom} isDetailed />
    </div>
  );
};

export default CustomRequest;