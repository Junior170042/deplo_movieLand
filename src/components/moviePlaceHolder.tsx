import React from 'react';
import '../styles/place-holder-card.css';

export const MoviePlaceholderCard: React.FC = () => {
    return (
        <div className="movie-placeholder-card">
            <div className="placeholder-glow"></div>
            <div className="placeholder-content">
                <div className="placeholder-image shimmer">
                    <div className="placeholder-icon">🎬</div>
                </div>
                <div className="placeholder-info">
                    <div className="placeholder-title shimmer"></div>
                    <div className="placeholder-meta">
                        <div className="placeholder-rating shimmer"></div>
                        <div className="placeholder-year shimmer"></div>
                    </div>
                    <div className="placeholder-overview">
                        <div className="placeholder-line shimmer"></div>
                        <div className="placeholder-line shimmer"></div>
                        <div className="placeholder-line shimmer"></div>
                        <div className="placeholder-line-short shimmer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};