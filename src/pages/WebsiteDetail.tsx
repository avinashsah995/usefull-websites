import { useParams, Link, useNavigate } from 'react-router-dom';
import { websites } from '../data/websites';
import './WebsiteDetail.css';

export default function WebsiteDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Flatten the websites array to find the specific website
    const allWebsites = websites.flatMap(category => category.websites);
    const website = allWebsites.find(w => w.id === id);

    if (!website) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Website Not Found</h1>
                    <p>The website you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="website-detail">
            <div className="detail-hero">
                <div className="container">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back
                    </button>

                    <div className="detail-header">
                        <div className="detail-icon">{website.icon}</div>
                        <div className="detail-header-content">
                            <span className="detail-category">{website.category}</span>
                            <h1 className="detail-title animate-fade-in-up">{website.title}</h1>
                            <p className="detail-subtitle animate-fade-in-up">{website.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail-content">
                <div className="container">
                    <div className="content-grid">
                        <div className="main-content">
                            <section className="content-section">
                                <h2 className="section-heading">About</h2>
                                <p className="detail-description">{website.fullDescription}</p>
                            </section>

                            <section className="content-section">
                                <h2 className="section-heading">Key Features</h2>
                                <ul className="features-list">
                                    {website.features.map((feature, index) => (
                                        <li key={index} className="feature-item">
                                            <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <aside className="sidebar">
                            <div className="sidebar-card glass">
                                <h3 className="sidebar-title">Visit Website</h3>
                                <p className="sidebar-description">
                                    Ready to explore? Click the button below to visit {website.title} and start using this amazing tool.
                                </p>
                                <a
                                    href={website.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-visit"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 3.33334V16.6667M10 16.6667L16.6667 10M10 16.6667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 10 10)" />
                                    </svg>
                                    Visit {website.title}
                                </a>
                                <div className="website-url">{website.url}</div>
                            </div>

                            <div className="sidebar-card">
                                <h3 className="sidebar-title">Category</h3>
                                <div className="category-badge">{website.category}</div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
