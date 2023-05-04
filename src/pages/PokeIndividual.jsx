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

    <div className="name__poke">
      <h3 className={`color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
    </div>


    <div className='poke__block'>
      <div className='poke__info'>
        <span className='poke__value'>Weight</span>{pokemon?.weight}
      </div>
      <div className='poke__info'>
        <span className='poke__value'>Height</span>{pokemon?.height}
      </div>
    </div>
      
  <div className='poke__block2'>
    <div className='poke__info'>
      <span className='poke__value2'>Types</span>
    </div>  
    <div className='poke__info'>
      <span className='poke__value2'>Skills</span>
    </div>
    </div>
  </div>

<div className='poke__block3'>
  <ul className='list__info'>
    {pokemon?.types.map(objType => (
      <li className='type__pokemon' key={objType.type.url}> {objType.type.name}</li>
        ))
      }
  </ul>
  
  <ul className='list__info'>
    {pokemon?.abilities.map(objAbility => (
      <li className='type__pokemon' key={objAbility.ability.url}>{objAbility.ability.name}
        </li>
          ))
      }
  </ul>
</div>




      <ul className="all__stats">
          {
            pokemon?.stats.map(objStat => (
              <li className="pokemon__stats-specific2" key={objStat.stat.url}>
                <span className="pokemon__stats-label">{objStat.stat.name}</span>
                <div className='progressbar' >
                <progress className="progress_bar" min="1" max="150" value={objStat.base_stat}></progress>
                </div>
                <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}
                </span>
              </li>
            ))
          }
        </ul>
      
        <h2>Movements</h2>
        <div className='pokemon__move'>
      <ul className='list__moves'>
        {
          pokemon?.moves.map(objMoves => (
            <li className='list__moves-items' key={objMoves.move.url}> {objMoves.move.name}</li>
            ))
        }
      </ul>
      </div>
      </div>
      
    
  )
}

export default PokeIndividual