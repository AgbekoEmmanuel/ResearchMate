import React from 'react';
import { CheckCircle } from 'lucide-react';
import WhatsAppIcon from '../components/Icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-dark-900 mb-6">Your Partner in Academic Excellence</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Research Mate was founded to bridge the gap between academic pressure and student success. We understand the stress of deadlines, complex data analysis, and rigid formatting guidelines. Our mission is to provide ethical, high-quality guidance that empowers you to complete your degree with confidence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-dark-900">Who We Work With</h2>
            <ul className="space-y-4">
              {[
                "Undergraduate students needing guidance on final year projects.",
                "Masters (MBA/MSc/MPhil) students struggling with data analysis.",
                "PhD candidates requiring review and editing support.",
                "Working professionals taking evening/weekend courses."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <CheckCircle className="text-brand-500 shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Team working"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark-900 mb-12">Our Process</h2>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-100"></div>

            <div className="space-y-12">
              <TimelineItem
                number="1"
                title="Submit Your Request"
                text="Fill out our form or chat on WhatsApp with your project details, files, and deadline."
                align="left"
              />
              <TimelineItem
                number="2"
                title="Send Request"
                text="We review your requirements and provide a fair quote and delivery timeline."
                align="right"
              />
              <TimelineItem
                number="3"
                title="Confirmation"
                text="Make a part payment (Mobile Money or Bank) to start the work."
                align="left"
              />
              <TimelineItem
                number="4"
                title="Drafts & Updates"
                text="Receive progress updates and drafts for your review and feedback."
                align="right"
              />
              <TimelineItem
                number="5"
                title="Final Delivery"
                text="Receive the final polished work. We offer after-support for any minor corrections."
                align="left"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors inline-flex items-center gap-2"
            >
              <WhatsAppIcon size={20} />
              Start The Process Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem: React.FC<{ number: string, title: string, text: string, align: 'left' | 'right' }> = ({ number, title, text, align }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-5/12 text-center md:text-left">
        <div className={`p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm ${align === 'right' ? 'md:text-right' : ''}`}>
          <h3 className="text-xl font-bold text-brand-600 mb-2">{title}</h3>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
      <div className="my-4 md:my-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-500 text-white font-bold text-lg z-10 border-4 border-white shadow-md">
        {number}
      </div>
      <div className="md:w-5/12"></div>
    </div>
  );
};

export default About;