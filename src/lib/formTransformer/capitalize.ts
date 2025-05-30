export function capitalize(str: string): string {
    const trimmed = str.trim();
    return trimmed
        ? trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase()
        : "";
}
