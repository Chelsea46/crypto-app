import styled from 'styled-components'

export const StyledCoinTable = styled.div`

    display: flex;
    justify-content: center;

    .coin-table .table-row {
        padding: 8px; 
      }
 
    .coin-table {
        width: 30%;
        border-collapse: collapse;
        background-color: ${(props) => props.theme.body.background};
        border-radius: 10px;
        color: ${(props) => props.theme.body.color};
        font-size: .75rem;
    }
    
    .coin-table th,
    .coin-table td {
        padding: 2.5em;
        text-align: left;
        border-bottom: 1px solid #707070;
    }

    .coin-table-img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    
    .coin-name {
        display: flex;
        align-items: center;
    }
    
    .coin-name span {
        font-weight: bold;
    }
    
    h1 {
        font-size: 24px;
        margin-bottom: 16px;
    }
`