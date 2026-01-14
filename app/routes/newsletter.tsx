import React from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
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

//defining the structure of each newsletter object
type Newsletter = {
    id: string;
    title: string;
    date: string;
    href: string;
};

export default function Newsletter() {
    const [formValues, setFormValues] =
        React.useState<typeof INITIAL_FORM>(INITIAL_FORM);
    const [message, setMessage] = React.useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [hasInteracted, setHasInteracted] = React.useState(false);

    //state for archived newsletters:
    //array that stores the archived newsletters
    const [newsletters, setNewsletters] = React.useState<Newsletter[]>([]);

    //state to track if the newsletters are being loaded
    const [isLoadingNewsletters, setIsLoadingNewsletters] =
        React.useState(true);

    //error state
    const [newsletterError, setNewsletterError] = React.useState<string | null>(
        null
    );

    //useEffect fetch and render newsletters on page load
    React.useEffect(() => {
        //async function to fetch newsletters
        const fetchNewsletters = async () => {
            try {
                //making the get request defined in server.js
                const response = await fetch("/api/newsletters");

                //parsing the response
                const data = await response.json();

                //checking if request was successful
                if (data.success) {
                    //updating newsletters state
                    setNewsletters(data.data);

                    //clears past errors
                    setNewsletterError(null);
                } else {
                    setNewsletterError("Failed to load newsletters");
                }
            } catch (error) {
                console.error("Error fetching newsletters:", error);

                setNewsletterError(
                    "Unable to load newsletters. Please try again later."
                );
            } finally {
                setIsLoadingNewsletters(false);
            }
        };

        fetchNewsletters();
    }, []); //dependency array ensure this only rerenders on page load

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
            <header
                className="mt-20 mb-8 text-center"
                style={{ backgroundColor: "#96d47c", padding: "2rem 0" }}
            >
                <h1 className="text-5xl tracking-tight">Our Newsletter!</h1>
            </header>
            <section className="mx-auto max-w-6xl px-4 pb-16">
                <div className="mx-auto max-w-6xl">
                    <div className="space-y-6 text-center">
                        <div className="space-y-2 text-center text-black">
                            <p className="text-lg leading-relaxed mb-2">
                                Stay in the loop with updates, events, and more!
                            </p>
                            <p className="text-lg leading-relaxed">
                                Delivered approximately quarterly!
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-center">
                        <div className="hidden md:flex justify-center lg:h-full lg:items-center">
                            <div
                                className="w-full max-w-md overflow-hidden rounded-2xl border border-[#e4e4e4]"
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
                            className="w-full rounded-2xl border border-[#e4e4e4] p-10 flex flex-col gap-6"
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

                            <div className="space-y-2">
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

                            <div className="space-y-2">
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
                                ) : message ? (
                                    <p className="text-center text-sm font-medium text-[#1b5e20]">
                                        {message}
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
                                className=" flex h-14 w-full items-center justify-center rounded-full bg-[var(--btn-color)] text-[20px] font-semibold text-white transition-colors hover:bg-[var(--btn-hover-color)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="hidden md:flex justify-center lg:h-full lg:items-center">
                            <div
                                className="w-full max-w-md overflow-hidden rounded-2xl border border-[#e4e4e4]"
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

                        {isLoadingNewsletters ? (
                            <div className="mt-10 text-center text-lg text-gray-600">
                                Loading newsletters...
                            </div>
                        ) : newsletterError ? (
                            <div className="mt-10 text-center text-lg text-red-600">
                                {newsletterError}
                            </div>
                        ) : newsletters.length > 0 ? (
                            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {newsletters.map((newsletter) => (
                                    <ArchivedNewsletterCard
                                        key={newsletter.id}
                                        title={newsletter.title}
                                        date={newsletter.date}
                                        href={newsletter.href}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="mt-10 text-center text-lg text-gray-600">
                                No newsletters available at this time.
                            </div>
                        )}
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    );
}
