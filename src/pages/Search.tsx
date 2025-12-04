import { useParams } from 'react-router-dom'
import GetMovies from '../services/GetMovies'
import { API_KEY } from '../variables_env';
const Search = () => {

    const search = useParams<{ key: string }>()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search.key}`;

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