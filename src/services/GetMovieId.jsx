import React, { useEffect, useState } from 'react'

const GetMovie = ({ _URL }) => {

    const [movies, setMovies] = useState({})
    let mounted = true;

    const ShowMovie = (movies) => {
        const path = "https://image.tmdb.org/t/p/w500"



        const verMovie = movie => {
            return (
                <div className="col-10" key={movie.id} >
                    <h1 className="text-center my-4 single">{movie.title}</h1>
                    <div className="card mx-2 my-5 cards" >
                        <img className="card-img-top" src={path + movie.poster_path}
                            alt={movie.title} />
                        <div className="card-body text-center">
                            <h4 className="card-title titles">{movie.title}</h4>

                            <a style={{ pointerEvents: movie.homepage ? '' : 'none' }} href={movie.homepage && movie.homepage} target="_blank"

                                className={`btn ${movie.homepage ? 'btn-primary' : 'btn-secondary'} btn-play`}

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

        const fetchMovies = async () => {

            const getDatas = await fetch(_URL);
            const data = await getDatas.json()
            if (mounted) {

                setMovies(await data)
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
            mounted = false;
        }

        fetchMovies()

    }, [_URL])



    return (

        <>
            {
                movies && ShowMovie(movies)
            }
        </>
    )

}

export default GetMovie