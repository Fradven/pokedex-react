import React, { useState, useEffect } from 'react'
import { axios } from './axios.js'
import './ListPokemon.scss'
import { switchType } from './javascript/switchType.js'

interface Props {
    name: string
}

const ListPokemon: React.FC<Props> = ({name}) => {
    const [pokemon, setPokemon] = useState<any>("") //data on a single pokemon

    //fetching data from individual page of pokmeon
    const getPokemon = async() => {
        const res = await axios.get(`${name}`)

        setPokemon(res.data);
    }
    
    useEffect(() => {
        getPokemon()
    }, [])

    
    return (
        <>
        {/* ? : to wait for response for the data*/}
        {pokemon ? 
        <div className='pokemon__card'>

            <p className="pokemon__id">#{pokemon.id}</p>

            <div className="pokemon__sprite">
                <img src={pokemon.sprites.front_default} alt='sprite'/>
            </div>

            <h3 className="pokemon__name">{name}</h3>

            <div className="pokemon__type">
            {pokemon.types.map((element : {type: any}) =>
                <p key={element.type.name} className={switchType(element.type.name)}>{element.type.name}</p>
                )}
            </div>

            <button className="pokemon__detail">More Details</button>

        </div> 
        : <div>Loading</div> } 
         </>
    )
}

export default ListPokemon
