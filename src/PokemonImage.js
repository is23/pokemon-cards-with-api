import React from 'react'

export default function PokemonImage(props) {
    const {index, type} = props
    
    return (
        <div className={`front-image-background ${type}`}>
            <img alt={index} src={process.env.PUBLIC_URL + `/images/allPokemonImages/image${index + 1}.png`}></img>
        </div>
    )
}
