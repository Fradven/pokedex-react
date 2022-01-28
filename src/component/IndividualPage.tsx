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

        <div className="individual-pokemon__sprite">
                <img src={rdmPokemon.sprites?.front_default} alt='sprite'/>
        </div>

        <div className="individual-pokemon__physics">
            <p className="individual-pokemon__height">Height: {rdmPokemon.height}</p>
            <p className="individual-pokemon__weight">Weight: {rdmPokemon.weight}</p>
        </div>

        <div className="individual-pokemon__stats">

            <h3>Base Stats: </h3>

            <ul className="individual-pokemon__stat-ctn">
            {(rdmPokemon.lenght === 0) ? 'loading' : rdmPokemon.stats?.map((statPk: { base_stat: number, stat: {name: string} })=> {
                return <li key={statPk.stat.name}>{statPk.stat.name}: {statPk.base_stat}</li>
            })}
            </ul>

            <div className="pokemon__type">
            {rdmPokemon.types?.map((element : {type: {name: string}}) =>
                <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                )}
            </div>

        </div>
    </div>
}
  </>);
}

export default IndividualPage;
