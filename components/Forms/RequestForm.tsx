import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { AcademicLevel, ServiceCategory, FormState } from '../../types';
import { WHATSAPP_NUMBER } from '../../constants';

interface RequestFormProps {
  initialService?: string;
  isDetailed?: boolean;
  className?: string;
}

const RequestForm: React.FC<RequestFormProps> = ({ initialService, isDetailed = false, className = "" }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    whatsapp: '',
    email: '',
    level: AcademicLevel.Undergraduate,
    institution: '',
    serviceType: initialService || ServiceCategory.ResearchProject,
    deadline: '',
    description: '',
    files: null
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: e.target.files });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate backend call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const sendToWhatsApp = () => {
    const text = `*New Request from Research Mate Website*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Level:* ${formData.level}%0A` +
      `*Service:* ${formData.serviceType}%0A` +
      `*Deadline:* ${formData.deadline}%0A` +
      `*Details:* ${formData.description}%0A` +
      `*Institution:* ${formData.institution}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  if (status === 'success') {
    return (
      <div className={`bg-green-50 p-8 rounded-xl border border-green-200 text-center ${className}`}>
        <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-green-700 mb-6">
          Thank you, {formData.fullName}. We have received your details. A member of our team will review it and contact you shortly.
        </p>
        <button 
          onClick={sendToWhatsApp}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
        >
          <Send size={18} />
          Follow up on WhatsApp
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 ${className}`}>
      {status === 'error' && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
          <AlertCircle size={20} />
          <span>Something went wrong. Please try again or contact us directly.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            type="text" 
            name="fullName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
          <input 
            type="tel" 
            name="whatsapp"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+233..."
          />
        </div>
      </div>

      {isDetailed && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
          <input 
            type="email" 
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Academic Level *</label>
          <select 
            name="level"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
            value={formData.level}
            onChange={handleChange}
          >
            {Object.values(AcademicLevel).map(lvl => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Institution/University</label>
          <input 
            type="text" 
            name="institution"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.institution}
            onChange={handleChange}
            placeholder="e.g. UG, KNUST, UPSA"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
          <select 
            name="serviceType"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
            value={formData.serviceType}
            onChange={handleChange}
          >
            {Object.values(ServiceCategory).map(srv => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deadline *</label>
          <input 
            type="date" 
            name="deadline"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Project Details / Instructions *</label>
        <textarea 
          name="description"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please describe what you need help with. Include word count, specific analysis tools, or topic details."
        ></textarea>
      </div>

      {isDetailed && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Files (Instructions, Rubric, Data)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
            <input 
              type="file" 
              name="files"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-brand-50 file:text-brand-700
                hover:file:bg-brand-100
              "
            />
            <p className="text-xs text-gray-500 mt-2">PDF, DOCX, CSV, XLSX (Max 5MB)</p>
          </div>
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-lg"
      >
        {status === 'submitting' ? 'Sending Request...' : 'Get a Quote'}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        We respect your privacy. Your academic work remains confidential.
      </p>
    </form>
  );
};

export default RequestForm;