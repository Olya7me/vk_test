export interface Intern {
    id: number;
    firstName: string;
    lastName: string;
    age: number | string;
    email: string;
    phone: string;
    university?: string;
    faculty?: string;
    yearOfStudy?: number;
    skills?: string[];
    github?: string;
    preferredTechStack?: string[];
    availability?: string;
    expectedSalary?: number | string;
    status?: string;
}
