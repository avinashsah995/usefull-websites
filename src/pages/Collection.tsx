import { useState } from 'react';
import { websites } from '../data/websites';
import WebsiteCard from '../components/WebsiteCard';
import './Collection.css';

export default function Collection() {
    const [selectedCategory, setSelectedCategory] = useState(websites[0].category);

    const currentCategoryData = websites.find(w => w.category === selectedCategory);

    return (
        <div className="collection-page">
            <div className="collection-container">
                <aside className="collection-sidebar">
                    <h2 className="sidebar-title">Categories</h2>
                    <nav className="category-nav">
                        {websites.map((group) => (
                            <button
                                key={group.category}
                                className={`category-nav-item ${selectedCategory === group.category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(group.category)}
                            >
                                {group.category}
                                <span className="category-count">{group.websites.length}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="collection-content">
                    <div className="collection-header">
                        <h1 className="collection-title">{selectedCategory}</h1>
                        <p className="collection-subtitle">
                            {currentCategoryData?.websites.length} useful tools found
                        </p>
                    </div>

                    <div className="websites-grid">
                        {currentCategoryData?.websites.map((website) => (
                            <WebsiteCard key={website.id} website={website} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
