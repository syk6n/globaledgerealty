export interface LeadFormState {
  name: string;
  email: string;
  phone: string;
  budget: string;
  interest: string;
}

export interface InvestmentStat {
  year: string;
  value: number;
}

export interface FounderProfile {
  name: string;
  title: string;
  experience: string;
  languages: string[];
  bio: string[];
  skills: string[];
}
