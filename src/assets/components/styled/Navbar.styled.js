import styled from 'styled-components'

export const StyledNav = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: -1em;
    background-color: ${(props) => props.theme.body.background};

    .toggle{
        font-size: 1.5em;
    }

    .left-nav{
        display: flex;
        flex-direction: row;
        width: 50%;
    }
    
    .coins, .portfolio{
        padding: 1em;
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
    }

    .coins:hover, .portfolio:hover{
        background-color: ${(props) => props.theme.active_coin_portfolio.background};
    }

    .right-nav{
        position: relative;
        display: flex;
        width: 45%;
        align-items:center
    }
    
    .search-bar, .nav-dropdown, .toggle-mode{
        border-radius: 10px;
        color: ${(props) => props.theme.body.color};
        background:  ${(props) => props.theme.active_coin_portfolio.background};
    }

    .search-bar{
        width: 61%;
        font-size: 1.5rem;
        padding: .3em .75em .3em .75em;
    }

    .nav-dropdown, .toggle-mode{
        margin-left: 1em;
    }

    .toggle-mode{
        padding: .6em;
    }

    .nav-dropdown{
        padding: 1em;
    }
`