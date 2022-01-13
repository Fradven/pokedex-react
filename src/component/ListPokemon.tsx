import React, { useState, useEffect } from 'react'
import { axios } from './axios.js'
import './ListPokemon.scss'

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

    /**
     * give the <p> for each type a different class base on their type
     * @param type string
     * @returns type name as string
     */
    const switchType = (type: string) => {
        let color: string | undefined;

        switch(type) {
            case "normal":
                color = "normal";
                break;
            case "fighting":
                color = "fighting";
                break;
            case "flying":
                color = "flying";
                break;
            case "poison":
                color = "poison";
                break;
            case "ground":
                color = "ground";
                break;
            case "rock":
                color = "rock";
                break;
            case "ghost":
                color = "ghost";
                break;
            case "steel":
                color = "steel";
                break;
            case "fire":
                color = "fire";
                break;
            case "water":
                color = "water";
                break;
            case "grass":
                color = "grass";
                break;
            case "electric":
                color = "electric";
                break;
            case "psychic":
                color = "psychic";
                break;
            case "ice":
                color = "ice";
                break;
            case "dragon":
                color = "dragon";
                break;
            case "dark":
                color = "dark";
                break;
            case "fairy":
                color = "fairy";
                break;
            case "unknow":
                color = "unknow";
                break;
            case "shadow":
                color = "shadow";
                break;
            case "bug":
                color = "bug";
                break;
        }

        return color
        
    }
    
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
