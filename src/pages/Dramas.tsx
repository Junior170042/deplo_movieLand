
import GetMovies from '../services/GetMovies'
import useIsScrolling from '../hooks/useScroll';
import { useState } from 'react';
import { PaginationButton } from '../components/paginationButtton';
import { YearButtons } from '../components/yearButtons';
const Dramas = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { handleScroll } = useIsScrolling();
    return (
        <div className="dramas">
            <div className="row mx-auto">
                <GetMovies type="drama" textTitle="Peliculas de dramas" page={currentPage} year={currentYear} />
            </div>
            <PaginationButton currentPage={currentPage} setCurrentPage={setCurrentPage} handleScroll={handleScroll} />
            <YearButtons currentYear={currentYear} setCurrentYear={setCurrentYear}
                handleScroll={handleScroll} />
        </div>
    )
}

export default Dramas