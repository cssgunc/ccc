interface ReportCardProps {
    title?: string;
    summary?: string;
    buttonText?: string;
    onClick?: () => void;
}

const GREEN_BORDER = "border-[#6A9F26]";

export default function ReportCard({
    title = "Report Title",
    summary = "Placeholder description for the report card.",
    buttonText = "View Report",
    onClick,
}: ReportCardProps) {
    return (
        <article
            className={`rounded-2xl bg-white pt-6 pr-11 pb-5 pl-8 border-[3px] ${GREEN_BORDER} flex flex-col justify-between`}
        >
            <div>
                <h3 className={`text-[28px] font-semibold mb-2`}>{title}</h3>
                <p className={"text-xl"}>{summary}</p>
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onClick}
                    className={`inline-flex items-center px-5 py-2 text-white text-xl font-medium rounded-full 
                    bg-[#6A9F26] border-2 border-white 
                    hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#6A9F26]`}
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
