import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import './styles/home.css'
import pokewelcome from '/public/pokewelcome.png'
import pikachu from '/public/pikachu.jpg'



const Home = () => {
  return (
    <div className='poke__welcome'>
    <img className='poke__img' src={pokewelcome} alt='' />
    <h2 className='poke__hello'>Welcome Trainer!</h2>
    <p> Please give us your name to start</p>
    <FormNameUser/>
    <img className='poke__init' src={pikachu} alt='' />

    </div>
  )
}

export default Home