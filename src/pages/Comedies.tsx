
import GetMovies from '../services/GetMovies'
import { API_KEY } from '../variables_env';
const Comedies = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${API_KEY}&page=2`
    return (
        <div className="comedies">
            <div className="row mx-auto">
                <GetMovies _URL={url} textTitle="Peliculas de comedia" />
            </div>
        </div>
    )
}

export default Comedies