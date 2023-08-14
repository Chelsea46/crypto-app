import styled from 'styled-components'

export const StyledCoinTable = styled.div`

    display: flex;
    justify-content: center;

    .coin-table .table-row {
        padding: 8px; 
      }

      .coin-table tr:last-child td {
        border-bottom: none;
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

    .sort-by{
        cursor: pointer;
    }

    .sort-by:hover{
        color: #707070;
    }

    .top {
        --offset: 50px; 
      
        position: sticky;
        bottom: 20px;       
        margin-top: calc(100vh + var(--offset));
        width: 46px;
        aspect-ratio: 1;
        background: #67D556;
        border-radius: 10px;
      }
      
      .top:before {
        content: "";
        position: absolute;
        inset: 30%;
        transform: translateY(20%) rotate(-45deg);
        border-top: 5px solid #fff;
        border-right: 5px solid #fff;
      }

      .container-top {
        position: fixed;
        bottom: 20px;
        right: 1px;
        transition: opacity 0.3s;
      }

      @media (max-width: 480px){

        .top{
            width: 30px;
        }
      }

      @media (min-width: 481px) and (max-width: 768px){
        .top{
            width: 30px;
        }
      }
`