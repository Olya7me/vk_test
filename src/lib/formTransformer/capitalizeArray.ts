import { capitalize } from "./capitalize";

export function capitalizeArray(arr: unknown): string[] {
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
