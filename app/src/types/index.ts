export interface Project {
  name: string;
  tech: string[];
  description: string;
  image: string;
  github?: string;
  demo?: string;
  badge?: string;
}

export interface Experience {
  date: string;
  title: string;
  location: string;
  bullets: string[];
  highlights?: string[];
  isActive?: boolean;
}

export interface Skill {
  name: string;
  proficiency: number;
}
