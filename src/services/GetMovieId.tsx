import { useEffect, useState } from 'react'
import { IMAGE_PATH } from '../variables_env';
import { Movie } from '../types';
import { MoviePlaceholderCard } from '../components/moviePlaceHolder';

interface GetMovieProps {
    _URL: string;
}

const GetMovie = ({ _URL }: GetMovieProps) => {

    const [movies, setMovies] = useState<Movie | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    const ShowMovie = (movies: Movie) => {


        const verMovie = (movie: any) => {
            return (
                <div className="col-10" key={movie.id} >
                    1 < h1 className="text-center my-4 single" > {movie.title}</h1 >
                    <div className="card mx-2 my-5 cards" >
                        <img className="card-img-top" src={IMAGE_PATH + movie.poster_path}
                            alt={movie.title} />
                        <div className="card-body text-center">
                            <h4 className="card-title titles">{movie.title}</h4>

                            <a style={{ pointerEvents: movie.homepage ? 'auto' : 'none' }} href={movie.homepage && movie.homepage} target="_blank"
                                className={`btn ${movie.homepage ? 'btn-primary' : 'btn-secondary'} btn-play`}
                                rel="noreferrer"
                            >
                                Web oficial
                            </a>

                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="d-flex justify-content-center">
                {verMovie(movies)}
            </div>
        )
    }

    useEffect(() => {
        let mounted = true;

        const fetchMovies = async () => {
            setLoading(true)
            try {
                const getDatas = await fetch(_URL);
                const data: Movie = await getDatas.json()
                if (mounted) {
                    setMovies(data)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()

        return () => {
            mounted = false;
        }

    }, [_URL])

    return (
        <>
            {
                loading ? <MoviePlaceholderCard /> : movies && ShowMovie(movies)
            }
        </>
    )
}

export default GetMovie