import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from "./PokeCard"

const PokeBox = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.'
  const [pokemons, getAllPokemons] = useFetch(url)

  useEffect(() => {
    getAllPokemons()
  }, [])

  return(
    <div className='poke__box'>
    {
      pokemons?.results.map(pokemon => (
        <PokeCard
          key={pokemon.url}
          url={pokemon.url}
        />
      ))
    }
    </div>
  )
}

export default PokeBox