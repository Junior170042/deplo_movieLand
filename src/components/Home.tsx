import { useState } from 'react'
import GetMovies from '../services/GetMovies'
import useIsScrolling from '../hooks/useScroll';
import { page_end_point_url } from '../variables_env';
import { pages } from '../variables_env';
const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { handleScroll } = useIsScrolling();
    return (
        <div className="home">
            <GetMovies _URL={page_end_point_url + currentPage} textTitle="Películas recientes"
            />
            <div className=" pagination pt-3 pb-3 mx-5">
                {currentPage > 1 && <button className="page-link" key={currentPage} onClick={() => {
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                    handleScroll("top")
                }}>
                    <i className="fa fa-angle-left"></i>
                </button>}

                {pages.slice(0, currentPage > 3 ? currentPage : 3).map(({ page, id }: { page: number, id: number }) => (
                    <button className={`page-link text-white ${page === currentPage ? ' active' : ''}`} key={id} onClick={() => {
                        setCurrentPage(page)
                        handleScroll("top")
                    }}>
                        {page}
                    </button>
                ))}

                {currentPage < pages.length && <button className="page-link" key={currentPage + "3def"} onClick={() => {
                    setCurrentPage(currentPage + 1)
                    handleScroll("top")
                }}>
                    <i className="fa fa-angle-right"></i>
                </button>}
            </div>
        </div>



    )
}

export default Home
