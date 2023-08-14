import styled from "styled-components";



export const BouncingLoaderStyle = styled.div `

    .bouncing-loader {
        background-color: ${(props) => props.theme.body.background};
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
        height: 190px;
        align-items: center;
  }
  
  .bouncing-loader > div {
    width: 23px;
    height: 23px;
    margin: 9px 12px;
    border-radius: 50%;
    background-color: #F1B2B0;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-16px);
    }
  }
  
  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }

  @media (max-width: 480px){
    
    .bouncing-loader{
      height: 59px;
    }

    .bouncing-loader > div{
      width: 8px;
      height: 8px;
      margin: 2px 6px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px){
      
    .bouncing-loader{
      height: 59px;
    }

    .bouncing-loader > div{
      width: 8px;
      height: 8px;
      margin: 2px 6px;
    }
  }
`