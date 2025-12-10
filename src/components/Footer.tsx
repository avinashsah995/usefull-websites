import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-icon">🌟</span>
                            <span className="logo-text gradient-text">Useful Sites</span>
                        </Link>
                        <p className="footer-description">
                            Curating the best web tools and resources for designers, developers, and creative professionals.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-heading">Project</h4>
                            <Link to="/" className="footer-link">Home</Link>
                            <a href="https://github.com/avinashsah995/usefull-websites" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Connect</h4>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Useful Sites. All rights reserved.</p>
                    <p className="made-with">
                        Made with <span className="heart">❤️</span> by Avinash
                    </p>
                </div>
            </div>
        </footer>
    );
}
