import React from 'react'
import { useParams } from 'react-router-dom'
import GetMovies from '../services/GetMovies'

const Search = () => {

    const search = useParams()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ce34f04e42f935f347ac371d31c2b114&query=${search.key}`;

    return (

        <div className=" popular">
            {<h1 className="titulo text-center">Peliculas encontradas</h1>}
            <div className="row mx-auto">
                <GetMovies _URL={url} />
            </div>
        </div>
    )
}

export default Search