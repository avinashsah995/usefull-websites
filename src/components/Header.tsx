import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <span className="logo-icon">🌟</span>
                    <span className="logo-text gradient-text">Useful Sites</span>
                </Link>

                {/* <nav className="nav">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                        GitHub
                    </a>
                </nav> */}
            </div>
        </header>
    );
}
