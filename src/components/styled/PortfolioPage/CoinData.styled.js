import styled from "styled-components";

const StyledCoinData = styled.div `

    .coin-details-container{
        display:flex;
        justify-content: space-evenly;
        margin-bottom: 3em;
        padding-bottom: 2em;
        border-bottom: 1px solid gray;
    }

    .left{
        width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.body.background};
        border-radius: 10px;
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
        border-radius: 20px;
        justify-content: space-between;
        font-size: .75em;
        margin-bottom: 2em;
        padding: 2em 3em 2em 3em;
        width: 100%;
    }

    

    .bottom-container{
        padding-top: 2.5em;
        padding-bottom: 2.5em;
    }

        .port-bar-container{
            display: flex;
            margin-left: 1em;
            align-items: center;
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

        .edit{
            display: flex;
            align-items: center;
        }

        .edit > p{
            margin-right: 1em;
        }

        .pencil{
            color: #d0ac57;
        }

        .pencil:hover{
            color: grey;
        }

        @media (max-width: 480px){

            .coin-details-container{
                flex-direction: column;
                align-items: center;
            }

            .left{
                width: 50%;
            }

            .left >img{
                width: 25%;
                margin-top: 1em;
            }

            .left > h3{
                font-size: .80rem;
            }

            .remove{
                font-size: .90rem;
            }

            .top-container, .bottom-container{
                flex-direction: column;
                line-height: 1.6em;
                width: auto;
                align-items: flex-start;
            }

            .right{
                width: 98%;
                display: flex;
                justify-content: center;
            }

            .market-price{
                width: 75%;
            }
        }

        @media (min-width: 481px) and (max-width: 768px){
            .coin-details-container{
                flex-direction: column;
                align-items: center;
            }

            .left{
                width: 50%;
            }

            .left >img{
                width: 25%;
                margin-top: 1em;
            }

            .left > h3{
                font-size: .80rem;
            }

            .remove{
                font-size: .90rem;
            }

            .top-container, .bottom-container{
                flex-direction: column;
                line-height: 1.6em;
                width: auto;
                align-items: flex-start;
            }

            .right{
                width: 98%;
                display: flex;
                justify-content: center;
            }
        }

`

export default StyledCoinData