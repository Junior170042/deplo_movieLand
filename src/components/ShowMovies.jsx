import React from 'react'
import { Link } from 'react-router-dom'
const ShowMovies = ({ movies }) => {

    const setLanguages = (language) => {
        if (language === 'en') return 'English';
        if (language === 'es') return 'Español';
        if (language === 'fr') return 'Francés';

        return language;
    }
    const path = "https://image.tmdb.org/t/p/w500"

    const verMovies = movie => {
        return (
            <div className="col-sm-4" key={movie.id}>
                <div className="card mx-2 my-2 cards" >
                    <img className="card-img-top" src={path + movie.poster_path}
                        alt={movie.title} />
                    <div className="card-body text-center">
                        <h4 className="card-title titles">{movie.title}</h4>
                        <p className="card-text years">Año : <span>{movie.release_date.substring(0, 4)}</span></p>
                        <p className="card-text years">Idioma : <span>{setLanguages(movie.original_language)}</span></p>
                        <Link to={`/detalles/${movie.id}`} className="btn btn-primary btn-play">
                            Detalles <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>

            {
                movies.map(movie => {
                    return verMovies(movie)

                })
            }


        </>


    )
}

export default ShowMovies
