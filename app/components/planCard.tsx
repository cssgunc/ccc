import React from "react";

interface PlanCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

export default function PlanCard({
    title = "Placeholder Plan Title",
    summary = "Placeholder description for the plan card component.",
    buttonText = "View Plan",
    onClick,
}: PlanCardProps) {
    return (
        <div className="mx-auto p-8 rounded-2xl bg-gray-100 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 pr-0 sm:pr-6 mb-4 sm:mb-0">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                        {title}
                    </h2>
                    <p className="text-gray-600 max-w-lg">{summary}</p>
                </div>
                <div className="flex-shrink-0">
                    <button
                        type="button"
                        onClick={onClick}
                        className="inline-flex items-center px-6 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-label={buttonText}
                    >
                        <span className="mr-3">{buttonText}</span>
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
            </div>
        </div>
    );
}
