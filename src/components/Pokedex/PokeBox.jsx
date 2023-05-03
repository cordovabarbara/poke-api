import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from "./PokeCard"
import './styles/pokebox.css'

const PokeBox = ({ formUrl }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])

  return(
    <div className='poke__box'>
    {
      pokemons?.results
      ?(
      pokemons?.results.map(pokemon => (
        <PokeCard
          key={pokemon.url}
          url={pokemon.url}
        />
      ))
      )
      : (
        pokemons?.pokemon.map(objPoke => (
          <PokeCard
            key={objPoke.pokemon.url}
            url={objPoke.pokemon.url}
          />
        ))
      )
    }
    </div>
  )
}

export default PokeBox