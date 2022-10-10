import React from 'react';
import { useParams } from 'react-router-dom';
import GetMovie from '../services/GetMovieId'
const Detalles = () => {
    const key = useParams()
    const url = `https://api.themoviedb.org/3/movie/${key.id}?api_key=ce34f04e42f935f347ac371d31c2b114`;


    return (
        <>
            <GetMovie _URL={url} />
        </>
    )



}

export default Detalles