
import GetMovies from '../services/GetMovies'
import { API_KEY } from '../variables_env';
const Dramas = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${API_KEY}&page=2`
    return (
        <div className="dramas">
            <div className="row mx-auto">
                <GetMovies _URL={url} textTitle="Peliculas de dramas" />
            </div>
        </div>
    )
}

export default Dramas