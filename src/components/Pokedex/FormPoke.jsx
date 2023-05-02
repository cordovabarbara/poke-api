import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const FormPoke = () => {
  const inputPoke = useRef();

  const url = 'https://pokeapi.co/api/v2/type/'
  const [ types, getTypes ] = useFetch (url)

  useEffect (() =>{
    getTypes ()
  }, [])


 const navigate = useNavigate()

const adminSubmit = e => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path);
  }

  const handleChange = e => {
    e.target.value

  }

return (
  <div>
    <form onSubmit={adminSubmit}>
      <input ref={inputPoke} type="text" />
        <button>Search</button>
    </form>
      <select onChange={handleChange}>
        <option value="allPokemos">All Pokemons</option>
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
  );
};

export default FormPoke;
