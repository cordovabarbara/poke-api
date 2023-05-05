import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeBox from '../components/Pokedex/PokeBox'
import './styles/pokedex.css'
import pokewelcome from '/public/pokewelcome.png'
import Posts from './Posts'



const Pokedex = () => {

  const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0..'

  const [ formUrl, setFormUrl] = useState(pokedexUrl)

  const { trainerName }=useSelector(state => state)

  return (
    <div className='poke'>
    <section className='poke__header'>
          <div className='header__red'>line</div>
          <div className='poke__ball'>
          <div className="poke__ball1"></div>
          <div className="poke__ball2"></div>
          <div className="poke__ball3"></div>
          <img className='poke__wel' src={pokewelcome}></img>
          <div className="poke__ball4"></div>
          </div>
          <div className='end__black'></div>
        </section>
       
      <div className='poke__saludo'>
      <p><span className='pokedex__name'>Welcome {trainerName}!</span></p>
      <p className='poke_find'> Find your favorite pokemon!</p>
      <FormPoke pokedexUrl={pokedexUrl} setFormUrl={setFormUrl}/>
      <PokeBox formUrl={formUrl}/>
      </div>
      
    </div>
  )
}

export default Pokedex