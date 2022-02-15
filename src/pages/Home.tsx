import React, { useState } from 'react';
import '../style/home.scss'
import TypeFetch from '../component/TypeFetch';
import ListPokemon from '../component/ListPokemon';
import Carousel from 'react-bootstrap/Carousel';
import '../style/home.scss'
import RandomSelector from '../component/RandomSelector';

export default function Home() {
    const [list, setList] = useState([])
    const item = "pokemon"

    return (
        <>
            <h2 className='page-name'>Select a Type of Pokémon</h2>
            <TypeFetch setTopList={setList} item={item} />
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
    )}
