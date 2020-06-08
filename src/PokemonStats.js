import React from 'react'

export default function PokemonStats(props) {
    const { stats, index } = props
    //const { index } = props.index
    return (
        <div>
            {stats.map(s => (
                <div key={index + s.stat.name}>{s.stat.name} = {s.base_stat}</div>
            ))}
        </div>
    )
}
