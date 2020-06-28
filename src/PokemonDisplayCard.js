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
                            <PokemonImage 
                                index={pokemon.indexOf(p)} 
                                styling={
                                    `front-image-background 
                                    ${typesOfPokemon[pokemon.indexOf(p)+1]}`
                                }
                            />
                            <div className={`pokemon-name-section ${typesOfPokemon[pokemon.indexOf(p)+1]}font`}>
                                <h1>{p.name}</h1>
                            </div>
                        </div>
                        <div className={`back`}>
                            <div className='back-card-name'><h4>{p.name}</h4></div>
                            <PokemonImage 
                                index={pokemon.indexOf(p)} 
                                styling={
                                    `back-image-background `
                                }
                            />
                            <PokemonInfo index={pokemon.indexOf(p)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
