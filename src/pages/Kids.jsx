import React from 'react'
import GetMovies from '../services/GetMovies'

const Kids = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=ce34f04e42f935f347ac371d31c2b114"
    return (
        <div className="enfantiles">
            <h1 className="titulo text-center">Peliculas enfantiles</h1>
            <div className="row mx-auto">
                <GetMovies _URL={url} />
            </div>
        </div>
    )
}

export default Kids