import { StyledNav } from "./styled/Navbar.styled";
import { FaCircleHalfStroke } from  "react-icons/fa6";
import { CryptoContext } from '../contexts/CyrptoContext';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Navbar({onClick, theme, regModalClosed, loginModalClosed}){
    const { currencies, currencySelected, symbol, handleSearch, optionsCountry, searchInput, clearSearch } = useContext(CryptoContext);

    // reg modal open close function
    function addRegModal(){
        regModalClosed(false);
    }

    // loging modal open close function
    function addLoginModal(){
        loginModalClosed(false);
    }

    // useEffect(() => {
    //     axios.get('http://localhost/crypto-login')
    //     .then(res => console.log(res))
    // }, [])

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
                    <div className="login-register">
                        <p className="login" onClick={addLoginModal}>Login</p> 
                        <p className="register" onClick={addRegModal}>Sign up</p>
                    </div>
                <div className="toggle-mode" onClick={onClick}><FaCircleHalfStroke className="toggle"/></div>
            </div>
        </StyledNav>
    )
}