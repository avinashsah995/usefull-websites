import { websites } from '../data/websites';
import WebsiteCard from '../components/WebsiteCard';
import './Home.css';

export default function Home() {
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
                        <div className="hero-stats animate-fade-in-up">
                            <div className="stat">
                                <div className="stat-number gradient-text">{websites.length}</div>
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

            <section className="websites-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Explore the Collection</h2>
                        <p className="section-description">
                            Click on any card to learn more about the tool and get started
                        </p>
                    </div>

                    <div className="websites-grid">
                        {websites.map((website) => (
                            <WebsiteCard key={website.id} website={website} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
