import { Link } from "react-router";

export default function Footer() {
    const footerStyle = {
        width: "100%",
        backgroundColor: "lightgrey",
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
        color: "black",
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
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
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
        gap: "40px",
        color: "black",
        fontSize: "0.95rem",
        textTransform: "lowercase",
    } as const;

    const linkStyle = {
        color: "black",
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
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        samantha@downtownchapelhill.com
                    </a>
                </p>
                <p>
                    <a
                        href="tel:9199285735"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        (919) 928 - 5735
                    </a>
                </p>
            </div>

            <div style={rightSection}>
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
