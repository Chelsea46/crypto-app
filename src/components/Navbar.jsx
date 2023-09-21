import { StyledNav } from "./styled/Navbar.styled";
import { FaCircleHalfStroke, FaUser} from  "react-icons/fa6";
import { CryptoContext } from '../contexts/CyrptoContext';
import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Navbar({onClick, theme}){

    const { currencies, 
        currencySelected, 
        symbol, handleSearch, 
        optionsCountry, 
        searchInput, 
        clearSearch,
    } = useContext(CryptoContext);

    const { 
        addRegModal,
        addLoginModal,
        isLoggedIn,
        logOut,
        deleteUser,
        cookieToken,
        isDropdownOpen,
        toggleDropdown
     } = useContext(UserContext);

    

    useEffect(() => {
        if(!isLoggedIn && !cookieToken){
            console.log('User needs to log in')
           
        }else{
           console.log('logged in')
        }

      }, [cookieToken, isLoggedIn]);


   

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
                        <div className="dropdown-btn" onClick={toggleDropdown}>
                            <FaUser className="dropdown-user"/>
                        </div>
                        <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                            {isLoggedIn ? (
                                <ul id="login-dropdown">
                                    <li className="logout" onClick={logOut}>Logout</li>
                                    <li className="delete-user" onClick={deleteUser}> Delete Me</li>
                                </ul>
                            ) : (
                                <ul id="login-dropdown">
                                    <li className="login" onClick={addLoginModal}>Login</li>
                                    <li className="register" onClick={addRegModal}>Sign Up</li>
                                </ul>
                            )}
                            </div>
                        </div>
                <div className="toggle-mode" onClick={onClick}><FaCircleHalfStroke className="toggle"/></div>
            </div>
        </StyledNav>
    )
}