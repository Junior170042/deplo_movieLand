import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../styles/navbar.css"
import { useMovieGenres } from '../context/movieGenres';
const NAV_LINKS = [
    { to: "/", label: "Inicio", className: "link" },
    { to: "/populares", label: "Populares", className: "link" },
    { to: "/enfantiles", label: "Enfantiles", className: "link" },
    { to: "/dramas", label: "Dramas", className: "link" },

];

type Genre = {
    id: number;
    name: string;
}

const Navbar = () => {
    const [keyword, setKeyword] = useState('');
    const [isResponsive, setIsResponsive] = useState(false);
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [allGenres, setAllGenres] = useState<Genre[]>([]);

    const { currentGenre, setCurrentGenre } = useMovieGenres();

    const isHome = useLocation().pathname === '/';


    useEffect(() => {
        let isMounted = true;
        const fetchGenres = async () => {
            try {
                const response = await fetch('/api/genres');
                const data = await response.json();
                if (!isMounted) return;
                setAllGenres(data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
        return () => {
            isMounted = false;
        };
    }, []);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const searchTerm = keyword.trim() || 'superman';
        navigate(`/buscador/${searchTerm}`);
        setIsResponsive(false); // Close menu on search
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    };

    return (
        <nav className={`nav-bar ${isResponsive ? ' responsives' : ''}`} id="myNav">
            <div className="box">
                <NavLink to="/" className="logo"> MovieLand</NavLink>
                <div className={`box-links ${!isResponsive && 'fade-out'}`}>
                    <button className="icon-close" onClick={toggleResponsive}>
                        <i className="fa fa-times" />
                    </button>
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.to} to={link.to} className={link.className} onClick={toggleResponsive}>
                            {link.label}
                        </NavLink>
                    ))}

                    {isResponsive && <div className="more-links">
                        {allGenres.map((genre) => (
                            <span key={genre.id + Date.now()} className={`link ${genre.id === Number(currentGenre) ? 'active' : ''}`} onClick={() => {
                                setCurrentGenre(String(genre.id));
                                toggleResponsive()
                                !isHome && navigate("/")
                            }}>
                                {genre.name}
                            </span>
                        ))}
                    </div>}
                </div>
                <button className="btn-dropdown"
                    onMouseEnter={toggleDropdown}
                >
                    Más <i className="fa fa-chevron-down"></i>
                </button>
                <div
                    className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    {allGenres.map((genre) => (
                        <span key={genre.id} className={`link ${genre.id === Number(currentGenre) ? 'active' : ''}`} onClick={() => {
                            setCurrentGenre(String(genre.id))
                            !isHome && navigate("/")
                        }}>
                            {genre.name}
                        </span>
                    ))}
                </div>
            </div>
            <form className="form p-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={keyword}
                    placeholder="Película, Actor o Palabra clave ..."
                    onChange={handleChange}

                />
                {keyword !== '' && <button type="submit" className="search-btn">
                    <i className="fa fa-search pt-2" />
                </button>}
                {keyword !== '' && <button type="submit"
                    className="delete-btn"
                    onClick={() => setKeyword('')}>
                    <i className="fa fa-times pt-2" />
                </button>}
            </form>

            <button className="icon" onClick={toggleResponsive}>
                <i className="fa fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;
