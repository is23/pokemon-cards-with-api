import React, {useState, useEffect} from 'react';
import PokemonDisplayCard from './PokemonDisplayCard'
import Header from './Header'
import axios from 'axios'
import './stylesheets/App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then( res => {
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [])

  return (
    <>
      <Header />
      <PokemonDisplayCard pokemon={pokemon} />
    </>
  );
}

export default App;
