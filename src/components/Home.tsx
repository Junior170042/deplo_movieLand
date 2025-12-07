import { useState } from 'react'
import GetMovies from '../services/GetMovies'
import useIsScrolling from '../hooks/useScroll';
import { PaginationButton } from './paginationButtton';
import { YearButtons } from './yearButtons';
const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { handleScroll } = useIsScrolling();
    return (
        <div className="home">
            <GetMovies type="discover" textTitle="Películas recientes"
                page={currentPage}
                year={currentYear}
            />
            <PaginationButton currentPage={currentPage} setCurrentPage={setCurrentPage} handleScroll={handleScroll} />
            <YearButtons currentYear={currentYear} setCurrentYear={setCurrentYear}
                handleScroll={handleScroll} />
        </div>



    )
}

export default Home
