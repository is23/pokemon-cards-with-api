import React from 'react'

export default function PokemonDisplayCard(props) {
    const { pokemon } = props;
    return (
        <div className="display-area">
            {/*image of each pokemon component*/}
            {/*name of each pokemon component*/}
            {pokemon.map(p => (
                <div className="display-card">
                    <div className="card-content">
                        <div className="front"></div>
                        <div className="back"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
