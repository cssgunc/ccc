import styles from "./PartnerInfo.module.css";
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
            <div className={styles.container}>
                <p className={styles.directorName}>{title}</p>
                <p className={styles.directorBio}>{text}</p>
                <div className={styles.details}>
                    <p className={styles.directorRole}>{role}</p>
                </div>
            </div>
        </>
    );
}
