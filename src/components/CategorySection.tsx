import { useState } from 'react';
import type { Website } from '../data/websites';
import WebsiteCard from './WebsiteCard';

interface CategorySectionProps {
    title: string;
    websites: Website[];
}

export default function CategorySection({ title, websites }: CategorySectionProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="category-section">
            <button
                className={`category-header ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <h3 className="category-title">{title}</h3>
                <span className="category-toggle-icon">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            <div
                className="category-content"
                style={{
                    display: isExpanded ? 'grid' : 'none',
                }}
            >
                <div className="websites-grid">
                    {websites.map((website) => (
                        <WebsiteCard key={website.id} website={website} />
                    ))}
                </div>
            </div>
        </div>
    );
}
