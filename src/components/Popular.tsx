
import GetMovies from '../services/GetMovies'
import { API_KEY } from '../variables_env';
const Popular = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
    return (
        <div className="popular">
            <div className="row mx-auto">
                <GetMovies _URL={url}
                    textTitle="Más populares"
                />
            </div>
        </div>
    )
}

export default Popular
