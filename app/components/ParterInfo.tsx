import "./ParterInfo.css";
import React from "react";

export default function PartnerInfo({
    title,
    text,
    role,
}: {
    title: string;
    text: string;
    role: string;
}) {
    return (
        <>
            <div className="container">
                <p className="director-name">{title}</p>
                <p className="director-bio">{text}</p>
                <div className="details">
                    <p className="director-role">{role}</p>
                </div>
            </div>
        </>
    );
}
