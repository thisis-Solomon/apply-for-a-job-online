import { User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";

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
  id?: string;
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
  createdAt: FieldValue;
};

export type SignUpT = (email: string, password: string) => Promise<User | null>;
