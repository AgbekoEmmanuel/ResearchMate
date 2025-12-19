import React from 'react';
import RequestForm from '../components/Forms/RequestForm';
import { Clock, Lock, FileText, CheckCircle } from 'lucide-react';
import { ServiceCategory } from '../types';

const Assignments: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Class Assignments & Coursework Support</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Struggling with a tough assignment or tight deadline? We provide expert guidance for essays, problem sets, quizzes, and group work across all major disciplines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="font-bold text-xl mb-4 text-dark-900">What We Cover</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> Individual Essays & Reports</li>
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> Group Work Contributions</li>
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> Take-home Tests</li>
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> PowerPoint Presentations</li>
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> Coding & IT Projects</li>
                <li className="flex gap-2"><CheckCircle size={18} className="text-brand-500" /> Math & Statistics Sets</li>
              </ul>
            </div>

            <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
              <h3 className="font-bold text-xl mb-4 text-brand-900">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {['Business', 'Economics', 'Finance', 'Statistics', 'Nursing', 'Education', 'Social Sciences', 'Law', 'Computer Science', 'Others'].map(tag => (
                  <span key={tag} className="bg-white text-brand-800 text-xs font-semibold px-2.5 py-1 rounded border border-brand-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <div className="bg-blue-100 p-2 rounded text-blue-600"><Lock size={20}/></div>
                 <div>
                   <h4 className="font-bold text-sm">100% Confidential</h4>
                   <p className="text-xs text-gray-500">Your identity and institution details are never shared.</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="bg-green-100 p-2 rounded text-green-600"><Clock size={20}/></div>
                 <div>
                   <h4 className="font-bold text-sm">On-Time Delivery</h4>
                   <p className="text-xs text-gray-500">We respect submission deadlines strictly.</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="bg-purple-100 p-2 rounded text-purple-600"><FileText size={20}/></div>
                 <div>
                   <h4 className="font-bold text-sm">Plagiarism Free</h4>
                   <p className="text-xs text-gray-500">Original work with proper citations (APA, MLA, Harvard).</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-dark-900">Submit Assignment Details</h2>
                <p className="text-sm text-gray-500">Upload your brief and let us handle the rest.</p>
              </div>
              <RequestForm 
                initialService={ServiceCategory.ClassAssignment} 
                isDetailed 
                className="shadow-none border-0" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;