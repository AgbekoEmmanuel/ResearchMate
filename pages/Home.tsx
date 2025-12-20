import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2, CheckSquare, Presentation, Clock, ShieldCheck, DollarSign, Award, ArrowRight } from 'lucide-react';
import RequestForm from '../components/Forms/RequestForm';
import { WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToForm = () => {
    const element = document.getElementById('home-quote-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Academic research setting"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
              Need Help With Your <span className="text-brand-600">Research</span> or <span className="text-brand-600">Assignments</span>?
            </h1>

            <p className="text-lg md:text-xl text-dark-700 max-w-2xl mb-10 leading-relaxed font-medium">
              Research Mate supports students at Diploma, Undergraduate, Masters, and PhD levels with quality, confidential, and on‑time academic assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-700 hover:shadow-brand-500/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Request Help Now <ArrowRight size={20} />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-dark-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-500 hover:text-brand-600 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="home-quote-form" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Tell Us About Your Project</h2>
            <p className="text-gray-600 text-lg">
              Share your project or assignment details and we'll agree on price and timeline with you during our WhatsApp conversation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-1">
            <div className="bg-brand-50/50 p-6 md:p-10 rounded-xl">
              <RequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Levels Banner */}
      <section className="bg-dark-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-300 font-medium">
            <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base border-b-2 border-brand-500 pb-1">We Support:</span>
            <span>Diploma</span>
            <span className="hidden md:block text-brand-500">•</span>
            <span>Undergraduate</span>
            <span className="hidden md:block text-brand-500">•</span>
            <span>Masters (MSc/MBA/MPhil)</span>
            <span className="hidden md:block text-brand-500">•</span>
            <span>PhD</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive academic support tailored to your specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BookOpen className="text-brand-600" size={32} />}
              title="Research Projects & Theses"
              description="Full support from topic selection to final report writing for your capstone or thesis."
              link="/services"
            />
            <ServiceCard
              icon={<BarChart2 className="text-brand-600" size={32} />}
              title="Data Analysis"
              description="Expert analysis using SPSS, STATA, Python, and Excel with clear interpretations."
              link="/services"
            />
            <ServiceCard
              icon={<CheckSquare className="text-brand-600" size={32} />}
              title="Class Assignments"
              description="Help with essays, take-home exams, problem sets, and continuous assessments."
              link="/assignments"
            />
            <ServiceCard
              icon={<Presentation className="text-brand-600" size={32} />}
              title="Presentation & Defense"
              description="Professional slide decks and coaching to help you defend your work with confidence."
              link="/services"
            />
            <ServiceCard
              icon={<ShieldCheck className="text-brand-600" size={32} />}
              title="Proofreading & Editing"
              description="Grammar checks, formatting to university guidelines, and plagiarism reduction."
              link="/services"
            />
            <ServiceCard
              icon={<Award className="text-brand-600" size={32} />}
              title="Custom Requests"
              description="Need something unique? Tell us exactly what you need and we'll handle it."
              link="/custom-request"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Students studying"
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">Why Choose Research Mate?</h2>
              <div className="space-y-6">
                <FeatureItem
                  icon={<ShieldCheck />}
                  title="Professional & Reliable"
                  text="We are a registered team of academic experts, not random freelancers."
                />
                <FeatureItem
                  icon={<Clock />}
                  title="On-Time Delivery"
                  text="We respect deadlines. Rush orders are handled with priority."
                />
                <FeatureItem
                  icon={<DollarSign />}
                  title="Student-Friendly Pricing"
                  text="Flexible payment plans (installments) to suit student budgets."
                />
                <FeatureItem
                  icon={<BookOpen />}
                  title="Ethical Support"
                  text="We provide guidance and support, ensuring you understand your work."
                />
              </div>
              <div className="mt-8">
                <Link to="/about" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-2">
                  Learn more about us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, link: string }> = ({ icon, title, description, link }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="mb-4 p-3 bg-brand-50 rounded-lg w-fit group-hover:bg-brand-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <Link to={link} className="text-brand-600 font-medium hover:text-brand-800 text-sm flex items-center gap-1">
      Learn more <ArrowRight size={16} />
    </Link>
  </div>
);

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="text-brand-600 mt-1 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-dark-900">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  </div>
);

export default Home;