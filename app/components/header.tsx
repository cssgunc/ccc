import logo from "app/images/logo.png";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    const goPeople = () => {
        navigate("/people");
    };
    const goResearch = () => {
        navigate("/research");
    };
    const goData = () => {
        navigate("/data");
    };
    const goNewsletter = () => {
        navigate("/research");
    };
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
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "50px", width: "50px" }}
                        onClick={goHome}
                    />
                    <p>Campus & Communnity Coalition</p>
                </div>
                <p onClick={goPeople}>who we are</p>
                <p onClick={goResearch}>research</p>
                <p onClick={goData}>data</p>
                <p onClick={goNewsletter}>our newsletter</p>
            </div>
            <div style={{ paddingTop: "80px" }} />
        </div>
    );
}

export default Header;
