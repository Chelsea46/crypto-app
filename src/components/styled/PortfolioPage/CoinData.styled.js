import styled from "styled-components";

const StyledCoinData = styled.div `

    .coin-details-container{
        display:flex;
        justify-content: space-evenly;
        margin-bottom: 3em;
        padding-bottom: 2em;
    }

    .left{
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.body.background};
    }

    .left > img{
        width: 40%;
        background-color: ${(props) => props.theme.active_coin_portfolio.background};
        padding: 1.5em;
    }

    .top-container, .bottom-container{
        display: flex;
        background-color: ${(props) => props.theme.body.background};
        align-items: center;
        width: 95%;
        border-radius: 20px;
        justify-content: space-between;
        font-size: .75em;
        margin-bottom: 2em;
        padding: 2em 3em 2em 3em;
    }

    

    .bottom-container{
        padding-top: 2.5em;
        padding-bottom: 2.5em;
    }

        .port-bar-container{
            display: flex;
            margin-left: 1em;
        }

        .port-bar{
            width: 60px;
            margin-left: .5em;
        }

        .bar-span{
            display: flex;
            align-items: center;
        }

        p{
            font-size: .80em;
            font-weight: bold;
        }

        .remove{
            font-size: 1.3em;
            color: #E60D11;
        }

        strong{
            margin-right: .3em;
        }
`

export default StyledCoinData