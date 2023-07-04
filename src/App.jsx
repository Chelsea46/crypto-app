import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Coins from './pages/Coins';
import Coin from './pages/Coin';
import { ThemeProvider } from "styled-components";
import { themes } from "./assets/styles/colors";
import { GlobalStyles } from './assets/components/styled/Global';
import Navbar from './assets/components/Navbar';
import {Container} from './assets/components/styled/Container.styled';
import {Overview} from './assets/components/styled/Overview.styled'



function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const getCurrentTheme = () => (isDarkTheme ? themes.dark : themes.light);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
 return(
    <ThemeProvider theme={getCurrentTheme()}>
      <Container>
        <GlobalStyles theme={getCurrentTheme()} />
        <Navbar onClick={toggleTheme} theme={getCurrentTheme()} />
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
