import logo from "app/images/logo.png";
import { Link } from "react-router";

function Header() {
    const headerStyle = {
        position: "fixed",
        top: 10,
        left: 5,
        right: 5,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: "100px",
        padding: "10px 30px",
        fontSize: "20px",
    } as const;
    return (
        <div>
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
                            style={{ height: "50px", width: "50px" }}
                        />
                    </Link>
                    <p>Campus & Communnity Coalition</p>
                </div>
                <Link to="/people">who we are</Link>
                <Link to="/research">research</Link>
                <Link to="/data">data</Link>
                <Link to="/newsletter">our newsletter</Link>
            </div>
            <div style={{ paddingTop: "80px" }} />
        </div>
    );
}

export default Header;
