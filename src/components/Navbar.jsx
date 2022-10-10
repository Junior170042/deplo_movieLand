import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [key_word, setKeyword] = useState('')

    //handling the search key
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    //When there is no key word
    const keyManage = (key) => {
        if (!key) return 'superman';

        return key;
    }

    //adding responsive class
    const responsive = () => {
        let _mynav = document.getElementById('myNav');
        if (_mynav.className === "nav-bar") {
            _mynav.className += " responsives";

        } else {
            _mynav.className = "nav-bar";
        }
    }
    return (
        <>
            <nav className="nav-bar" id="myNav">
                <NavLink to="/" className="logo active land"> MovieLand</NavLink>
                <NavLink to="/" className="link "> Inicio</NavLink>
                <NavLink to="/populares" className="link"> Más populares</NavLink>

                <NavLink to="/enfantiles" className="link hide"> Enfantiles</NavLink>
                <NavLink to="/dramas" className="link hide"> Dramas</NavLink>
                <NavLink to="/comedias" className="link hide"> Comedias</NavLink>

                <button
                    className="dropdown-toggle drops"
                    data-bs-toggle="dropdown"
                >
                    Explorar
                </button>

                <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/enfantiles">
                            Enfantiles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/dramas">
                            Dramas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/comedias">
                            Comedias
                        </NavLink>
                    </li>
                </ul>


                <form className="form p-2" >
                    <input type="text" value={key_word}
                        placeholder="Pelis, actor, palabra ..."
                        onChange={(e) => handleChange(e)}
                    ></input>
                    <NavLink to={`/buscador/${keyManage(key_word)}`} className="logo">  <i className="fa fa-search pt-2"></i></NavLink>

                </form>

                <button
                    className="icon logo" onClick={() => responsive()}>
                    <i className="fa fa-bars"></i>
                </button>
            </nav>


        </>
    )
}

export default Navbar
