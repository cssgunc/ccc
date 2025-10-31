import React from "react";
import Header from "~/components/header";

export function meta() {
    return [
        { title: "Vite + React Starter Template" },
        {
            name: "description",
            content:
                "A modern React starter template built with Vite, featuring TypeScript, ESLint, Prettier, and more.",
        },
    ];
}

export default function Home() {
    return (
        <>
            <Header />
            <p>Campus & Community Coalition</p>
        </>
    );
}
