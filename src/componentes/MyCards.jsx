// MyCard.jsx
import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";

function MyCard() {
    const { pokemons, setpokemons, busqueda } = useContext(Contexto);

    // Filtrar pokemons según la búsqueda
    const pokemonsFiltrados = pokemons.filter((pokemon) =>
        pokemon.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    function handleLike(id) {
        const updatedpokemons = pokemons.map((pokemon) => {
            if (pokemon.id === id) {
                return { ...pokemon, likes: (pokemon.likes || 0) + 1 };
            }
            return pokemon;
        });
        setpokemons(updatedpokemons);
    }

    function handleDelete(id) {
        const updatedpokemons = pokemons.filter((pokemon) => pokemon.id !== id);
        setpokemons(updatedpokemons);
    }

    return (
        <div className="card-container">
            {pokemonsFiltrados.map((pokemon) => (
                <div key={pokemon.id} className="card">
                    <div className="card-content">
                        <img className="imgCard" src={pokemon.imagen} alt={pokemon.nombre} />
                        <h2>{pokemon.nombre}</h2>
                        <p>Tipo: {pokemon.tipo}</p>
                        <p>Generacion: {pokemon.generacion}</p>
                        <p>Nivel: {pokemon.nivel}</p>
                    </div>
                    <button className="btnLike" onClick={() => handleLike(pokemon.id)}>
                        Le diste like {pokemon.likes || 0} veces
                    </button>
                    <button className="btnElim" onClick={() => handleDelete(pokemon.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
