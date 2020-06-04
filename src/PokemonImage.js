import React from 'react'

export default function PokemonImage(props) {
    return (
        <div>
            {console.log(props.index)}
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.index + 1}.png`}></img>
        </div>
    )
}
