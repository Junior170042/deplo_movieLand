
import { useState } from 'react';
import GetMovies from '../services/GetMovies'
import useIsScrolling from '../hooks/useScroll';
import { PaginationButton } from './paginationButtton';
import { YearButtons } from './yearButtons';
const Popular = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { handleScroll } = useIsScrolling();
    return (
        <div className="popular">
            <div className="row mx-auto">
                <GetMovies type="popular"
                    textTitle="Más populares"
                    page={currentPage}
                />
            </div>
            <PaginationButton currentPage={currentPage} setCurrentPage={setCurrentPage} handleScroll={handleScroll} />
            <YearButtons currentYear={currentYear} setCurrentYear={setCurrentYear}
                handleScroll={handleScroll} />
        </div>
    )
}

export default Popular
