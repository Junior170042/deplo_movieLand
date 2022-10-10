import React from 'react'
import GetMovies from '../services/GetMovies'

const Popular = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce34f04e42f935f347ac371d31c2b114";
    return (
        <div className=" popular">
            <h1 className="titulo text-center">Más populares</h1>
            <div className="row mx-auto">
                <GetMovies _URL={url} />
            </div>
        </div>
    )
}

export default Popular
