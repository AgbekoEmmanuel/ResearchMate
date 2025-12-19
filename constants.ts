import { Testimonial, FaqItem, ServiceItem } from './types';

export const WHATSAPP_NUMBER = "233548475117";
export const WHATSAPP_DISPLAY = "+233 54 8475 117";
export const EMAIL_CONTACT = "support@researchmate.com"; // Placeholder

export const SERVICES: ServiceItem[] = [
  {
    id: 'topic-proposal',
    title: "Topic Selection & Proposal Writing",
    description: "Refining research topics, problem statements, and structuring professional proposals.",
    deliverables: ["Topic options", "Problem statement", "Full proposal document", "Other related services"],
    timeline: "Subject to discussion",
    priceStart: "GHS 350"
  },
  {
    id: 'literature-data',
    title: "Complete Research Project (Page 1 to References)",
    description: "Full project done from the title page through all chapters to the final references and appendices, based on your school’s format and requirements.",
    deliverables: ["Complete chapter development", "Data handling and analysis", "Formatting and structure", "Referencing and appendices"],
    timeline: "Subject to discussion",
    priceStart: "GHS 2,000"
  },
  {
    id: 'data-analysis',
    title: "Data Analysis (SPSS, STATA, Python)",
    description: "Quantitative and qualitative analysis including cleaning, coding, and interpretation.",
    deliverables: ["Analysis output", "Tables & Charts", "Interpretation report", "Other related services"],
    timeline: "Subject to discussion",
    priceStart: "GHS 500"
  },
  {
    id: 'report-writing',
    title: "Report Writing & Formatting",
    description: "Structuring full theses or reports according to specific university guidelines.",
    deliverables: ["Full formatted document", "Table of Contents", "References", "Other related services"],
    timeline: "Subject to discussion",
    priceStart: "GHS 500"
  },
  {
    id: 'proofreading',
    title: "Proofreading & Plagiarism Checks",
    description: "Grammar, clarity, structure checks and similarity index reduction.",
    deliverables: ["Tracked changes document", "Clean copy", "Plagiarism report", "Other related services"],
    timeline: "Subject to discussion",
    priceStart: "GHS 200"
  },
  {
    id: 'defense',
    title: "Presentations & Defense Prep",
    description: "Slide creation and coaching for proposal or final defense.",
    deliverables: ["PowerPoint Slides", "Speaking notes", "Mock Q&A session"],
    timeline: "Subject to discussion",
    priceStart: "GHS 200"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Research Mate helped me structure my Master's thesis proposal perfectly. My supervisor approved it on the first review!",
    level: "MPhil Economics",
    location: "Legon, Ghana",
    service: "Research Project"
  },
  {
    id: 2,
    text: "I was struggling with STATA for my data analysis. The team analyzed my data and explained the results clearly so I could defend it.",
    level: "Undergraduate",
    location: "Kumasi, Ghana",
    service: "Data Analysis"
  },
  {
    id: 3,
    text: "Fast turnaround on my assignment. I had a tight deadline and they delivered quality work 24 hours before submission.",
    level: "MBA Student",
    location: "Accra, Ghana",
    service: "Class Assignment"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What levels of students do you support?",
    answer: "We support students at all tertiary levels: Diploma, Undergraduate, Masters, and PhD students across various disciplines."
  },
  {
    question: "Can you handle tight deadlines?",
    answer: "Yes, we specialize in time-sensitive requests. Please mention your deadline clearly in the form. Rush orders may attract a small premium."
  },
  {
    question: "Do you write full theses from scratch?",
    answer: "We provide comprehensive guidance, drafting assistance, analysis, and editing to support your work. We adhere to ethical guidelines, ensuring you understand the work and can defend it personally."
  },
  {
    question: "How do I submit my project details?",
    answer: "You can use the 'Request Help' form on this website or chat with us directly on WhatsApp to share your instructions and files."
  },
  {
    question: "What tools do you use for data analysis?",
    answer: "We use industry-standard tools including SPSS, STATA, R, Python, and Excel for quantitative analysis, and NVivo for qualitative analysis."
  },
  {
    question: "Will my information be kept confidential?",
    answer: "Absolutely. We have a strict privacy policy. Your personal details and academic work are never shared with third parties."
  }
];
