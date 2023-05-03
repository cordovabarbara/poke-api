import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import './styles/formpoke.css'

const FormPoke = ({ setFormUrl, pokedexUrl }) => {
  const inputPoke = useRef();

  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/type/'
  const [ types, getTypes ] = useFetch (url)

  useEffect (() =>{
    getTypes ()
  }, [])


 

const adminSubmit = e => {
    e.preventDefault()
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path);
  }

  const handleChange = e => {
    setFormUrl(e.target.value);

  }

return (
  <div className="poke__form">
    <form onSubmit={adminSubmit}>
      <input ref={inputPoke} type="text" />
        <button>Search</button>
    </form>
      <select onChange={handleChange}>
        <option className="poke__option" value={pokedexUrl}>All Pokemons</option>     
        {
          types?.results.map(type => (
            <option 
            key={type.url}
            value={type.url}
            >{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default FormPoke;
