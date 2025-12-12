import { Link } from 'react-router-dom';
import { websites } from '../data/websites';
import './Home.css';

export default function Home() {
    const totalWebsites = websites.reduce((acc, category) => acc + category.websites.length, 0);

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title animate-fade-in-up">
                            Useful Websites You Should{' '}
                            <span className="gradient-text">Definitely Know</span>
                        </h1>
                        <p className="hero-description animate-fade-in-up">
                            Discover a curated collection of powerful web tools that will boost your productivity,
                            enhance your creativity, and make your digital life easier. From design to development,
                            these websites are absolute game-changers.
                        </p>

                        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <Link to="/collection" className="cta-button">
                                Explore Collection
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>

                        <div className="hero-stats animate-fade-in-up">
                            <div className="stat">
                                <div className="stat-number gradient-text">{totalWebsites}</div>
                                <div className="stat-label">Awesome Tools</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number gradient-text">100%</div>
                                <div className="stat-label">Free to Use</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number gradient-text">∞</div>
                                <div className="stat-label">Possibilities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
