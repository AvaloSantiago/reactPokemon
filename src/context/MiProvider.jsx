import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [pokemons, setpokemons] = useState([
        {
          id: 1,
          imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          nombre: "Bulbasaur",
          tipo: "Planta/Veneno",
          generacion: 1,
          nivel: 5,
        },
        {
          id: 2,
          imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
          nombre: "Ivysaur",
          tipo: "Planta/Veneno",
          generacion: 1,
          nivel: 16,
        },
        {
          id: 3,
          imagen:
            "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/800px-Venusaur.png",
          nombre: "Venusaur",
          tipo: "Planta/Veneno",
          generacion: 1,
          nivel: 32,
        },
        {
          id: 4,
          imagen:
            "https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png",
          nombre: "Charmander",
          tipo: "Fuego",
          generacion: 1,
          nivel: 5,
        },
        {
          id: 5,
          imagen:
            "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fb/latest/20200411222755/Charmeleon.png/800px-Charmeleon.png",
          nombre: "Charmeleon",
          tipo: "Fuego",
          generacion: 1,
          nivel: 16,
        },
        {
          id: 6,
          imagen:
            "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/640px-Charizard.png",
          nombre: "Charizard",
          tipo: "Fuego/Volador",
          generacion: 1,
          nivel: 36,
        },
      ]);
      
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ pokemons, setpokemons, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}