import { capitalize } from "./capitalize";

export function capitalizeArray(arr: unknown): string[] | undefined {
    if (typeof arr === "string") {
        const result = arr
            .split(",")
            .map((s) => s.trim())
            .map(capitalize)
            .filter(Boolean);
        return result.length > 0 ? result : undefined;
    } else if (Array.isArray(arr)) {
        const result = arr
            .filter((s) => typeof s === "string")
            .map((s) => capitalize(s as string))
            .filter(Boolean);
        return result.length > 0 ? result : undefined;
    }
    return undefined;
}
