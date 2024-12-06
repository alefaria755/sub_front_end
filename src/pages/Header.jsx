import { HeaderStyle } from "../styles/HeaderStyle"
import { Link } from 'react-router-dom';


const Header = ()=>{
    return(
        <HeaderStyle>
        
        <div className="home"><Link to="/">Link Home</Link></div>
        <div className="produtos"><Link to="/produto">Link Produtos</Link></div>

        </HeaderStyle>

    );

};
export default Header;