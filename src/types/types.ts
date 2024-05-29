import { User } from "firebase/auth";

export type JobsT = {
  id: number;
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

export type SignUpT = (email: string, password: string) => Promise<User | null>;
