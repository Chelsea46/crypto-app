import styled from "styled-components";

const StyledAssetsModal = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .modal-container{
        border-radius: 10px;
        padding: 20px;
        background-color: ${(props) => props.theme.active_coin_portfolio.background};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .title{
        display: flex;
        justify-content: center;
    }

    .modal-options{
        display: flex;
        display: flex;
        justify-content: space-evenly;
    }

    .left, .right{
        display: flex;
        flex-direction: column;
    }

    .left{
        font-size: .80em;
        width: 200px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.body.background};
        margin-right: 1em;
    }

    ol > li{
        margin-bottom: 1em;
        line-height: 20px;
    }

    .right{
        width: 300px;
        height: 179px;
        border-radius: 10px;
    }

    .right > input, .search-bar{
        color: ${(props) => props.theme.body.color};
        background-color: ${(props) => props.theme.body.background};
        border: none;
        border-radius: 10px;
        margin-bottom: 1em;
        height: 150px;
        font-size: 1.2em;
    }

    .search-bar{
        display: flex;
        justify-content: space-between;
    }

    .search-bar > button{
        width: 20%;
        background-color: #ffff;
        border: none;
        border-radius: 10px;
    }

    .dollar{
        font-size: 1.3em;
        color: rgb(6, 213, 84);
    }
    

    .search-bar > input{
        height: 80%;
        color: ${(props) => props.theme.body.color};
        background-color: ${(props) => props.theme.body.background};
        border: none;
        font-size: 1em;
        border-radius: 10px;
    }

    .close, .save {
        font-weight: 700;
        margin-inline: 4px;
        padding: 14px 60px;
        margin-bottom: 10px;
        border-radius: 12px;
    }

    .close{
        color: rgb(6, 213, 84);
        background-color: white;
    }

    .save{
        background-color: rgb(6, 213, 84);
        color: white;
    }

    .close:hover, .save:hover{
        background-color: ${(props) => props.theme.body.background};
    }
    .btn-container{
        margin-top: 1em;
        display: flex;
        justify-content: center;
    }

    .option{
        padding: .4em;
        cursor: pointer;  
        background-color: ${(props) => props.theme.body.background};
    }

    .option:hover{
        background-color: ${(props) => props.theme.active_coin_portfolio.background};
    }

    .dropdown {
        max-height: 100px;
        overflow-y: auto;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 10px;
        position: absolute;
        width: 100%;
        width: 300px;
      }
      
      @media (max-width: 400px){

        .modal-container{
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .modal-options{
            flex-direction: column;
            align-items: center;
        }

        .close, .save {
            font-weight: 700;
            padding: 5px 10px;
            margin-bottom: 10px;
            border-radius: 12px;
        }

        .left{
            margin-left: 0em;
            margin-bottom: 1em;
            width: 100%;
        }

        .left > ol > li{
            line-height: 10px;
        }

        .right > input, .search-bar > input{
            font-size: .80rem;
        }
        
       .title{
        font-size: .80rem;
       }
    }
`

export default StyledAssetsModal