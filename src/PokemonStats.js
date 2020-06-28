import React from 'react'

export default function PokemonStats(props) {
    const { stats, index } = props
    //const { index } = props.index
    return (
        <div className="pokeStat">
            <div className="box">
                {stats.map(s => (
                    <>
                    <div key={index + s.stat.name}>
                        {s.stat.name}: 
                        <div className="statNumber">
                            {s.base_stat}
                        </div>
                    </div>
                    <div key={index + s.stat.name + index} className="statBar" style={{width: s.base_stat}}></div>
                    </>
                ))}
            </div>
        </div>
    )
}
