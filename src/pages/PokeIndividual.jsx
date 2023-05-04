import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeindividual.css'



const PokeIndividual = ({ url }) => {
    const { name } = useParams(url)

    const [pokemon, getPokeByName]= useFetch(url)
  
    useEffect (() => {
      getPokeByName()
    },[name])
  
  return (
    <div>
    <div className='poke__inicio'>
      <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
      <img className="pokemon__sprite" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <div className="pokemon__card">
      <h3 className={`color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
      </div>
      <ul className='poke_list'>
        <li className='poke__weight'>
          <span>Weight</span>{pokemon?.weight}
          </li>
          <li className='poke__height'>
          <span>Height</span>{pokemon?.height}
          </li>
      </ul>
    <ul>
      <li>
        <span>Types</span>{pokemon?.types[0].type.name}{pokemon?.types[1] ? `/ ${pokemon?.types[1].type.name}` : ''} 
      </li>
      <li>
        <span>Skills {pokemon?.abilities[0].ability.name} {pokemon?.abilities[1].ability.name}</span>
      </li>
    </ul>

    <ul className="pokemon__stats">
      <h2>stats</h2>
        <li> HP: <span>{pokemon?.stats[0].base_stat}</span></li>
        <li> Attack: <span>{pokemon?.stats[1].base_stat}</span></li>
        <li> Defense: <span>{pokemon?.stats[2].base_stat}</span></li>
        <li> Speed: <span>{pokemon?.stats[5].base_stat}</span></li>
        </ul>

      <div className='pokemon__move'>
      <h2>Movements</h2>
      <ul className='list__moves'>
        {
          pokemon?.moves.map(objMoves => (
            <li className='list__moves-items' key={objMoves.move.url}> {objMoves.move.name}</li>
            ))
        }
      </ul>
      </div>
      </div>
      
    </div>
  )
}

export default PokeIndividual