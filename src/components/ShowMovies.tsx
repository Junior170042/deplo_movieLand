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

    const verMovies = (movie: Movie) => {
        return (
            <div className="col-sm-6 col-md-4 card-box" key={movie.id}
                style={{ marginTop }}>
                <div className="card mx-2 my-2 cards" >
                    <img className="card-img-top" src={IMAGE_PATH + movie.poster_path}
                        alt={movie.title} />
                    <div className="card-body text-center">
                        <h4 className="card-title titles">{movie.title}</h4>
                        <p className="card-text years">Año : <span>{movie.release_date.substring(0, 4)}</span></p>
                        <p className="card-text years">Idioma : <span>{setLanguages(movie.original_language!)}</span></p>
                        <Link to={`/detalles/${movie.id}`} className="btn-show-details w-full">
                            Detalles <span><i className="fa fa-arrow-right" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='movie-card-container'>
            {
                movies.map(movie => {
                    return verMovies(movie)
                })
            }
        </div>
    )
}

export default ShowMovies
