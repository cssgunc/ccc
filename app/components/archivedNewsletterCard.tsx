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
    const card = (
        <div className="flex h-32 w-full flex-col justify-between rounded-3xl bg-[#efefef] px-6 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
            <p className="text-lg font-semibold text-[#1c1c1c]">{title}</p>
            <p className="text-sm text-[#4a4a4a]">{date}</p>
        </div>
    );

    if (!href) {
        return card;
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c75ff]"
        >
            {card}
        </a>
    );
}
