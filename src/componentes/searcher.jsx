import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="search">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar Pokemons..."
          onChange={handleSearch}
        />
      </div>
    </nav>
  );
}

export default Navbar;
