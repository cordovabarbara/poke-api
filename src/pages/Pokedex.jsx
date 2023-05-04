import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeBox from '../components/Pokedex/PokeBox'
import './styles/pokedex.css'
import pokewelcome from '/public/pokewelcome.png'




const Pokedex = () => {

  const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0.'

  const [ formUrl, setFormUrl] = useState(pokedexUrl)

  const { trainerName }=useSelector(state => state)

  return (
    <div className='poke'>
    <section className='poke__header'>
          <div className='header__red'>line</div>
          <div className='poke__ball'>
          <div class="poke__ball1"></div>
          <div class="poke__ball2"></div>
          <div class="poke__ball3"></div>
          <div class="poke__ball4"></div>
          </div>
          <div className='end__black'></div>
        </section>
      <img className='poke__wel' src={pokewelcome}></img>
      <p><span className='pokedex__name'>Welcome {trainerName}!</span></p>
      <FormPoke pokedexUrl={pokedexUrl} setFormUrl={setFormUrl}/>
      <PokeBox formUrl={formUrl}/>
    </div>
  )
}

export default Pokedex