
import GetMovies from '../services/GetMovies'
import useIsScrolling from '../hooks/useScroll';
import { useState } from 'react';
import { YearButtons } from '../components/yearButtons';
const Comedies = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { handleScroll } = useIsScrolling();
    return (
        <div className="comedies">
            <div className="row mx-auto">
                <GetMovies type="comedy" textTitle="Peliculas de comedia" year={currentYear} />
            </div>

            <YearButtons currentYear={currentYear} setCurrentYear={setCurrentYear}
                handleScroll={handleScroll} />
        </div>
    )
}

export default Comedies