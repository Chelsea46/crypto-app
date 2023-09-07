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
    
    .search-bar, .select-container, .nav-dropdown, .toggle-mode{
        border-radius: 10px;
        color: ${(props) => props.theme.body.color};
        background:  ${(props) => props.theme.active_coin_portfolio.background};
    }

    .search-bar{
        width: 61%;
        font-size: 1.3rem;
        padding: .3em .75em .3em .75em;
    }

    .select-container, .toggle-mode{
        margin-left: 1em;
    }

    .select-container{
        padding: .65em;
        display: flex;
        flex-direction: row;
        font-weight: bold;
    }

    .toggle-mode{
        padding: .6em;
    }

    .nav-dropdown{
        border: none;
        font-size: 1em;
    }

    .symbol{
        display: flex;
        width: 25px;
        height: 25px;
        background: rgb(25, 27, 31);
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 50%;
        color: rgb(0, 255, 95);
    }

    .login-register{
        display: flex;
        justify-content: space-between;
        width: 145px;
        margin-left: 1em;
    }

    .login:hover, .register:hover{
        color: #6C7575;
        cursor: pointer;
    }

    @media (max-width: 480px){

        justify-content: space-between;

        .coins, .portfolio, {
            padding: .7em;
            font-size: .85rem;
        }

        .search-bar{
            display: none;
            font-size: .85rem;
        }

        .select-container{
            padding: .3em;
            font-size: .85rem;
            margin-left: .5em;
        }

        .symbol{
            width: 18px;
            height: 18px;
        }

        .nav-dropdown, .toggle{
            font-size: .8rem;
        }

        .toggle-mode{
            padding: .5em;
        }

        .login-register{
            font-size: .65rem;
            margin-left: 0.5em;
        }

        .right-nav{
            width: 61%;
        }
    }

    @media (min-width: 481px) and (max-width: 768px){
        justify-content: space-evenly;

        .coins, .portfolio, {
            padding: .7em;
            font-size: .95rem;
        }

        .search-bar{
            display: none;
            font-size: .95rem;
        }

        .select-container{
            padding: .3em;
            font-size: .95rem;
            margin-left: .5em;
        }

        .symbol{
            width: 18px;
            height: 18px;
        }

        .nav-dropdown, .toggle{
            font-size: .95rem;
        }

        .toggle-mode{
            padding: .5em;
        }

        .login-register{
            font-size: .70rem;
            margin-left: 0.5em;
        }

        .right-nav{
            width: 50%;
        }
      }

`