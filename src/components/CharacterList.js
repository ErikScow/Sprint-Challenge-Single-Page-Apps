import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function CharacterList() {

  const [characters, setCharacters] = useState([])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data)
        setCharacters(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  console.log("characters", characters)

  return (
    <section className="character-list">
      
    </section>
  );
}
