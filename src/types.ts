export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image?: string;
    status?: 'Completed' | 'In Progress';
    period?: string;
    role?: string;
    problem?: string;
    architecture?: string[];
    impact?: string[];
    longDescription?: string;
    demoGif?: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    location?: string;
}

export interface Award {
    id: string;
    title: string;
    organization: string;
    date: string;
    description: string;
    icon?: string;
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}
