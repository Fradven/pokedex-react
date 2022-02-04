import React, { useState, useEffect } from "react";
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'
import '../style/individualPage.scss'

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
    name: string | undefined
    show?:  boolean
    openPopup?: () => void
}

interface Pokemon {

        name?: string,
        types?: Array<TypeArray>,
        sprites?: any,
        height?: number,
        weight?: number,
        lenght?: {},
        abilities?: Array<AbilityArray>,
        stats?: Array<StatsArray>
        
}
const IndividualPage: React.FC<Props> = ({ name, show, openPopup }) => {
    const [pokemon, setPokemon] = useState<Pokemon>({}) //data on a single pokemon

    //fetching data from individual page of pokmeon
    const getPokemon = async() => {
        const res = await axios.get(`pokemon/${name}`)

        setPokemon(res.data);
    }

    useEffect(() => {
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
  <>
  {pokemon.lenght === 0
  ? 
    <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
    </div>
  :
    <div className="individual-pokemon">
        <h2 className="individual-pokemon__name">{pokemon.name}</h2>
        <div className="individual-pokemon__main-ctn">

            <div className="individual-pokemon__left-ctn">

                <div className="pokemon__type">
                    {pokemon.types?.map((element) =>
                        <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                        )}
                    </div>

                <div className="individual-pokemon__sprite">
                        <img src={pokemon.sprites?.front_default} alt='sprite'/>
                </div>

                <div className="individual-pokemon__physics">
                    <p className="individual-pokemon__height">Height: {pokemon.height}</p>
                    <p className="individual-pokemon__weight">Weight: {pokemon.weight}</p>
                </div>
            </div>

            <div className="individual-pokemon__right-ctn">
                <div className="individual-pokemon__abilities">
                    <h3>Abilities: </h3>
                    <ul className="individual-pokemon__abilities-ctn">

                    {pokemon.abilities?.map(data => {
                        if (data.is_hidden === true) {
                            return <li key={data.ability.name} className="individual-pokemon__ability hidden">Hidden: {data.ability.name}</li>
                        } else {
                            return <li key={data.ability.name} className="individual-pokemon__ability">{data.ability.name}</li>
                        }
                    })}

                    </ul>
                </div>

                <div className="individual-pokemon__stats">

                    <h3>Base Stats: </h3>

                    <ul className="individual-pokemon__stat-ctn">
                    {pokemon.stats?.map((stat)=> {
                        if (stat.stat.name === 'special-defense') {
                            return <li key={stat.stat.name}>sp.def: {stat.base_stat}</li>
                        } else if (stat.stat.name === 'special-attack') {
                            return <li key={stat.stat.name}>sp.atk: {stat.base_stat}</li>
                        } else {
                        return <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                        }
                    })}
                    </ul>



                </div>
            </div>
        </div>
        <button 
            style={{
                visibility: show ? "visible": "hidden",
                opacity: show ? "1" : "0"
            }}
            onClick={openPopup}
        >Less</button>
    </div>
}
  </>);
}

export default IndividualPage;
