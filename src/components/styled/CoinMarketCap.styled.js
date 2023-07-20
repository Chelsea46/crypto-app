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
    font-size: .85em;

    li{
        list-style: none;
        
    }

    .sqaure{
        color: #3C72E6;
        font-size: 1.2em;
        margin-right: .3em;
    }

    .top-ul, btm-ul{
        display:flex;
        flex-direction: column;
        margin-right:0;
    }

    .red{
        color:red
    }

    .green{
        color:  rgb(0, 252, 42);
        margin-left: .5em;
    }

    .tot-vol{
        color: rgb(26, 215, 97);
    }

    .max-sup{
        color: rgb(33, 114, 229);
    }

    .title{
        font-weight: bold;
        margin-right: .5em;
    }
    `
