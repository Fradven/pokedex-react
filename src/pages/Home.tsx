import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import ButtonFetch from '../component/ButtonFetch';
import ListPokemon from '../component/ListPokemon';
import Carousel from 'react-bootstrap/Carousel';
import '../style/home.scss'
import RandomSelector from '../component/RandomSelector';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h2 className='page-name'>Select a Type of Pokémon</h2>
            <div className="type-page">
                {(type.length === 0) ? 'loading' : type.map((data: { name: string; })=> {
                    return (
                        <div key={data.name} className="type-page__type">
                            <ButtonFetch link={link} name={data.name} setPokemon={setListPokemon} />

                        </div>
                    )
                })}
            </div>
            <div className="pokemon">
                {(listPokemon.length === 0) 
                ? <Carousel controls={false} fade>
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                </Carousel>
                : listPokemon.map((data: { pokemon: any, name: string; })=> 
                    <ListPokemon name={data.pokemon.name} key={data.pokemon.name} />
                )}
            </div>
        </>
    )}