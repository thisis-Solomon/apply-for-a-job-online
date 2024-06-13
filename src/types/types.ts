import { User } from "firebase/auth";

export type JobsT = {
  id: number | string;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type JobPost = {
  company: string;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  closeDate: string;
  jobDescription: string;
  website: string;
  company_logo: string;
  emailforappliction: string;
  salary: number;
};

export type SignUpT = (email: string, password: string) => Promise<User | null>;
