import React from "react";

interface PlanCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

const BLUE_COLOR = "text-[#499ED7]";
const BORDER_COLOR = "border-[#499ED7]";

export default function PlanCard({
    title = "Placeholder Plan Title",
    summary = "Placeholder description for the plan card component.",
}: PlanCardProps) {
    return (
        <div
            className={
                "mx-auto px-16 py-10 rounded-3xl bg-white border-4 " +
                BORDER_COLOR
            }
        >
            <div className="flex flex-col items-center">
                <h2 className={"text-4xl font-bold pb-3.5 " + BLUE_COLOR}>
                    {title}
                </h2>
                <p
                    className={
                        "text-2xl font-medium leading-9 max-w-5xl " + BLUE_COLOR
                    }
                >
                    {summary}
                </p>
            </div>
        </div>
    );
}
