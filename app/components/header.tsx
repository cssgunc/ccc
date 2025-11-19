import { useEffect, useState } from "react";
import logo from "app/assets/logo.png";
import { Link } from "react-router-dom";

const BREAKPOINT = 870;

function Header() {
    const [shrink, setShrink] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handing window resize to toggle mobile view
    useEffect(() => {
        setIsMobile(window.innerWidth < BREAKPOINT);
        const handleResize = () => {
            const newIsMobile = window.innerWidth < BREAKPOINT;
            setIsMobile(newIsMobile);
            if (!newIsMobile) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerStyle = {
        position: "sticky",
        top: shrink ? "0px" : "40px",
        margin: "0 auto",
        marginTop: "40px",
        marginBottom: "10px",
        marginLeft: shrink ? "0px" : "40px",
        marginRight: shrink ? "0px" : "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: shrink ? "0px" : "100px",
        padding: shrink ? "5px 20px" : "0px 20px",
        fontSize: shrink ? "18px" : "20px",
        flexWrap: "nowrap",
        gap: "125px",
        zIndex: 1000,
        transition: "all 0.4s ease",
    } as const;

    const linkContainerStyle = {
        display: isMobile ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        flex: "1",
        textAlign: "center",
    } as const;

    const hamburgerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        padding: "5px",
    } as const;

    const lineStyle = {
        width: "100%",
        height: "3px",
        backgroundColor: "black",
        borderRadius: "10px",
    } as const;

    const textStyle = {
        textAlign: "center",
        flexShrink: 5,
        objectFit: "contain",
    } as const;

    const fullscreenMenuStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        display: isMobile ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s ease-in-out",
        zIndex: 10000,
        paddingTop: "60px",
        overflowY: "auto",
    } as const;

    const menuLinkStyle = {
        padding: "20px 0",
        fontSize: "24px",
        fontWeight: "bold",
        color: "black",
        textDecoration: "none",
        width: "80%",
        textAlign: "center",
        borderBottom: "1px solid #ccc",
    } as const;

    // Close button (X) style for the drawer
    const closeButtonStyle = {
        position: "absolute",
        top: "20px",
        right: "40px",
        fontSize: "36px",
        cursor: "pointer",
        fontWeight: "lighter",
        color: "black",
        zIndex: 10001,
    } as const;

    return (
        <>
            <div style={headerStyle}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                height: isMobile ? "90px" : "90px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Link>
                    <Link to="/">
                        <p
                            style={{
                                fontWeight: "bold",
                                display: isMobile ? "none" : "block",
                            }}
                        >
                            Campus & Community Coalition
                        </p>
                    </Link>
                </div>
                <div style={linkContainerStyle}>
                    <Link to="/people" style={textStyle}>
                        Who We Are
                    </Link>
                    <Link to="/research" style={textStyle}>
                        Resources
                    </Link>
                    <Link to="/data" style={textStyle}>
                        Data
                    </Link>
                    <Link to="/newsletter" style={textStyle}>
                        Our Newsletter
                    </Link>
                </div>

                {/*Hamburger Icon */}
                {isMobile && (
                    <button
                        type="button"
                        style={hamburgerStyle}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Open menu"
                    >
                        <span style={lineStyle} />
                        <span style={lineStyle} />
                        <span style={lineStyle} />
                    </button>
                )}
            </div>

            {/* Fullscreen Drawer Menu for Mobile */}
            <div style={fullscreenMenuStyle}>
                <div style={closeButtonStyle} onClick={toggleMenu}>
                    &times;
                </div>
                <Link to="/" style={menuLinkStyle} onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="/people" style={menuLinkStyle} onClick={toggleMenu}>
                    Who We Are
                </Link>
                <Link to="/research" style={menuLinkStyle} onClick={toggleMenu}>
                    Resources
                </Link>
                <Link to="/data" style={menuLinkStyle} onClick={toggleMenu}>
                    Data
                </Link>
                <Link
                    to="/newsletter"
                    style={menuLinkStyle}
                    onClick={toggleMenu}
                >
                    Our Newsletter
                </Link>
            </div>
        </>
    );
}

export default Header;
