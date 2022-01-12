import React, { useState, useEffect } from 'react'
import { axios } from './axios.js'
import './ListPokemon.scss'

interface Props {
    name: string
}

const ListPokemon: React.FC<Props> = ({name}) => {
    const [pokemon, setPokemon] = useState<any>("")

    const getPokemon = async() => {
        const res = await axios.get(`${name}`)

        setPokemon(res.data);
    }
    
    useEffect(() => {
        getPokemon()
    }, [])
    console.log(pokemon)
    
    return (
        <>
        {pokemon ? 
        <div className='pokemon__card'>

            <p className="pokemon__height">#{pokemon.id}</p>
            <div className="pokemon__sprite">
                <img src={pokemon.sprites.front_default} />
            </div>
            <h3 className="pokemon__name">{name}</h3>
            <button className="pokemon__detail">More Details</button>
        </div> 
        : <div>Loading</div> } 
            </>
    )
}

export default ListPokemon
