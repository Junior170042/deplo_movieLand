
import { IMAGE_PATH, IMAGE_PATH_ORIGINAL } from '../variables_env';
import { Movie } from '../types';

const ShowSingleMovie = ({ movie, textTitle = movie.title, textTitleStyle }: { movie: Movie, textTitle?: string, textTitleStyle?: React.CSSProperties }) => {

    const formatCurrency = (value?: number) => {
        if (!value) return "N/A";
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    const formatRuntime = (minutes?: number) => {
        if (!minutes) return "N/A";
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    };

    const formatYear = (dateString?: string) => {
        if (!dateString) return "";
        return new Date(dateString).getFullYear();
    };

    // Use backdrop if available, fallback to poster, fallback to color
    const backdropUrl = movie.backdrop_path
        ? `${IMAGE_PATH_ORIGINAL}${movie.backdrop_path}`
        : movie.poster_path
            ? `${IMAGE_PATH_ORIGINAL}${movie.poster_path}`
            : '';

    return (
        <div className="single-movie-container">
            <div
                className="movie-header-backdrop"
                style={{ backgroundImage: `url(${backdropUrl})` }}
            >
                <div className="movie-content-wrapper">

                    <img
                        className="movie-poster-large"
                        src={movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Poster'}
                        alt={movie.title}
                    />

                    <div className="movie-info-section">
                        <h1 className="movie-title-large" style={textTitleStyle}>
                            {textTitle} <span style={{ opacity: 0.6, fontSize: '0.6em' }}>({formatYear(movie.release_date)})</span>
                        </h1>

                        <div className="movie-meta-row">
                            <span>{movie.release_date} ({movie.original_country?.join(', ') || 'N/A'})</span>
                            <span>•</span>
                            <span>{formatRuntime(movie.runtime)}</span>
                        </div>

                        <div className="genres-list">
                            {movie.genres?.map(g => (
                                <span key={g.id} className="genre-badge">{g.name}</span>
                            ))}
                        </div>

                        {movie.tagline && <p className="movie-tagline">"{movie.tagline}"</p>}

                        <div className="movie-overview-section">
                            <h3>Overview</h3>
                            <p className="movie-overview-text">{movie.overview}</p>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <h4>Status</h4>
                                <p>{movie.status || "N/A"}</p>
                            </div>
                            <div className="stat-item">
                                <h4>Original Language</h4>
                                <p>{movie.original_language?.toUpperCase() || "N/A"}</p>
                            </div>
                            <div className="stat-item">
                                <h4>Budget</h4>
                                <p>{formatCurrency(movie.budget)}</p>
                            </div>
                            <div className="stat-item">
                                <h4>Revenue</h4>
                                <p>{formatCurrency(movie.revenue)}</p>
                            </div>
                            <div className="stat-item">
                                <h4>Rating</h4>
                                <p>⭐ {movie.vote_average?.toFixed(1)} <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>({movie.vote_count} votes)</span></p>
                            </div>
                            <div className="stat-item">
                                <h4>Popularity</h4>
                                <p>{movie.popularity?.toFixed(0)}</p>
                            </div>
                        </div>

                        <div className="external-links">
                            {movie.homepage && (
                                <a
                                    href={movie.homepage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-show-details"
                                >
                                    Visit Homepage
                                </a>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowSingleMovie;