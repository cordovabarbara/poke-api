import React from 'react'
import './styles/haserror.css'
import poke from '/public/poke.gif'

const HasError = () => {
  return (
    <div className='poke__error'>
    <h1 className='poke__h1'>Sorry this Pokemon doesn't exist, please try again!</h1>
    <img className='poke__gif' src={poke} alt='' />
  </div>
)}


export default HasError