import React, { useState } from 'react';
import '../style/home.scss'
import TypeFetch from '../component/TypeFetch';
import ListPokemon from '../component/ListPokemon';
import Carousel from 'react-bootstrap/Carousel';
import RandomSelector from '../component/RandomSelector';
import '../style/home.scss'

export default function Home() {
    const [list, setList] = useState([])
    const item = "pokemon"

    return (
        <>
            <h2 className='page-name'>Select a Type of Pokémon</h2>
            
            <div className="type-container">
                <TypeFetch setTopList={setList} item={item} />
            </div>
            
            <div className="pokemon">
                {(list.length === 0) 
                ? <div className="pokemon__carousel">
                    <Carousel variant="dark" controls={false} touch>
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
                    </div>
                : list.map((data: { pokemon: any, name: string; })=> 
                <ListPokemon name={data.pokemon.name} key={data.pokemon.name} />
                )}
            </div>
        </>
    )}
