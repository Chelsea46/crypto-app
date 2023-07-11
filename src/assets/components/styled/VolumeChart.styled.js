import styled from 'styled-components'

export const StyledVolumeChart = styled.div`
    width: 48%;
    background-color: ${(props) => props.theme.body.background};
    border-radius: 10px;

    .barchart-text{
        left: 12px;
        position: relative;
    }
`
