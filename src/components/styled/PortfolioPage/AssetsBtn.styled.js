import styled from "styled-components";

const AssetsButtonStyled = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    button{
        background: rgb(6, 213, 84);
        color: ${(props) => props.theme.body.color};
        border: none;
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1em 3em;
        border-radius: 20px;
    }

    button:hover{
        background-color: ${(props) => props.theme.body.background};
    }

`

export default AssetsButtonStyled