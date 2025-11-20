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

const SIGN_UP_BUTTON_COLORS = {
    base: "#499ED7",
    hover: "#499ED7",
} as const;

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
                    <div className="space-y-6 text-center">
                        <div className="relative left-1/2 flex w-screen -translate-x-1/2 flex-col items-center justify-center gap-6 bg-[rgba(73,158,215,0.75)] px-8 py-12 text-black">
                            <p className="text-[64px] font-semibold leading-tight">
                                Our Newsletter!
                            </p>
                        </div>
                        <div className="space-y-2 text-center text-[32px] font-medium text-black">
                            <p>
                                Stay in the loop with updates, events, and more!
                            </p>
                            <p>Delivered approximately quarterly!</p>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-center">
                        <div className="flex justify-center lg:h-full lg:items-center">
                            <div
                                className="w-full max-w-sm overflow-hidden rounded-[32px] border border-[#e4e4e4]"
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
                            className="w-full rounded-[32px] border border-[#e4e4e4] p-10"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="space-y-2">
                                <label
                                    className="block text-[20px] font-semibold text-black"
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
                                    className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus-visible:ring-2 focus-visible:ring-[#7fb8ff]"
                                />
                            </div>

                            <div className="mt-6 space-y-2">
                                <label
                                    className="block text-[20px] font-semibold text-black"
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
                                    className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus-visible:ring-2 focus-visible:ring-[#7fb8ff]"
                                />
                            </div>

                            <div className="mt-6 space-y-2">
                                <label
                                    className="block text-[20px] font-semibold text-black"
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
                                    className="h-14 w-full rounded-full border border-transparent bg-white px-6 text-base text-black outline-none transition focus:border-[#b0b0b0] focus-visible:ring-2 focus-visible:ring-[#7fb8ff]"
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
                                style={
                                    {
                                        "--btn-color":
                                            SIGN_UP_BUTTON_COLORS.base,
                                        "--btn-hover-color":
                                            SIGN_UP_BUTTON_COLORS.hover,
                                    } as React.CSSProperties
                                }
                                className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-[var(--btn-color)] text-[20px] font-semibold text-white transition-colors hover:bg-[var(--btn-hover-color)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="flex justify-center lg:h-full lg:items-center">
                            <div
                                className="w-full max-w-sm overflow-hidden rounded-[32px] border border-[#e4e4e4]"
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

                    <section className="mt-16 pt-10">
                        <h2 className="text-left text-[32px] font-medium text-black">
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
