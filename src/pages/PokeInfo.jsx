
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import HasError from '../components/Pokedex/HasError'
import PokeIndividual from './PokeIndividual'


const PokeInfo = () => {

  const { name } = useParams()

  const url = ` https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokeByName, hasError]= useFetch(url)

  useEffect (() => {
    getPokeByName()
  },[name])

  console.log(pokemon);
  return (
    <div>
    {
      hasError
      ? <HasError/>
      : <PokeIndividual url={url}/>
    }
  </div>
  )

  }

export default PokeInfo

