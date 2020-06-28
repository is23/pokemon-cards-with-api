import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonStats from './PokemonStats'


export default function PokemonInfo(props) {

    const {index} = props
    const [pokemonWeight, setPokemonWeight] = useState()
    const [pokemonHeight, setPokemonHeight] = useState()
    const [pokemonType, setPokemonType] = useState([])
    const [pokemonStat, setPokemonStat] = useState([])
// need to set 
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then( res => {
            setPokemonWeight(res.data.weight)
            setPokemonHeight(res.data.height)
            setPokemonType(res.data.types)
            setPokemonStat(res.data.stats)
        })
    }, [])

    return (
        <div className="pokeInfo-area">
            <div className="weight-height">
                <div className="box center-box">
                    <p>Height: {pokemonHeight}</p>
                    <p>Weight: {pokemonWeight}</p>
                </div>
            </div>
            <div className="types">
                <div className="box center-box">
                    {pokemonType.map(t => (
                        <div key={index + t.type.name}> {t.type.name} </div>    
                    ))}
                </div>
            </div>
            <PokemonStats stats={pokemonStat} index={index} />
        </div>
    )
}
