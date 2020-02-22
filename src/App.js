import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";

import axios from 'axios'

import WelcomePage from './components/WelcomePage'


export default function App() {

  const [characters, setCharacters] = useState([])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data)
        setCharacters(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <main>
      <Header />
      <WelcomePage />
    </main>
  );
}
