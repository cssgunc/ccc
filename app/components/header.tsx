import logo from "app/images/logo.png";
import { Link } from "react-router";

function Header() {
    const headerStyle = {
        position: "sticky",
        top: "40px", // header spans 80% of the screen
        margin: "0 auto",
        marginTop: "40px",
        marginBottom: "10px",
        marginLeft: "40px",
        marginRight: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: "100px",
        padding: "0px 20px",
        fontSize: "20px",
        flexWrap: "nowrap",
        gap: "125px",
        zIndex: 1000,
    } as const;
    const linkStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        flex: "1",
        textAlign: "center",
    } as const;

    const textStyle = {
        textAlign: "center",
        flexShrink: 5,
        objectFit: "contain",
    } as const;
    return (
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
                            height: "90px",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Link>
                <Link to="/">
                    <p style={{ fontWeight: "bold" }}>
                        Campus & Community Coalition
                    </p>
                </Link>
            </div>
            <div style={linkStyle}>
                <Link to="/people" style={textStyle}>
                    Who We Are
                </Link>
                <Link to="/research" style={textStyle}>
                    Research
                </Link>
                <Link to="/data" style={textStyle}>
                    Data
                </Link>
                <Link to="/newsletter" style={textStyle}>
                    Our Newsletter
                </Link>
            </div>
        </div>
    );
}

export default Header;
