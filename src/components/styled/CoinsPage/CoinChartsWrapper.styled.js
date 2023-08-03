import styled from 'styled-components'

export const CoinChartsWrapper = styled.div`

    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    padding-left: 4em;
    padding-right: 4em;
    margin-bottom: 1em;

    @media (max-width: 400px){

        padding-left: 0em;
        padding-right: 0em;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;

        h1{
            font-size: .80rem;
        }

        p{
            font-size: .90rem;
        }
    }
`