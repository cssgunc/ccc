import React from "react";
import StrategicPlan from "app/assets/icons/strategic-plan.svg";

interface PlanCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

const BLUE_COLOR = "text-[#499ED7]";

export default function PlanCard({
    title = "Placeholder Plan Title",
    summary = "Placeholder description for the plan card component.",
}: PlanCardProps) {
    return (
        <div className="mx-auto max-w-6xl rounded-4xl pt-10 pb-10 px-10">
            <div>
                <div>
                    <h2
                        className={`text-5xl font-bold mb-6 ${BLUE_COLOR} flex`}
                    >
                        {title}
                        <img
                            src={StrategicPlan}
                            alt="Strategic Plan Icon"
                            className="w-15 h-15 ml-5 -translate-y-2.5"
                        />
                    </h2>

                    <p className="text-[20px] font-medium leading-11">
                        {summary}
                    </p>
                </div>
            </div>
        </div>
    );
}
