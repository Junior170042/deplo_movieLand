import { Link } from 'react-router-dom'
import { IMAGE_PATH } from '../variables_env';
import { Movie } from '../types';

interface ShowMoviesProps {
    movies: Movie[];
    marginTop?: string;
}

const ShowMovies = ({ movies, marginTop }: ShowMoviesProps) => {

    const setLanguages = (language: string) => {
        switch (language) {
            case 'en':
                return 'English';
            case 'es':
                return 'Español';
            case 'fr':
                return 'Francés';
            default:
                return language;
        }
    }

    return (
        <div className='movies-grid' style={{ marginTop }}>
            {movies.map(movie => (
                <div className="movie-card-wrapper" key={movie.id}>
                    <div className="cards">
                        <img
                            className="card-img-top"
                            src={movie.poster_path ? IMAGE_PATH + movie.poster_path : 'https://via.placeholder.com/300x450'}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <div className="card-body">
                            <h4 className="card-title titles">{movie.title}</h4>

                            <div className="movie-meta-info">
                                <span className="years">{movie.release_date?.substring(0, 4)}</span>
                                <span className="language">{setLanguages(movie.original_language || 'en')}</span>
                            </div>

                            <Link to={`/detalles/${movie.id}`} className="btn-show-details w-100 text-center">
                                Detalles <span><i className="fa fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowMovies
