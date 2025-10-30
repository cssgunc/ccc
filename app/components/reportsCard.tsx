import React from "react";

interface ReportCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

export default function ReportCard({
    title = "Report Title",
    summary = "Placeholder description for the report card.",
    buttonText = "View Report",
    onClick,
}: ReportCardProps) {
    return (
        <article className="rounded-2xl bg-gray-100 p-6 shadow-md flex flex-col justify-between h-full">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600">{summary}</p>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={onClick}
                    className="inline-flex items-center px-5 py-2 bg-gray-600 text-white text-sm font-medium rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label={buttonText}
                >
                    <span className="mr-2">{buttonText}</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </div>
        </article>
    );
}
