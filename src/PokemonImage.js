import React from 'react'

export default function PokemonImage(props) {
    const {index, type, styling} = props
    
    return (
        <div className={`${styling}`}>
            <img alt={index} src={process.env.PUBLIC_URL + `/images/allPokemonImages/image${index + 1}.png`}></img>
        </div>
    )
}
