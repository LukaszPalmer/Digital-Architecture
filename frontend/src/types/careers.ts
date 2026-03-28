// src/types/careers.ts

export interface JobPosition {
    id: string;
    ref: string;
    title: string;
    subtitle: string;
    location: string;
    type: string;
    department: string;
    tagline: string;
    stack: string[];
}

export interface CompanyValue {
    id: string;
    title: string;
    description: string;
}

export interface Benefit {
    id: string;
    category: string;
    title: string;
    description: string;
}

export interface HiringStep {
    step: string;
    title: string;
    description: string;
    duration: string;
}
