import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Coins from './pages/Coins';
import Coin from './pages/Coin';
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/colors";
import { GlobalStyles } from './components/styled/Global';
import Navbar from './components/Navbar';
import MarketData from './components/MarketData';
import {Container} from './components/styled/Container.styled';
import {Overview} from './components/styled/Overview.styled'



function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const getCurrentTheme = () => (isDarkTheme ? themes.dark : themes.light);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
 return(
    <ThemeProvider theme={getCurrentTheme()}>
      <Container>
        <GlobalStyles theme={getCurrentTheme()} />
        <Navbar onClick={toggleTheme} theme={getCurrentTheme()} />
        <MarketData />
        <Routes>
          <Route path='/' element={ < Coins /> }/>
          <Route path='/portfolio' element={ < Portfolio /> }/>
          <Route path='/coin/:id' element={ < Coin /> }/>
        </Routes>
      </Container>
    </ThemeProvider>
 )
}

export default App
