
import { useParams } from 'react-router-dom';
import GetMovie from '../services/GetMovieId'
import { API_KEY } from '../variables_env';
const Detalles = () => {
    const key = useParams<{ id: string }>()
    const url = `https://api.themoviedb.org/3/movie/${key.id}?api_key=${API_KEY}`;

    return (
        <>
            <GetMovie _URL={url} />
        </>
    )
}

export default Detalles