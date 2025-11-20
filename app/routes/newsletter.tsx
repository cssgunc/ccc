import React from "react";
import Header from "~/components/header";
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
    const [message, setMessage] = React.useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [hasInteracted, setHasInteracted] = React.useState(false);

    const fieldsComplete = areRequiredFilled(formValues);
    const emailValid = isEmailValid(formValues.email);
    const isSubmitDisabled = !fieldsComplete || !emailValid || isSubmitted;

    const validationError = !fieldsComplete
        ? "All required fields are not filled."
        : !emailValid
          ? "Invalid email format."
          : null;

    const shouldShowError =
        hasInteracted && !message && Boolean(validationError);

    const handleChange =
        (field: keyof typeof INITIAL_FORM) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (isSubmitted) return;
            setHasInteracted(true);

            setFormValues((prev) => ({
                ...prev,
                [field]: event.target.value,
            }));
        };

    const handleBlur = (field: keyof typeof INITIAL_FORM) => () => {
        if (isSubmitted) return;

        setFormValues((prev) => ({
            ...prev,
            [field]:
                field === "email"
                    ? normalizeEmail(prev.email)
                    : prev[field].trim(),
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const normalizedForm = {
            firstName: formValues.firstName.trim(),
            lastName: formValues.lastName.trim(),
            email: normalizeEmail(formValues.email),
        };

        try {
            const res = await fetch("/api/add-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(normalizedForm),
            });

            const data = await res.json();

            if (data.success) {
                setMessage("Thanks for signing up!");
                setIsSubmitted(true);
            } else {
                setMessage("Error signing up. Please try again.");
            }
        } catch {
            setMessage("Server error. Please try again.");
        }
    };

    return (
        <main>
            <Header />
            <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-10 bg-[#ffffff]">
                <div className="w-full max-w-xl rounded-[40px] bg-[#f2f2f2] p-10">
                    <h1 className="text-center text-3xl font-semibold text-black">
                        Sign Up for the Newsletter!
                    </h1>
                    <p className="mt-3 text-center text-base text-[#333333]">
                        Receive updates, events, and more! Our newsletters are
                        sent out quarterly.
                    </p>

                    <form
                        className="mt-8 space-y-6"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#2e2e2e]">
                                First Name
                            </label>
                            <input
                                type="text"
                                value={formValues.firstName}
                                onChange={handleChange("firstName")}
                                onBlur={handleBlur("firstName")}
                                disabled={isSubmitted}
                                className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#2e2e2e]">
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={formValues.lastName}
                                onChange={handleChange("lastName")}
                                onBlur={handleBlur("lastName")}
                                disabled={isSubmitted}
                                className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#2e2e2e]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formValues.email}
                                onChange={handleChange("email")}
                                onBlur={handleBlur("email")}
                                disabled={isSubmitted}
                                className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>

                        <div className="min-h-5 text-center">
                            {shouldShowError && validationError && (
                                <p className="text-sm font-medium text-[#b00000]">
                                    {validationError}
                                </p>
                            )}
                            {message && (
                                <p className="text-sm font-medium text-[#1b5e20]">
                                    {message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitDisabled}
                            className="mx-auto flex h-14 w-full items-center justify-center rounded-full bg-white text-base font-medium text-[#2e2e2e] transition hover:bg-[#f7f7f7] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
