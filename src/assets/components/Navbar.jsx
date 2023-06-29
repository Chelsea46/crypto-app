import { StyledNav } from "./styled/Navbar.styled"

export default function Navbar({onClick, theme}){
    return(
        <StyledNav theme={theme}>
            <div className="left-nav">
                <h3 className="coins">Coins</h3>
                <h3 className="portfolio">Portfolio</h3>
            </div>
            < div className="right-nav">
                    <input type="text" name="" id="" placeholder="Search.."  className="search-bar"/>
                <select name="" id="" className="nav-dropdown">
                    <option value="">BTC</option>
                    <option value="">USD</option>
                    <option value="">GBP</option>
                    <option value="">EUR</option>
                </select>
                <button className="toggle-mode" onClick={onClick}>Toggle</button>
            </div>
        </StyledNav>
    )
}