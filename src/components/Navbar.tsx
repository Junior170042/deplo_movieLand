import { useState, ChangeEvent, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/navbar.css"
const NAV_LINKS = [
    { to: "/", label: "Inicio", className: "link" },
    { to: "/enfantiles", label: "Enfantiles", className: "link" },
    { to: "/dramas", label: "Dramas", className: "link" },
    { to: "/comedias", label: "Comedias", className: "link" },
    { to: "/populares", label: "Populares", className: "link" },
];

const Navbar = () => {
    const [keyword, setKeyword] = useState('');
    const [isResponsive, setIsResponsive] = useState(false);
    const navigate = useNavigate();



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const searchTerm = keyword.trim() || 'superman';
        navigate(`/buscador/${searchTerm}`);
        setIsResponsive(false); // Close menu on search
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
