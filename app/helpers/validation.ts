const DISALLOWED_EMAIL_CHARS = /[\s()[\];:<>\\/"'`~!#$%^&*|+=?{}]/;
const BASIC_EMAIL_SHAPE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function normalizeEmail(value: string): string {
    return (value || "").trim().toLowerCase();
}

export function isEmailValid(value: string): boolean {
    const email = normalizeEmail(value);

    if (!email) return false;
    if (DISALLOWED_EMAIL_CHARS.test(email)) return false;
    if (!BASIC_EMAIL_SHAPE.test(email)) return false;

    return true;
}

export function areRequiredFilled(obj: Record<string, string>): boolean {
    return Object.values(obj).every((v) => (v || "").trim().length > 0);
}
