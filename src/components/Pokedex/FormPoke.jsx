import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormPoke = () => {
  const inputPoke = useRef();

 const navigate = useNavigate()

const adminSubmit = e => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path);
  };

return (
  <div>
    <form onSubmit={adminSubmit}>
      <input ref={inputPoke} type="text" />
        <button>Search</button>
    </form>
      <select name="" id="">
        <option value="allPokemos">AllPokemons</option>
      </select>
    </div>
  );
};

export default FormPoke;
