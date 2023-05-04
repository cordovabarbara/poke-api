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

      <ul className='poke_list'>
        <li className='poke__weight'>
          <span>Weight</span>{pokemon?.weight}
          </li>
          <li className='poke__height'>
          <span>Height</span>{pokemon?.height}
          </li>
      </ul>

      <ul className='poke_list'>
        <li className='poke__weight'>
        <span>Types</span>
        </li>
        <li className='poke__height'>
          <span>Skilss</span>
          </li>
      </ul>

      
      <ul>
          {
            pokemon?.types.map(objType => (
              <li className='type__pokemon' key={objType.type.url}>
              {objType.type.name}</li>
            ))
          }
      </ul>

        <ul >{
            pokemon?.abilities.map(objAbility => (
                <li className='lista__type-specifics' key={objAbility.ability.url}>{objAbility.ability.name}</li>
            ))
            }
        </ul>


      <ul className="all__stats">
          {
            pokemon?.stats.map(objStat => (
              <li className="pokemon__stats-specific2" key={objStat.stat.url}>
                <span className="pokemon__stats-label">{objStat.stat.name}</span>
                <div className='progressbar' >
                <progress className="progress_bar" min="1" max="150" value={objStat.base_stat}></progress>
                </div>
                <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>
              </li>
            ))
          }
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