import React from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeBox from '../components/Pokedex/PokeBox'



const Pokedex = () => {

  const { trainerName }=useSelector(state => state)

  return (
    <div>
      <h1>Pokedex</h1>
      <p><span>Welcome {trainerName}</span></p>
      <FormPoke/>
      <PokeBox/>
    </div>
  )
}

export default Pokedex