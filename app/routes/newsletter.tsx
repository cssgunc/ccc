import React from "react";
import Header from "~/components/header";
import ArchivedNewsletterCard from "~/components/archivedNewsletterCard";
import leftImage from "~/assets/newsletter-left.jpg";
import rightImage from "~/assets/newsletter-right.png";
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

const archivedNewsletters = [
    {
        title: "Fall Newsletter",
        date: "9/24/25",
        href: "https://us18.campaign-archive.com/?u=f8b446b5dbe8e2b40d152d757&id=8769a11d67",
    },
    {
        title: "Sept QM Recap",
        date: "9/23/24",
        href: "https://us18.campaign-archive.com/?u=f8b446b5dbe8e2b40d152d757&id=702d6143ad",
    },
    {
        title: "Announcement & Survey",
        date: "7/1/24",
        href: "https://us18.campaign-archive.com/?u=f8b446b5dbe8e2b40d152d757&id=c9052854da",
    },
    {
        title: "Quarterly: April 2024",
        date: "4/25/24",
        href: "https://us18.campaign-archive.com/?u=f8b446b5dbe8e2b40d152d757&id=ce8077e4f5",
    },
    {
        title: "Spring Newsletter 1",
        date: "3/25/24",
        href: "https://us18.campaign-archive.com/?u=f8b446b5dbe8e2b40d152d757&id=00dc3fd63b",
    },
] as const;

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
        <main className="bg-white">
            <Header />
            <section className="px-4 py-12 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-black sm:text-5xl">
                            Our Newsletter
                        </h1>
                        <p className="mt-4 text-base text-[#444444] sm:text-lg">
                            Stay in the loop with updates, events, and more.
                            Delivered approximately quarterly!
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                        <div className="flex justify-center">
                            <div
                                className="w-full max-w-sm overflow-hidden rounded-[36px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                                style={{ aspectRatio: "1 / 1" }}
                            >
                                <img
                                    src={leftImage}
                                    alt="Community yard sign encouraging neighbors to be kind and mindful"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <form
                            className="rounded-[40px] bg-[#f2f2f2] p-8 shadow-[0_25px_55px_rgba(0,0,0,0.12)]"
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

                            <div className="mt-6 space-y-2">
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

                            <div className="mt-6 space-y-2">
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

                            <div
                                className="mt-4 min-h-[1.25rem]"
                                aria-live="polite"
                            >
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
                                className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-[#3c8df2] text-base font-semibold text-white transition hover:bg-[#2f7eda] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="flex justify-center">
                            <div
                                className="w-full max-w-sm overflow-hidden rounded-[36px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                                style={{ aspectRatio: "1 / 1" }}
                            >
                                <img
                                    src={rightImage}
                                    alt="Coalition outreach table with newsletter material"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <section className="mt-16 border-t border-[#e4e4e4] pt-10">
                        <h2 className="text-center text-3xl font-semibold text-black">
                            Archived Newsletters
                        </h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {archivedNewsletters.map((item) => (
                                <ArchivedNewsletterCard
                                    key={item.title}
                                    title={item.title}
                                    date={item.date}
                                    href={item.href || undefined}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}
