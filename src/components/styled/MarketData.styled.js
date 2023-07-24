import styled from "styled-components";

export const StyledMarketData = styled.div `

    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: -1em;
    font-size: .80em;

    .data-container{
        width: 70%;
        background-color: ${(props) => props.theme.body.background};
        border-radius: 0 0 20px 20px;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 0;
    }

    img{
        width: 15px;
    }

    .prog-bar-cointainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }

    .prog-bar{
        width: 55px;
    }

    span{
        margin-right: .5em;
    }
`
