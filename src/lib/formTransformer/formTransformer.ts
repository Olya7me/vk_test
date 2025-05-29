import type { Intern } from "@/types/internTypes";

type FieldTransformers<T> = {
    [K in keyof T]?: (value: unknown) => T[K];
};

function capitalize(str: string): string {
    const trimmed = str.trim();
    return trimmed
        ? trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase()
        : "";
}

function capitalizeArray(arr: unknown): string[] {
    if (typeof arr === "string") {
        return arr
            .split(",")
            .map((s) => s.trim())
            .map(capitalize);
    } else if (Array.isArray(arr)) {
        return arr
            .filter((s) => typeof s === "string")
            .map((s) => capitalize(s as string));
    }
    return [];
}

export function transformFormData<T>(
    data: Partial<Record<keyof T, unknown>>,
    transformers: FieldTransformers<T>
): T {
    const transformed = {} as T;

    for (const key in data) {
        const k = key as keyof T;
        const transformer = transformers[k];

        transformed[k] = transformer
            ? transformer(data[k])
            : (data[k] as T[typeof k]);
    }

    return transformed;
}
function formatPhone(phone: unknown): string {
    if (typeof phone !== "string") return "";

    const digits = phone.replace(/\D/g, "");

    let normalized = digits;

    if (digits.length === 10) {
        normalized = "7" + digits;
    } else if (digits.length === 11 && digits.startsWith("8")) {
        normalized = "7" + digits.slice(1);
    } else if (digits.length !== 11 || !digits.startsWith("7")) {
        return "";
    }

    return normalized.replace(
        /^7(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "+7 $1 $2 $3 $4"
    );
}

export const internTransformers: FieldTransformers<Intern> = {
    age: (v: unknown) => Number(v),
    yearOfStudy: (v: unknown) => (v ? Number(v) : undefined),
    expectedSalary: (v: unknown) => (v ? Number(v) : undefined),
    phone: formatPhone,

    skills: capitalizeArray,
    preferredTechStack: capitalizeArray,

    status: (v: unknown): string | undefined =>
        typeof v === "string" ? v.trim().toLowerCase() : undefined,

    firstName: (v: unknown): string =>
        typeof v === "string" ? capitalize(v) : "",

    lastName: (v: unknown): string =>
        typeof v === "string" ? capitalize(v) : "",

    university: (v: unknown): string | undefined =>
        typeof v === "string" ? capitalize(v) : undefined,

    faculty: (v: unknown): string | undefined =>
        typeof v === "string" ? capitalize(v) : undefined,

    availability: (v: unknown): string | undefined =>
        typeof v === "string" ? v : undefined,
};
