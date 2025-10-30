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
        padding: "5px 25px",
        fontSize: "20px",
        flexWrap: "wrap",
        gap: "20px",
        zIndex: 1000,
    } as const;
    const linkStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "30px",
        flex: "1",
        textAlign: "center",
    } as const;

    const textStyle = {
        textAlign: "center",
        flexShrink: 0,
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
                            height: "60px",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Link>
                <p>Campus & Community Coalition</p>
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
