type ArchivedNewsletterCardProps = {
    title: string;
    date: string;
    href?: string;
};

export default function ArchivedNewsletterCard({
    title,
    date,
    href,
}: ArchivedNewsletterCardProps) {
    const ArrowIcon = (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div
            className="flex h-[197px] w-[366px] flex-col gap-2 rounded-[16px] border-4 border-[#6A9F26] bg-white p-5"
            style={{
                fontFamily: '"Figtree", sans-serif',
            }}
        >
            <div>
                <p className="text-2xl font-normal text-[#1c1c1c]">{title}</p>
                <p className="text-base font-normal text-[#000000]">{date}</p>
            </div>
            <div className="mt-auto flex justify-end pt-2">
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-[#6cb33f] px-5 py-2 text-[20px] font-semibold text-white transition hover:bg-[#5a9a33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c75ff]"
                    >
                        View
                        <span aria-hidden="true" className="text-white">
                            {ArrowIcon}
                        </span>
                    </a>
                ) : (
                    <span className="inline-flex items-center gap-3 rounded-full bg-[#c4c4c4] px-5 py-2 text-[20px] font-semibold text-white">
                        View
                        <span aria-hidden="true" className="text-white">
                            {ArrowIcon}
                        </span>
                    </span>
                )}
            </div>
        </div>
    );
}
