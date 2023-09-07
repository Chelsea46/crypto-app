import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import CryptoContextProvider from './contexts/CyrptoContext.jsx';
import PorfolioContextProvider from './contexts/PortfolioContext.jsx'
import UserContextProvider, { UserContext } from './contexts/UserContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CryptoContextProvider>
        <PorfolioContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </PorfolioContextProvider>
      </CryptoContextProvider>
    </React.StrictMode>
  </BrowserRouter>
)
