import StrategicPlan from "app/assets/icons/strategic-plan.svg";
import planPdf from "app/assets/CCC-Strategic-Plan-2024-27-1.pdf";

interface PlanCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

const BLUE_COLOR = "text-[#499ED7]";

const openPDF = (url: string) => {
    window.open(url, "_blank");
};

export default function PlanCard({
    title = "Placeholder Plan Title",
    summary = "Placeholder description for the plan card component.",
}: PlanCardProps) {
    return (
        <div className="mx-auto max-w-6xl rounded-4xl pt-5 pb-10">
            <h2 className={`text-5xl font-bold mb-2 ${BLUE_COLOR} flex`}>
                {title}
                <img
                    src={StrategicPlan}
                    alt="Strategic Plan Icon"
                    className="w-15 h-15 ml-5 -translate-y-2.5"
                />
            </h2>

            <p className="text-[20px] font-medium leading-11">{summary}</p>
            <button
                onClick={() => {
                    openPDF(planPdf);
                }}
                className="font-bold bg-[#499dd6] text-white mt-5 px-6 py-3 rounded-full hover:bg-blue-700 transition w-40"
            >
                View Plan{" "}
            </button>
        </div>
    );
}
