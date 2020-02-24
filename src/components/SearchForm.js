import React, { useState, useEffect } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function SearchForm(props) {

  //api
  const [characters, setCharacters] = useState([])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('data', response.data)
        setCharacters(response.data.results)
        setSearchResults(response.data.results)
      })
      .catch(error => console.log(error))
  }, [])


  //search
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=>{
    const results = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results)
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }


  return (
    <section className="search-form">

    <form>
      <label>Search:
        <input type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange}/>
      </label>
    </form>

      {searchResults.map( character => {
          return <CharacterCard key={character.id} {...character}/>
      })}
      
    </section> 
  );
}
