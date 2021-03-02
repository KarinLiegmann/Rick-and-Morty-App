import styled from 'styled-components';
import React from 'react';
import header from './img/logo.png';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HeaderNavigation from './components/HeaderNavigation';
import Characters from './pages/Characters.js';
import Episodes from './pages/Episodes.js';
import Home from './pages/Home.js';
import FavoriteChars from './pages/FavoriteChars';

function App() {
  return (
    <>
      <Header>
        <Logo src={header} alt="This is the Logo" />
        <HeaderNavigation />
      </Header>

      <Wrapper className="App">
        <Switch>
          <Route path="/pages/Characters">
            <Characters />
          </Route>
          <Route path="/pages/FavoriteChars">
            <FavoriteChars />
          </Route>
          <Route path="/pages/Episodes">
            <Episodes />
          </Route>
          <Route exact path="/pages/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  gap: 1rem;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 15px 10px;
  width: 100%;
`;

const Logo = styled.img`
  width: 175px;
`;
