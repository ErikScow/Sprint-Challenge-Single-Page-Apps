import React from "react";
import { Route, Link } from 'react-router-dom'
import Header from "./components/Header.js";
import styled from 'styled-components'
import axios from 'axios'

import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import LocationList from './components/LocationsList'

const Nav = styled.div`
  padding: 20px
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`

export default function App() {

  return (
    <main>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
      </Nav>

      <Header />

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
    </main>
  );
}
