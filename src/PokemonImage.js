import React from 'react'

export default function PokemonImage(props) {
    return (
        <div>
            {console.log(props.index)}
            <img src={process.env.PUBLIC_URL + `/images/allPokemonImages/image${props.index + 1}.png`}></img>
        </div>
    )
}
