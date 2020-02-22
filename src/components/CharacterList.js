import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {

  const [characters, setCharacters] = useState([ ])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('data', response.data)
        setCharacters(response.data.results)
      })
      .catch(error => console.log(error))
  }, [])

  console.log("characters", characters)

  return (
    <section className="character-list">
      {characters.map( character => {
          return <CharacterCard key={character.id} {...character}/>
      })}
    </section>
  );
}
