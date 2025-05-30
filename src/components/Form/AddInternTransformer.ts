import {
    capitalize,
    capitalizeArray,
    formatPhone,
} from "@/lib/formTransformer/index";
import type { FieldTransformers } from "@/lib/formTransformer";
import type { Intern } from "@/types/internTypes";

export const internTransformer: FieldTransformers<Intern> = {
    age: (v) => Number(v),
    yearOfStudy: (v) => (v ? Number(v) : undefined),
    expectedSalary: (v) => (v ? Number(v) : undefined),
    phone: formatPhone,
    skills: capitalizeArray,
    preferredTechStack: capitalizeArray,
    status: (v) => (typeof v === "string" ? v.trim().toLowerCase() : undefined),
    firstName: (v) => (typeof v === "string" ? capitalize(v) : ""),
    lastName: (v) => (typeof v === "string" ? capitalize(v) : ""),
    university: (v) => (typeof v === "string" ? capitalize(v) : undefined),
    faculty: (v) => (typeof v === "string" ? capitalize(v) : undefined),
    availability: (v) => (typeof v === "string" ? v : undefined),
};
