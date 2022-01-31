import React, { useState, useEffect } from "react";
import { axios } from './javascript/axios.js'
import loading from '../img/loading.gif'
import './individualPage.scss'

function IndividualPage() {
    const [rdmPokemon, setRdmPokemon] = useState<any>([])

    const randomNumber = () => {
        let x = Math.floor((Math.random() * 1000) + 1)
        return x
    }
    const getRandomPokemon = async() => {
        const res = await axios.get(`${randomNumber()}`)
        console.log(res)

        if (res && res.data) setRdmPokemon(res.data)
    }

    useEffect (() => {
        getRandomPokemon()
        console.log(rdmPokemon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
  <>
  {!rdmPokemon 
  ? 
    <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
    </div>
  :
    <div className="individual-pokemon">
        <h2 className="individual-pokemon__name">{rdmPokemon.name}</h2>
        <div className="individual-pokemon__main-ctn">

            <div className="individual-pokemon__left-ctn">

                <div className="pokemon__type">
                    {rdmPokemon.types?.map((element : {type: {name: string}}) =>
                        <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                        )}
                    </div>

                <div className="individual-pokemon__sprite">
                        <img src={rdmPokemon.sprites?.front_default} alt='sprite'/>
                </div>

                <div className="individual-pokemon__physics">
                    <p className="individual-pokemon__height">Height: {rdmPokemon.height}</p>
                    <p className="individual-pokemon__weight">Weight: {rdmPokemon.weight}</p>
                </div>
            </div>

            <div className="individual-pokemon__right-ctn">
                <div className="individual-pokemon__abilities">
                    <h3>Abilities: </h3>
                    <ul className="individual-pokemon__abilities-ctn">

                    {(rdmPokemon.lenght === 0) ? "loading" : rdmPokemon.abilities?.map((data: { ability: {name: string}, is_hidden: boolean }, index: React.Key | null | undefined) => {
                        if (data.is_hidden === true) {
                            return <li key={index} className="individual-pokemon__ability hidden">Hidden: {data.ability.name}</li>
                        } else {
                            return <li key={index} className="individual-pokemon__ability">{data.ability.name}</li>
                        }
                    })}

                    </ul>
                </div>

                <div className="individual-pokemon__stats">

                    <h3>Base Stats: </h3>

                    <ul className="individual-pokemon__stat-ctn">
                    {(rdmPokemon.lenght === 0) ? 'loading' : rdmPokemon.stats?.map((stat: { base_stat: number, stat: {name: string} })=> {
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
    </div>
}
  </>);
}

export default IndividualPage;
