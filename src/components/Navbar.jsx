import { StyledNav } from "./styled/Navbar.styled";
import { FaCircleHalfStroke } from  "react-icons/fa6";
import { CryptoContext } from '../contexts/CyrptoContext';
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function Navbar({onClick, theme}){
    const { currencies, currencySelected, symbol, handleSearch, optionsCountry, searchInput, clearSearch } = useContext(CryptoContext);

    return(
        <StyledNav theme={theme}>
            <div className="left-nav">
               <Link to='/'> <h3 className="coins">Coins</h3> </Link>
                <Link to='/portfolio'> <h3 className="portfolio" onClick={clearSearch}>Portfolio</h3> </Link> 
            </div>
            < div className="right-nav">
                    <form action="">
                        {/* <FaSearchengin className="search-icon"/> */}
                        <input type="text" name="" id="" placeholder = "Search..." className="search-bar" value={searchInput} onChange={handleSearch}/>
                    </form>
                    <div className="select-container">
                        <div className="symbol">
                            <span>{symbol}</span>
                        </div>
                        <select name="" id="" className="nav-dropdown" onChange={currencySelected} value={optionsCountry} >
                        {currencies.map((val) => {
                            return(
                                <>
                                    <option value={val.toUpperCase()} >{val.toUpperCase()}</option>
                                </>
                                )
                            })};
                        </select>
                    </div>
                <div className="toggle-mode" onClick={onClick}><FaCircleHalfStroke className="toggle"/></div>
            </div>
        </StyledNav>
    )
}