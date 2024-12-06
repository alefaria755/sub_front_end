import { NavStyle } from "../styles/NavStyle";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavStyle>
            <nav>
                <div className="nav_link"><Link to="/">Home</Link></div>
                <div className="nav_link"><Link to="/solucao">Solução</Link></div>
                <div className="nav_link"><Link to="/sobre">Sobre</Link></div>
                <div className="nav_link"><Link to="/login">Login</Link></div>
                <div className="nav_link"><Link to="/cadastrar">Cadastro</Link></div>
            </nav>
        </NavStyle>
    );
};

export default Nav;
