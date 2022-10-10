import React, { useState } from 'react'
import GetMovies from '../services/GetMovies'
const Home = () => {

    const [page, setPage] = useState(1);

    const url = `http://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=ce34f04e42f935f347ac371d31c2b114&page=${page}`
    return (

        <div className="home">
            <h1 className="titulo text-center">Películas recientes</h1>
            <GetMovies _URL={url} />

            <div className=" pagination pt-3 pb-3 mx-5">
                {page !== 1 && <button className="page-link" onClick={() => {
                    setPage(page - 1)

                }} >
                    <i className="fa fa-angle-left"></i>
                </button>
                }

                {page !== 1 && <button className="page-link" onClick={() => setPage(1)}>1</button>}

                <button className="page-link" onClick={() => setPage(2)}>
                    2
                </button>

                <button className="page-link" onClick={() => setPage(3)}>
                    3
                </button>


                {
                    page !== 10 && <button className="page-link" onClick={() => {
                        setPage(page + 1)
                    }}>

                        <i className="fa fa-angle-right"></i>
                    </button>
                }


            </div>

        </div>



    )
}

export default Home
