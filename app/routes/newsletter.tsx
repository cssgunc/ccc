import React from "react";
import {
    areRequiredFilled,
    isEmailValid,
    normalizeEmail,
} from "~/helpers/validation";

const INITIAL_FORM = {
    firstName: "",
    lastName: "",
    email: "",
};

export default function Newsletter() {
    const [formValues, setFormValues] =
        React.useState<typeof INITIAL_FORM>(INITIAL_FORM);
    const [hasInteracted, setHasInteracted] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState<string | null>(
        null
    );

    const fieldsComplete = React.useMemo(
        () => areRequiredFilled(formValues),
        [formValues]
    );

    const emailValid = React.useMemo(
        () => isEmailValid(formValues.email),
        [formValues.email]
    );

    const validationError = !fieldsComplete
        ? "All required fields are not filled."
        : !emailValid
          ? "Invalid email format."
          : null;

    const shouldShowError = hasInteracted && Boolean(validationError);
    const isSubmitDisabled = !fieldsComplete || !emailValid;

    const handleChange =
        (field: keyof typeof INITIAL_FORM) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;

            setHasInteracted(true);
            setSuccessMessage(null);
            setFormValues((prev) => ({
                ...prev,
                [field]: value,
            }));
        };

    const handleBlur = (field: keyof typeof INITIAL_FORM) => () => {
        setFormValues((prev) => ({
            ...prev,
            [field]:
                field === "email"
                    ? normalizeEmail(prev.email)
                    : prev[field].trim(),
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHasInteracted(true);

        if (validationError) {
            setSuccessMessage(null);
            setFormValues((prev) => ({
                ...prev,
                email: normalizeEmail(prev.email),
                firstName: prev.firstName.trim(),
                lastName: prev.lastName.trim(),
            }));
            return;
        }

        const normalizedForm = {
            firstName: formValues.firstName.trim(),
            lastName: formValues.lastName.trim(),
            email: normalizeEmail(formValues.email),
        };

        setFormValues(normalizedForm);
        setSuccessMessage("Thanks for signing up!");
    };

    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-10 bg-[#f2f2f2]">
            <div className="w-full max-w-xl rounded-[40px] bg-[#d9d9d9] p-10 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <h1 className="text-center text-3xl font-semibold text-black">
                    Sign Up for the Newsletter!
                </h1>
                <p className="mt-3 text-center text-base text-[#333333]">
                    Receive updates, events, and more! Our newsletters are sent
                    out quarterly
                </p>

                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-[#2e2e2e]"
                            htmlFor="newsletter-first-name"
                        >
                            First Name
                        </label>
                        <input
                            id="newsletter-first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={formValues.firstName}
                            onChange={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}
                            required
                            className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-[#2e2e2e]"
                            htmlFor="newsletter-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            id="newsletter-last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={formValues.lastName}
                            onChange={handleChange("lastName")}
                            onBlur={handleBlur("lastName")}
                            required
                            className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-[#2e2e2e]"
                            htmlFor="newsletter-email"
                        >
                            Email Address
                        </label>
                        <input
                            id="newsletter-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formValues.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            required
                            inputMode="email"
                            className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                        />
                    </div>

                    <div className="min-h-[1.25rem]" aria-live="polite">
                        {shouldShowError && validationError ? (
                            <p className="text-center text-sm font-medium text-[#b00000]">
                                {validationError}
                            </p>
                        ) : successMessage ? (
                            <p className="text-center text-sm font-medium text-[#1b5e20]">
                                {successMessage}
                            </p>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitDisabled}
                        className="mx-auto flex h-14 w-full items-center justify-center rounded-full bg-white text-base font-medium text-[#2e2e2e] transition hover:bg-[#f7f7f7] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
