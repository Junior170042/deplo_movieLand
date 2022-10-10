import React from 'react'
import GetMovies from '../services/GetMovies'
const Comedies = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=ce34f04e42f935f347ac371d31c2b114"
    return (
        <div className="comedies">
            <h1 className="titulo text-center">Peliculas de comedia</h1>
            <div className="row mx-auto">
                <GetMovies _URL={url} />
            </div>
        </div>
    )
}

export default Comedies