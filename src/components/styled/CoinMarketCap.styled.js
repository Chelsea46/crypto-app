import styled from "styled-components";

export const CoinMarketCapStlye = styled.div`
    width: 25%;
    background-color: ${(props) => props.theme.body.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 2em;
    margin-left: 2em;

    li{
        list-style: none;
        
    }

    .sqaure{
        color: blue;
        font-size: 1.2em;
        margin-right: .3em;
    }

    .top-ul, btm-ul{
        display:flex;
        flex-direction: column;
        margin-right:0;
    }
    `
