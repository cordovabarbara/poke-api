import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeCard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemonById  ] = useFetch(url)

  useEffect (() => {
    getPokemonById()
  },[])

  return (
    <div  className="pokemon">
      <header className="pokemon__header">
        <img className="pokemon__sprite"  src={pokemon?.sprites.other['official-artwork'].front_default } alt=""/>
      </header>
        <div className="pokemon__body">
          <h3 className="pokemon__name">{pokemon?.name}</h3>
          <ul className="pokemon__types">
            {
              pokemon?.types.map(objType =>(
                <li className="pokemon__type-specific" key={objType.type.url}>{objType.type.name}</li>
              ))
            }
          </ul>
          <ul className="pokemon__stats">
            {
              pokemon?.stats.map(objStats =>(
                <li className="pokemon__stats-specific"  key={objStats.stat.url}>
                  <span className="pokemon__stats-label">{objStats.stat.name}</span>
                  <span className="pokeon__stats-value">{objStats.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default PokeCard