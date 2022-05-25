import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header(props) {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">Listado</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>
            <span>{props.favorites.length > 0 && <>
                cantidad de favoritos: {props.favorites.length}
            </>}
            </span>
            <Buscador/>
        </header>
    )
}
export default Header;
