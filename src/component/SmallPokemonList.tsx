import React, { useEffect, useState } from 'react';
import { axios } from "../javascript/axios.js"
import loading from '../img/loading.gif'

interface Props {
    name: string | undefined
}

interface Pokemon {
    sprites: any
    length: {}
}

const SmallPokemonList: React.FC<Props> = ({ name }) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const getPokemon = async() => {
        const res = await axios.get(`pokemon/${name}`)
        setPokemon(res.data);
    }

    useEffect (() => {
        getPokemon()
        window.scrollTo(0, 0)
    }, [])

  return (
      <>
      {pokemon?.length === 0
       
      ? <div className="pokemon__load-ctn">
            <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>

      : <div className="move__pokemon">
        <div className="move__pokemon-sprtie">
            {pokemon?.sprites.length === 0 ? "loading" : <img src={pokemon?.sprites.front_default} alt='sprite'/>}
        </div>
        <h3 className='move__pokemon-name'>{name}</h3>
        </div>
}
      </>
  );
}

export default SmallPokemonList;
