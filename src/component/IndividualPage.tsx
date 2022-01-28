import React, { useState, useEffect } from "react";
import { axios } from './javascript/axios.js'

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
    }, [])

  return (<>
    <div className="individual-pokemon">
        <h2 className="individual-pokemon__name">{rdmPokemon.name}</h2>

        <div className="individual-pokemon__physics">
            <p className="individual-pokemon__height">{rdmPokemon.height}</p>
            <p className="individual-pokemon__weight">{rdmPokemon.weight}</p>
        </div>

        {/* <div className="individual-pokemon__stats">
            <h3>Base Stats: </h3>
            {(rdmPokemon.lenght === 0) ? 'loading' : rdmPokemon.stats.map((stat: { base_stat: number, stat: any })=> {
                return <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
            }
                
            )}
        </div> */}
    </div>
  
  </>);
}

export default IndividualPage;
