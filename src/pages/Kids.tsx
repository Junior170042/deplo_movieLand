
import GetMovies from '../services/GetMovies'
import { API_KEY } from '../variables_env';
const Kids = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`
    return (
        <div className="enfantiles">
            <div className="row mx-auto">
                <GetMovies _URL={url}
                    textTitle="Peliculas enfantiles"
                />
            </div>
        </div>
    )
}

export default Kids