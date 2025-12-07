import { useParams } from 'react-router-dom'
import GetMovies from '../services/GetMovies'
import { PaginationButton } from '../components/paginationButtton';
import { YearButtons } from '../components/yearButtons';
import { useState } from 'react';
import useIsScrolling from '../hooks/useScroll';
const Search = () => {

    const search = useParams<{ key: string }>()
    const [currentPage, setCurrentPage] = useState(1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const { handleScroll } = useIsScrolling();

    return (
        <div className=" popular">
            <div className="row mx-auto">
                <GetMovies type="search" query={search.key} page={currentPage} year={currentYear} textTitle="Peliculas encontradas" />
            </div>
            <PaginationButton currentPage={currentPage} setCurrentPage={setCurrentPage} handleScroll={handleScroll} />
            <YearButtons currentYear={currentYear} setCurrentYear={setCurrentYear}
                handleScroll={handleScroll} />
        </div>
    )
}

export default Search