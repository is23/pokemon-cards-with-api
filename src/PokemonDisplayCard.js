import React from 'react'
import PokemonImage from './PokemonImage'

export default function PokemonDisplayCard(props) {
    const { pokemon } = props;

    return (
        <div className="display-area">
            {pokemon.map(p => (
                <div key={p.name} className="display-card">
                    <div className="card-content">
                        <div className="front">
                            <PokemonImage index={pokemon.indexOf(p)}/>
                            <div>{p.name}</div>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
