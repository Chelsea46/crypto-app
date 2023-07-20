import styled from "styled-components";

export const CoinMarketCapStlye = styled.div`
    width: 330px;
    background-color: ${(props) => props.theme.body.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 2em;
    font-size: .85em;

    li{
        list-style: none;
        
    }

    .sqaure{
        color: #3C72E6;
        font-size: 1.2em;
        margin-right: .3em;
    }

    .top-ul, .btm-ul{
        display:flex;
        flex-direction: column;
        margin-right:0;
        margin-left: -2.5em;
    }

    .top-ul{
        margin-left: -7.5em;
    }

    .btm-ul{
        margin-left:-4.5em;
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
