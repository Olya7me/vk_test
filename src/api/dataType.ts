export interface Intern {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    university: string;
    faculty: string;
    yearOfStudy?: number;
    email?: string;
    phone?: string;
    status?: string;
    skills?: string[];
    github?: string;
    preferredTechStack?: string[];
    availability?: string;
    expectedSalary?: number | string;
}
