import { StyledNav } from "./styled/Navbar.styled";
import { FaCircleHalfStroke } from  "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Navbar({onClick, theme}){
    return(
        <StyledNav theme={theme}>
            <div className="left-nav">
               <Link to='/'> <h3 className="coins">Coins</h3> </Link>
                <Link to='/portfolio'> <h3 className="portfolio">Portfolio</h3> </Link> 
            </div>
            < div className="right-nav">
                    <form action="">
                        {/* <FaSearchengin className="search-icon"/> */}
                        <input type="text" name="" id="" placeholder = "Search..." className="search-bar"/>
                    </form>
                <select name="" id="" className="nav-dropdown">
                    <option value="">BTC</option>
                    <option value="">USD</option>
                    <option value="">GBP</option>
                    <option value="">EUR</option>
                </select>
                <div className="toggle-mode" onClick={onClick}><FaCircleHalfStroke className="toggle"/></div>
            </div>
        </StyledNav>
    )
}