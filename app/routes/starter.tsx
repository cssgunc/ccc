import React from "react";
import {
    SiVite,
    SiReact,
    SiTypescript,
    SiDocker,
    SiEslint,
    SiPrettier,
    SiTailwindcss,
    SiReactrouter,
} from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";

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
    const features = [
        {
            icon: SiVite,
            name: "Vite",
            description: "Lightning fast build tool and dev server",
            color: "#646CFF",
        },
        {
            icon: SiReact,
            name: "React 18",
            description: "Latest React with concurrent features",
            color: "#61DAFB",
        },
        {
            icon: SiTypescript,
            name: "TypeScript",
            description: "Type-safe JavaScript development",
            color: "#3178C6",
        },
        {
            icon: SiDocker,
            name: "Docker",
            description: "Containerized development and deployment",
            color: "#2496ED",
        },
        {
            icon: SiEslint,
            name: "ESLint",
            description: "Code linting and quality enforcement",
            color: "#4B32C3",
        },
        {
            icon: SiPrettier,
            name: "Prettier",
            description: "Automatic code formatting",
            color: "#F7B93E",
        },
        {
            icon: SiTailwindcss,
            name: "Tailwind CSS",
            description: "Utility-first CSS framework",
            color: "#06B6D4",
        },
        {
            icon: SiReactrouter,
            name: "React Router",
            description: "Modern routing for React applications",
            color: "#CA4245",
        },
        {
            icon: VscExtensions,
            name: "VS Code Extensions",
            description: "Pre-configured development extensions",
            color: "#007ACC",
        },
    ];

    return (
        <div
            style={{
                fontFamily: "system-ui, sans-serif",
                lineHeight: "1.6",
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Header Section */}
            <header style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "2rem",
                    }}
                >
                    <img
                        src="/cssglogo.svg"
                        alt="Starter Template Logo"
                        style={{
                            maxWidth: "300px",
                            width: "100%",
                            height: "auto",
                            display: "block",
                            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                        }}
                    />
                </div>
                <h1
                    style={{
                        fontSize: "3.5rem",
                        margin: "0 0 1rem 0",
                        color: "#065f46",
                        fontWeight: "800",
                    }}
                >
                    Vite + React Starter
                </h1>
                <p
                    style={{
                        fontSize: "1.3rem",
                        color: "#047857",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    A modern, production-ready template with all the tools you
                    need to build amazing React applications
                </p>
            </header>

            {/* Features Grid */}
            <section
                style={{
                    maxWidth: "1000px",
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "3rem",
                }}
            >
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={index}
                            style={{
                                background: "white",
                                padding: "2rem",
                                borderRadius: "12px",
                                boxShadow:
                                    "0 4px 6px rgba(5, 150, 105, 0.15), 0 1px 3px rgba(5, 150, 105, 0.1)",
                                border: "1px solid rgba(16, 185, 129, 0.2)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                cursor: "default",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 25px rgba(5, 150, 105, 0.25), 0 4px 10px rgba(5, 150, 105, 0.15)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 6px rgba(5, 150, 105, 0.15), 0 1px 3px rgba(5, 150, 105, 0.1)";
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "2.5rem",
                                    marginBottom: "1rem",
                                    color: feature.color,
                                }}
                            >
                                <IconComponent />
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                    color: "#065f46",
                                    margin: "0 0 0.5rem 0",
                                }}
                            >
                                {feature.name}
                            </h3>
                            <p
                                style={{
                                    color: "#047857",
                                    fontSize: "0.95rem",
                                    margin: "0",
                                    lineHeight: "1.5",
                                }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </section>

            {/* Getting Started */}
            <section
                style={{
                    textAlign: "center",
                    background: "white",
                    padding: "2.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 10px 40px rgba(5, 150, 105, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    maxWidth: "600px",
                    width: "100%",
                }}
            >
                <h2
                    style={{
                        fontSize: "2rem",
                        color: "#065f46",
                        marginBottom: "1rem",
                        fontWeight: "700",
                    }}
                >
                    Ready to Start Building?
                </h2>
                <p
                    style={{
                        color: "#047857",
                        fontSize: "1.1rem",
                        marginBottom: "2rem",
                        lineHeight: "1.6",
                    }}
                >
                    This template includes everything you need for modern React
                    development. Just clone, install, and start coding!
                </p>
                <div
                    style={{
                        background: "#f0fdf4",
                        padding: "1rem",
                        borderRadius: "8px",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        color: "#065f46",
                        border: "1px solid #bbf7d0",
                    }}
                >
                    npm install && npm run dev
                </div>
            </section>
        </div>
    );
}
