export type Profile = {
  fullName: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};
