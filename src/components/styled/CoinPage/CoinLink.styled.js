import styled from "styled-components";

export const CoinLinkStlye = styled.div`
    width: 21%;
    background-color: ${(props) => props.theme.body.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    border-radius: 10px;
    margin-top: 2em;

    img{
        background:  ${(props) => props.theme.active_coin_portfolio.background};
        padding: 1em;
        
    }

    a{
        font-size: .80em;
        font-weight: bold;
        border-radius: 10px;
        padding: .5em;
        background:  ${(props) => props.theme.active_coin_portfolio.background};
    }
`