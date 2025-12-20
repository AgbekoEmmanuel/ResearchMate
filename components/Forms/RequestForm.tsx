import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import WhatsAppIcon from '../../components/Icons/WhatsAppIcon';
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
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "29a8f671-0a27-4c8e-87af-e5b8f1cdce97",
          subject: `New Request: ${formData.serviceType} - ${formData.fullName}`,
          from_name: "Research Mate Website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
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
          <WhatsAppIcon size={18} />
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Academic Level <span className="text-red-500">*</span></label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type <span className="text-red-500">*</span></label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Deadline (Optional)</label>
          <input
            type="date"
            name="deadline"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Project Details / Instructions <span className="text-red-500">*</span></label>
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


      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-lg"
      >
        {status === 'submitting' ? 'Sending Request...' : 'Send Request'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        We respect your privacy. Your academic work remains confidential.
      </p>
    </form>
  );
};

export default RequestForm;