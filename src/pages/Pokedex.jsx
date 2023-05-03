import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeBox from '../components/Pokedex/PokeBox'



const Pokedex = () => {

  const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.'

  const [ formUrl, setFormUrl] = useState(pokedexUrl)

  const { trainerName }=useSelector(state => state)

  return (
    <div>
      <h1>Pokedex</h1>
      <p><span>Welcome{trainerName}</span></p>
      <FormPoke pokedexUrl={pokedexUrl} setFormUrl={setFormUrl}/>
      <PokeBox formUrl={formUrl}/>
    </div>
  )
}

export default Pokedex