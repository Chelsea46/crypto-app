import styled from 'styled-components'

export const StyledNav = styled.nav `

    background: ${(props) => props.theme.navbar.background};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-nav{
        display: flex;
        flex-direction: row;
        width: 25%;
    }
    
    .coins, .portfolio{
        padding: .5em;
        display: inline-block;
        width: 120px;
        border-radius: 10px;
        text-align: center;
    }

    .coins:hover, .portfolio:hover{
        background-color: #2C2F36;
    }

    .right-nav{
        position: relative;
        display: flex;
        width:50%;
        align-items:center
    }
    
    .search-bar, .nav-dropdown, .toggle-mode{
        padding: 1em;
        border-radius: 10px;
    }

    .search-bar{
        width:40%;
    }

    .nav-dropdown, .toggle-mode{
        margin-left: 1em;
    }
`