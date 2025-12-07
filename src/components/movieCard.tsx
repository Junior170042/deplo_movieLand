import "../styles/movieCard.css"
import { Movie } from "../types";
import { IMAGE_PATH } from "../variables_env";


interface MovieCardProps {
    movie: Movie;
    isActive: boolean;
}
export const MovieCard: React.FC<MovieCardProps> = ({ movie, isActive }) => {
    return (
        <div className={`movie-card ${isActive ? 'active' : ''}`}>
            <div className="card-glow"></div>
            <div className="card-content">
                <div className="card-image">
                    <img
                        src={IMAGE_PATH + movie.poster_path}
                        alt={movie.title}
                        loading="lazy"
                        onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300x450")}
                    />
                    <div className="image-overlay"></div>
                </div>
                <div className="card-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <div className="movie-meta">
                        <span className="rating">
                            ⭐ {movie.vote_average.toFixed(1)}
                        </span>
                        <span className="year">
                            {new Date(movie.release_date).getFullYear()}
                        </span>
                    </div>
                    <p className="movie-overview">
                        {movie.overview.substring(0, 150)}...
                    </p>
                </div>
            </div>
        </div>
    );
};