import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import ShowMovies from '../components/ShowMovies';
import NoMovies from './NoMovies';


const GetMovies = ({ _URL }) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    let mounted = true;


    useEffect(() => {

        const fetchMovies = async () => {

            setLoading(true)
            const getDatas = await fetch(_URL);

            const data = await getDatas.json();

            if (mounted) {
                setMovies(await data.results);
                setLoading(false)
            }

            mounted = false;
        }

        fetchMovies()

    }, [_URL])



    return (

        <div className="row mx-auto">
            {
                movies.length !== 0 && loading ? <Loading /> : <ShowMovies movies={movies} />
            }

            {
                movies.length === 0 && <>
                    {
                        loading ? <Loading /> : < NoMovies title="No se encuentra peliculas" />
                    }
                </>
            }
        </div>


    )

}

export default GetMovies
