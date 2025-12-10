import { Link } from 'react-router-dom';
import type { Website } from '../data/websites';
import './WebsiteCard.css';

interface WebsiteCardProps {
    website: Website;
}

export default function WebsiteCard({ website }: WebsiteCardProps) {
    return (
        <Link to={`/website/${website.id}`} className="website-card">
            <div className="card-icon">{website.icon}</div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{website.title}</h3>
                    <span className="card-category">{website.category}</span>
                </div>
                <p className="card-description">{website.description}</p>
                <div className="card-footer">
                    <span className="card-link">
                        Learn more
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
