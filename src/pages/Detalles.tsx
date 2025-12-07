
import { useParams } from 'react-router-dom';
import GetMovies from '../services/GetMovies';
const Detalles = () => {
    const key = useParams<{ id: string }>()


    return (
        <>
            <GetMovies type="details" id={key.id} textTitleStyle={{ fontSize: "10px" }} />
        </>
    )
}

export default Detalles