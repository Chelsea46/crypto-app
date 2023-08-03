import styled from "styled-components";

export const CoinDescStyle = styled.div`

    .description{
        background-color: ${(props) => props.theme.body.background};
        font-size: .85em;
        width: 85%;
        padding: 1.5em;
        border-radius: 10px
    }

    .description-p-container{
        display: flex;
        justify-content: center;
    }

    .description-p-container > p{
        line-height: 1.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .description-title{
        margin-left: 3em;
        margin-top: 2em;
        font-size: 1.4rem;
        font-weight: 500;
        margin-block: 10px;
    }
    
    .stack{
        font-size: 2.5em;
        margin-bottom: .55em;
    }
   
    @media (max-width: 400px){
        
        line-height: 1.7em;
        font-size: .90rem;

        .stack{
            font-size: 1.5em;
        }

        .description-title{
            margin-left: 1em;
            font-size: 1rem;
        }
    }
    `