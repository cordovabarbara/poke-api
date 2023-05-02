
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const PokeInfo = () => {

  const { name } = useParams()

  const url = ` https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokeByName, hasError]= useFetch(url)

  useEffect (() => {
    getPokeByName()
  },[name])

  console.log(pokemon)

  return (
    <div>
    {
      hasError
      ? <h1> Try again, this pokemon not exist</h1>
      : <>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </>
    }
  
    </div>
  )
}

export default PokeInfo