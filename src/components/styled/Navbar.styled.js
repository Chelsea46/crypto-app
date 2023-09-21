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
        display: flex;
        justify-content: space-between;
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
        position: relative;
        display: inline-block;
        // display: flex;
        // align-items: center;
    }

    .login:hover, .register:hover{
        color: #6C7575;
        cursor: pointer;
    }

    .login, .register, .logout, .delete-user{
        list-style: none;
        padding: .5em;
        cursor: pointer;
    }

    #login-dropdown{
        padding: 0em;
    }


    .dropdown-user{
        color: rgb(0, 255, 95);
        font-size: 1.5rem;
        margin-left: .80em;
        cursor: pointer;
    }

  
    .dropdown-content {
        display: none;
        position: absolute;
    }

    .dropdown-content.open {
        display: block;
        padding-top: 1em;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 8px;
        z-index: 1;
        width: 105px;
        color: ${(props) => props.theme.body.color};
        background:  ${(props) => props.theme.active_coin_portfolio.background};
        font-size: .95rem;
    }

    .space-right-nav{
        display:flex;
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