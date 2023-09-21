import styled from 'styled-components'

export const Container = styled.div `
    max-width: 1200px;
    margin: 0 auto;
    background-color:  ${(props) => props.theme.container.background};

    .overview, .summary, .stats{
        left: 68px;
        position: relative;
        top: 10px;
    }

    .coin-wrapper{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 3em;
    }

    .summary{
        margin-top: 2em;
        font-size: 1.4rem;
        font-weight: 500;
    }

    .stats{
        font-size: 1.4rem;
        font-weight: 500;
        left: 117px;
        top: 0px;
    }

    .reg-user-alert{
        text-align: center;
        margin-top: 2em;
    }

    .btns{
        display: flex;
        justify-content: center;
        padding-bottom: 3em;
        padding-top: 3em;
    }

    .welcome{
        text-align: center;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .login-btn{
        background-color: rgb(6, 213, 84);
        color: white;
    }
    .login-btn, .signup-btn{
            padding: .85em;
            border-radius: 8px;
            width: 10%;
            font-size: .90rem;
    }

    .signup-btn{
        background-color: white;
        color: rgb(6, 213, 84);
        margin-left: 2em;
    }
   
    @media (max-width: 480px){
        width: 90vw;

        .overview, .summary, .stats{
            left: 20px;
            position: relative;
            top: 0px;
            font-size: 1rem;
        }

        .coin-wrapper{
            flex-direction: column;
            align-items: center;
        }
    }

    @media (min-width: 481px) and (max-width: 768px){
        width: 90vw;

        .overview, .summary, .stats{
            left: 20px;
            position: relative;
            top: 10px;
            font-size: 1rem;
        }

        .coin-wrapper{
            flex-direction: column;
            align-items: center;
        }
      }
`