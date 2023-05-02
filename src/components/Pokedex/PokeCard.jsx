import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeCard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemonById  ] = useFetch(url)

  useEffect (() => {
    getPokemonById()
  },[]);

  return (
    <div  className={`pokemon color__border-${pokemon?.types[0].type.name}`}>
      <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
        <img className="pokemon__sprite"  src={pokemon?.sprites.other['official-artwork'].front_default } alt=""/>
      </header>
        <div className="pokemon__card">
          <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <ul className="pokemon__types">
            {
              pokemon?.types.map(objType => (
                <li className="pokemon__specific" key={objType.type.url}>{objType.type.name}</li>
              ))
            }
          </ul>
          <ul className="pokemon__stats">
            {
              pokemon?.stats.map(objStats =>(
                <li className="pokemon__stats-specific"  key={objStats.stat.url}>
                  <span className="pokemon__stats-label">{objStats.stat.name}</span>
                  <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{objStats.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  );
};

export default PokeCard;