import React, { useState, useEffect } from 'react';
import { axios } from './javascript/axios.js'
import ButtonFetch from './reusable/ButtonFetch';
import ListPokemon from './ListPokemon';
import './home.scss'

export default function Home() {
    const [type, setType] = useState<any>([])
    const [listPokemon, setListPokemon] = useState<any>([])

    const link = `https://pokeapi.co/api/v2/type/`
    const getPokemon = async() => {
        const res = await axios.get(link)

        setType(res.data.results);
    }

    useEffect (() => {
        getPokemon()
    }, [])

    useEffect (() => {
        console.log(listPokemon)
    }, [listPokemon])
    return (
        <>
            <h2 className='page-name'>Home</h2>
            <div className="type-page">
                {(type.length === 0) ? 'loading' : type.map((data: { name: string; })=> {
                    return (
                        <div key={data.name} className="pokemon__type">
                            <ButtonFetch link={link} name={data.name} setPokemon={setListPokemon} />

                        </div>
                    )
                })}
            </div>
            <div className="list-by-type">
                {(listPokemon.length === 0) ? 'loading' : listPokemon.map((data: { pokemon: any, name: string; })=> 
                    <ListPokemon name={data.pokemon.name} key={data.pokemon.name} />
                )}
            </div>
        </>
    )}
