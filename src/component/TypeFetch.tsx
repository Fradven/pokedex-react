import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import ButtonFetch from '../component/ButtonFetch';
import ListPokemon from '../component/ListPokemon';
import Carousel from 'react-bootstrap/Carousel';
import '../style/home.scss'
import RandomSelector from '../component/RandomSelector';

function TypeFetch() {
    const [type, setType] = useState([])
    const [list, setList] = useState([])

    const getPokemon = async() => {
        const res = await axios.get(`type`)

        setType(res.data.results);
    }

    useEffect (() => {
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
      <>
    <div className="type-page">
    {(type.length === 0) ? 'loading' : type.map((data: { name: string; })=> {
        return (
            <div key={data.name} className="type-page__type">
                <ButtonFetch name={data.name} setPokemon={setList} />

            </div>
        )
    })}
</div>
<div className="pokemon">
    {(list.length === 0) 
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
    : list.map((data: { pokemon: any, name: string; })=> 
    <ListPokemon name={data.pokemon.name} key={data.pokemon.name} />
    )}
</div>
    </>
  )
}

export default TypeFetch;
