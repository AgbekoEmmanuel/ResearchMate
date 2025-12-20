export enum AcademicLevel {
  Diploma = "Diploma",
  Undergraduate = "Undergraduate",
  Masters = "Masters",
  PhD = "PhD",
  Other = "Other"
}

export enum ServiceCategory {
  ResearchProject = "Research Project & Thesis",
  ClassAssignment = "Class Assignment",
  DataAnalysis = "Data Analysis",
  Proofreading = "Proofreading & Editing",
  Presentation = "Presentation & Defense",
  Custom = "Custom Request",
  Other = "Other"
}

export interface Testimonial {
  id: number;
  text: string;
  level: string;
  location: string;
  service: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  priceStart?: string;
}

export interface FormState {
  fullName: string;
  whatsapp: string;
  email: string;
  level: string;
  institution: string;
  serviceType: string;
  deadline: string;
  description: string;

}