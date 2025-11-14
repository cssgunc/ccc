import { Link } from "react-router";

export default function Footer() {
    const footerStyle = {
        width: "100%",
        backgroundColor: "#A8A7A7",
        padding: "60px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxSizing: "border-box",
    } as const;

    const leftSection = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "white",
        fontSize: "0.95rem",
        lineHeight: "1.6",
        marginTop: "40px",
    } as const;

    const headingStyle = {
        fontSize: "1.5rem",
        fontWeight: "500",
        marginBottom: "8px",
    } as const;

    const rightSection = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "32px",
    } as const;

    const logoStyle = {
        width: "140px",
        height: "auto",
        objectFit: "contain",
    } as const;

    const iconRowStyle = {
        display: "flex",
        gap: "20px",
    } as const;

    const circleStyle = {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.3)",
    } as const;

    const navStyle = {
        display: "flex",
        gap: "40px",
        color: "white",
        fontSize: "0.95rem",
        textTransform: "lowercase",
    } as const;

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        opacity: 0.9,
    } as const;

    return (
        <footer style={footerStyle}>
            <div style={leftSection}>
                <h2 style={headingStyle}>Stay Connected</h2>
                <p>128 E. Franklin Street, Suite 240</p>
                <p>Chapel Hill, NC 27514</p>
                <p>
                    <a
                        href="mailto:samantha@downtownchapelhill.com"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        samantha@downtownchapelhill.com
                    </a>
                </p>
                <p>
                    <a
                        href="tel:9199285735"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        (919) 928 - 5735
                    </a>
                </p>
            </div>

            <div style={rightSection}>
                <img src="app/assets/logo.png" alt="Logo" style={logoStyle} />

                <div style={iconRowStyle}>
                    <div style={circleStyle}></div>
                    <div style={circleStyle}></div>
                    <div style={circleStyle}></div>
                    <div style={circleStyle}></div>
                </div>

                <nav style={navStyle}>
                    <Link to="/people" style={linkStyle}>
                        who we are
                    </Link>
                    <Link to="/research" style={linkStyle}>
                        research
                    </Link>
                    <Link to="/data" style={linkStyle}>
                        data
                    </Link>
                    <Link to="/newsletter" style={linkStyle}>
                        our newsletter
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
