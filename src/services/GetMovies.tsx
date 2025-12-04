import { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import ShowMovies from '../components/ShowMovies';
import NoMovies from './NoMovies';
import MovieCarousel from '../components/carousel';
import { Movie } from '../types';
interface GetMoviesProps {
    _URL: string;
    textTitle?: string;
    textTitleStyle?: React.CSSProperties;
}

const GetMovies = ({ _URL, textTitle = "Películas recientes", textTitleStyle }: GetMoviesProps) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true;

        const fetchMovies = async () => {
            setLoading(true)
            try {
                const getDatas = await fetch(_URL);
                const data = await getDatas.json();

                if (mounted && data.results) {
                    setMovies(data.results);
                    setLoading(false)
                } else if (mounted) {
                    console.error("API Error:", data);
                    setMovies([]);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                if (mounted) setLoading(false);
            }
        }

        fetchMovies()

        return () => {
            mounted = false;
        }

    }, [_URL])


    return (
        <div className="row mx-auto">
            {
                <h1 className="titulo text-center"
                    style={{ ...textTitleStyle, color: '#47428bff', fontWeight: 'bold', fontFamily: "serif" }}
                >{textTitle}</h1>
            }

            {movies.length !== 0 && <MovieCarousel movies={movies?.slice(0, 5)} />}
            {
                movies.length !== 0 && loading ? <Loading /> : <ShowMovies movies={movies} marginTop="1rem" />
            }

            {
                movies.length === 0 && <>
                    {
                        loading ? <Loading /> : < NoMovies title="No se encuentra peliculas" />
                    }
                </>
            }
        </div >
    )
}

export default GetMovies
