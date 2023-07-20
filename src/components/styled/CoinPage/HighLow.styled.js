import styled from "styled-components";

export const HighLowStlye = styled.div`
    width: 300px;
    background-color: ${(props) => props.theme.body.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 2em;
    margin-left: 2em;
    padding-right: 1.7em;

    .red{
        color: red;
    }

    .green{
        color: green;
    }

    .ath-atl-container{
        display: flex;
    }

    .ath-list, .atl-list{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: .80em;
    }

    li{
        list-style: none;
        text-aling: left;
    }

    .atl-title, .ath-title{
        font-weight: bold;
    }

    .stack{
        font-size: 2em;
    }

    .current-price{
        margin-bottom: 0em;
    }
`
