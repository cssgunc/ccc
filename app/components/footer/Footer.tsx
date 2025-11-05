import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <Link to="/">
                        <img
                            src="/assets/logo.png"
                            alt="Site Logo"
                            className="footer-logo"
                        />
                    </Link>
                    <div className="contact-info">
                        <p>128 E. Franklin Street, Suite 240</p>
                        <p>Chapel Hill, NC 27514</p>
                        <p>
                            <a href="mailto:samantha@downtownchapelhill.com">
                                samantha@downtownchapelhill.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:9199285735">(919) 928 - 5735</a>
                        </p>
                    </div>
                </div>

                <nav className="footer-nav">
                    <ul>
                        <li>
                            <Link to="/people">Who We Are</Link>
                        </li>
                        <li>
                            <Link to="/research">Research</Link>
                        </li>
                        <li>
                            <Link to="/data">Data</Link>
                        </li>
                        <li>
                            <Link to="/newsletter">Our Newsletter</Link>
                        </li>
                    </ul>
                </nav>

                <div className="footer-social">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <img
                            src="./assets/facebook.png"
                            alt="Facebook"
                            className="social-icon"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <img
                            src="./assets/ig.png"
                            alt="Instagram"
                            className="social-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <img
                            src="./assets/linkedin.png"
                            alt="LinkedIn"
                            className="social-icon"
                        />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                    >
                        <img
                            src="./assets/x.png"
                            alt="Twitter"
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
