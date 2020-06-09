import React from 'react'
import PokemonImage from './PokemonImage'
import PokemonInfo from './PokemonInfo'
import axios from 'axios'

export default function PokemonDisplayCard(props) {
    const { pokemon,  typesOfPokemon } = props;

    return (
        <div className="display-area">
            {pokemon.map(p => (
                <div key={p.name} className="display-card">
                    <div className="card-content">
                        <div className="front">
                            <PokemonImage index={pokemon.indexOf(p)} type={typesOfPokemon[pokemon.indexOf(p)+1]}/>
                            <div className={`pokemon-name-section ${typesOfPokemon[pokemon.indexOf(p)+1]}font`}>{p.name}</div>
                        </div>
                        <div className="back">
                            <div>{p.name}</div>
                            <PokemonInfo index={pokemon.indexOf(p)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
