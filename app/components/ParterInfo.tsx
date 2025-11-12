import "./ParterInfo.css";
import React from "react";

export default function PartnerInfo({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <>
            <div className="info-box">
                <div className="info-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
