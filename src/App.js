import React, {useState, useEffect} from 'react';
import PokemonDisplayCard from './PokemonDisplayCard'
import Header from './Header'
import pokemonName from './json/allPokemon.json'
import PokemonsType from './json/allPokemonType.json'
import './stylesheets/App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonsType, setPokemonType] = useState({})

  useEffect(() => {
    /*axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then( res => {
      setPokemon(res.data.results.map(p => p))
    })*/
    setPokemon(pokemonName.results.map(p => p))
    setPokemonType(PokemonsType)
    
  }, [])
    
  return (
    <>
      <Header />
      <PokemonDisplayCard pokemon={pokemon} typesOfPokemon={pokemonsType} />
    </>
  );
}

export default App;
