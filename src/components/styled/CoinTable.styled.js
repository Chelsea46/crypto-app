import styled from 'styled-components'

export const StyledCoinTable = styled.div`

    display: flex;
    justify-content: center;

    .coin-table .table-row {
        padding: 8px; 
      }
      
      .green{
        color: green;
      }

      .red{
        color: red;
      }
      
    .coin-table {
        width: 100%;
        border-collapse: collapse;
        background-color: ${(props) => props.theme.body.background};
        border-radius: 10px;
        color: ${(props) => props.theme.body.color};
        font-size: .75rem;
    }
    
    thead > tr > th{
        padding-block: 6px;
    }

    .coin-table th,
    .coin-table td {
        padding-left: 1.5em;
        padding-right: 1.5em;
        text-align: left;
        border-bottom: 1px solid #707070;
    }

    .coin-table-img {
        width: 36px;
        height: 34px;
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

    .progress-label{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 0;
    }

    .bullet{
        display: inline-block;
        padding-right: 5px;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .infinite-scroll-component__outerdiv{
        width: 90%;
    }
`