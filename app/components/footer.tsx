import { useEffect, useState } from "react";
import { Link } from "react-router";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail.svg";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 870);
        const handleResize = () => {
            const newIsMobile = window.innerWidth < 870;
            setIsMobile(newIsMobile);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const footerStyle = {
        width: "100%",
        backgroundColor: "#05326C",
        padding: isMobile ? "32px 20px" : "60px 80px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        flexWrap: "wrap",
        gap: "32px",
    } as const;

    const leftSection = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "white",
        fontSize: "1rem",
        lineHeight: "1.8",
        marginTop: "0px",
        justifyContent: "center",
    } as const;

    const headingStyle = {
        fontSize: "2rem",
        fontWeight: "400",
        marginBottom: "16px",
    } as const;

    const rightSection = {
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-end",
        gap: "32px",
        width: isMobile ? "100%" : "auto",
    } as const;

    const logoStyle = {
        width: "140px",
        height: "auto",
        objectFit: "contain",
    } as const;

    const iconRowStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
    } as const;

    const circleStyle = {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    } as const;

    const iconStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
    } as const;

    const navStyle = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: isMobile ? "nowrap" : "wrap",
        gap: isMobile ? "12px" : "40px",
        color: "white",
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: isMobile ? "center" : "flex-end",
        fontSize: "1rem",
        textTransform: "none",
    } as const;

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        opacity: 1,
    } as const;

    return (
        <footer style={footerStyle}>
            <div style={leftSection}>
                <h2 style={headingStyle}>Stay Connected!</h2>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <img
                        src={location}
                        alt="Location"
                        style={{ width: "32px", height: "32px" }}
                    />
                    <div>
                        <p style={{ margin: 0 }}>
                            128 E. Franklin Street, Suite 240,
                        </p>
                        <p style={{ margin: 0 }}>Chapel Hill, NC 27514</p>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <img
                        src={mail}
                        alt="Email"
                        style={{ width: "32px", height: "32px" }}
                    />
                    <a
                        href="mailto:ccc@downtownchapelhill.com"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            margin: 0,
                        }}
                    >
                        ccc@downtownchapelhill.com
                    </a>
                </div>
            </div>

            <div style={rightSection}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "32px",
                    }}
                >
                    <Link to="/">
                        <img
                            src="app/assets/logo.png"
                            alt="Logo"
                            style={logoStyle}
                        />
                    </Link>

                    <div style={iconRowStyle}>
                        <div style={circleStyle}>
                            <a
                                href="https://www.instagram.com/chapelhillcoalition/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="app/assets/instagram-logo.png"
                                    alt="Instagram"
                                    style={iconStyle}
                                />
                            </a>
                        </div>

                        <div style={circleStyle}>
                            <a
                                href="https://www.facebook.com/ChapelHillCCC"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="app/assets/facebook-logo.png"
                                    alt="Facebook"
                                    style={iconStyle}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <nav style={navStyle}>
                    <Link to="/people" style={linkStyle}>
                        Who We Are
                    </Link>
                    <Link to="/research" style={linkStyle}>
                        Resources
                    </Link>
                    <Link to="/data" style={linkStyle}>
                        Data
                    </Link>
                    <Link to="/newsletter" style={linkStyle}>
                        Our Newsletter
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
