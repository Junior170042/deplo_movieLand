import React from 'react'
import GetMovies from '../services/GetMovies'
const Dramas = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=ce34f04e42f935f347ac371d31c2b114&page=2"
    return (
        <div className="dramas">
            <h1 className="titulo text-center">Peliculas de dramas</h1>
            <div className="row mx-auto">
                <GetMovies _URL={url} />
            </div>
        </div>
    )
}

export default Dramas