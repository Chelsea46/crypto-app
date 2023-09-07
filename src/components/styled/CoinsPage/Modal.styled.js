import styled from 'styled-components'

export const StyledModal = styled.div`

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

.register-modal{
    border-radius: 10px;
    padding: 20px;
    background-color: ${(props) => props.theme.active_coin_portfolio.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 25%;
    height: 385px;
}

.login-modal{
    border-radius: 10px;
    padding: 20px;
    background-color: ${(props) => props.theme.active_coin_portfolio.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 25%;
    height: 350px;
}

.close-container{
    display: flex;
    justify-content: flex-end;
}

form{
    display: flex;
    flex-direction: column;
}

form > input{
    margin-bottom: 1.5em;
    padding: .65em;
    border-radius: 10px;
}

.submit-btn{
    padding: .85em;
    border-radius: 8px;
    width: 50%;
    background-color: rgb(6, 213, 84);
    color: white;
    font-size: .90rem;
}

.button{
    display: flex;
    justify-content: center;
}

button:hover{
    background-color: ${(props) => props.theme.body.background};
}

.close-button:hover{
    color: ${(props) => props.theme.body.background};
}

.close-button {
    font-weight: 700;
    margin-inline: 4px;
    margin-bottom: 10px;
    border-radius: 12px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: rgb(6, 213, 84);
  }
  
.title{
    display: flex;
    justify-content: center;
    margin-bottom: 1.5em;
    margin-top: -5px;
}

`