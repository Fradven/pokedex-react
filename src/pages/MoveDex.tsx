import React, { useState } from 'react';
import TypeFetch from '../component/TypeFetch';
import ListMoves from '../component/ListMoves';
import { Carousel } from 'react-bootstrap';
import RandomSelector from '../component/RandomSelector';
import SmallPokemonList from '../component/SmallPokemonList';
import '../style/movedex.scss'

function MoveDex() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(false)
    const [pokemon, setPokemon] = useState([])

    const item = "moves"

    const backToPage = () => setPage(false)
    return (
    <>
        <h2 className='page-name'>Move List</h2>
        <TypeFetch setTopList={setList} item={item} />
        <div className="move-dex">
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
                : !page ? <div className="move-dex__list-page">
                                <div className="move-dex__filter">
                                    <button className="move-dex__physical"></button>
                                    <button className="move-dex__special"></button>
                                    <button className="move-dex__status"></button>
                                </div>
                                {list.map((data: { moves: any, name: string; })=> 
                                <ListMoves name={data.name} key={data.name} setPage={setPage} setPokemon={setPokemon} />)}
                            </div>
                : <div className="move-dex__pokemon">
                    <button onClick={backToPage}>return</button>
                    {pokemon.map((pokes: { name: string | undefined; }) => 
                     <SmallPokemonList name={pokes.name} key={pokes.name} />)}
                </div>
            }
            </div>
    </>
    )
}

export default MoveDex;
