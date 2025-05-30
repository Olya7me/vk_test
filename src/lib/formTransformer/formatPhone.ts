export function formatPhone(phone: unknown): string {
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
