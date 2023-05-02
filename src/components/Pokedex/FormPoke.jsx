import React, { useRef } from "react";

const FormPoke = () => {
  const inputPoke = useRef();

const adminSubmit = e => {
    e.preventDefault();
    console.log(inputPoke.current.value);
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
