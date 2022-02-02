import React, { useState, useEffect } from 'react'
import { axios } from './javascript/axios.js'
import loading from '../img/loading.gif'
import './ListPokemon.scss'
import IndividualPage from './IndividualPage'

interface TypeArray {
    type: {name: string},
    element: {}
}

interface AbilityArray {
    ability: {name: string}, 
    is_hidden: boolean,
    data: {}
}

interface StatsArray {
    base_stat: number,
    stat: {name: string}
}

interface Props {
    name: {
        name: string,
        types: Array<TypeArray>,
        sprites: any,
        height: number,
        weight: number,
        lenght: {},
        abilities: Array<AbilityArray>,
        stats: Array<StatsArray>
        }
}

const ListPokemon: React.FC<Props> = ({name}) => {
    const [pokemon, setPokemon] = useState<any>("") //data on a single pokemon

    //fetching data from individual page of pokmeon
    const getPokemon = async() => {
        const res = await axios.get(`${name}`)

        setPokemon(res.data);
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {pokemon.types.map((element : {type: {name: string}}) =>
                <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                )}
            </div>

            <button className="pokemon__detail">More Details</button>

        </div> 
        : <div className="pokemon__load-ctn">
            <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>
            } 
        <div className="popup">
            <IndividualPage name={name} />
        </div>
        </>
    )
}

export default ListPokemon
