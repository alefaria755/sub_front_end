import { NavStyle } from "../styles/NavStyle"
import { Link } from 'react-router-dom';


const Nav = ()=>{
    return(
        <NavStyle>

            
        
        <div className="nav_link"><Link to="/"> Home</Link></div>
        <div className="nav_link"><Link to="/solucao"> Solucao</Link></div>
        <div className="nav_link"><Link to="/Sobre"> Sobre</Link></div>
        <div className="nav_link"><Link to="/Login"> Login</Link></div>
        <div className="nav_link"><Link to="/Cadastrar"> Cadastro</Link></div>





        </NavStyle>

    );

};
export default Nav;