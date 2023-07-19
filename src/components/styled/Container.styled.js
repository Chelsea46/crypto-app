import styled from 'styled-components'

export const Container = styled.div `
    max-width: 1200px;
    margin: 0 auto;
    background-color:  ${(props) => props.theme.container.background};

    .overview, .summary{
        left: 68px;
        position: relative;
        top: 10px;
    }

    .coin-wrapper{
        display: flex;
        justify-content: space-evenly;
    }
`