import styled from "styled-components";

export const CoinMarketCapStlye = styled.div`
    width: 330px;
    background-color: ${(props) => props.theme.body.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    @media (max-width: 480px){
        width: 292px;
        margin-left: 0px;
        font-size: .80rem;
        padding-top: 1em;
    }

    @media (min-width: 481px) and (max-width: 768px){
        width: 292px;
        margin-left: 0px;
        font-size: .80rem;
        padding-top: 1em;
    }
    `
