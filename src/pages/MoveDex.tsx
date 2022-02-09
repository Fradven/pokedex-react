import React, { useState, useEffect } from 'react';
import TypeFetch from '../component/TypeFetch';
import ListMoves from '../component/ListMoves';
import { Carousel } from 'react-bootstrap';
import RandomSelector from '../component/RandomSelector';
import SmallPokemonList from '../component/SmallPokemonList';
import '../style/movedex.scss'/* 
import { axios } from '../javascript/axios'; */

function MoveDex() {
    const [list, setList] = useState<any>([])
    const [page, setPage] = useState(false)
    const [physicalType, setPhysicalType] = useState(false)
    const [specialType, setSpecialType] = useState(false)
    const [statusType, setStatusType] = useState(false)
    const [pokemon, setPokemon] = useState([])

    const item = "moves"

    const backToPage = () => setPage(false)

    useEffect (() => {
        setPage(false)
    }, [list])

    /* const filterDamageClass = () => {
        list.map(async (move: { url: string; }) => {
            const result = await axios.get(move.url)
            console.log(result.data.damage_class)

        })
    } */

    const filterPhysical = () => setPhysicalType(!physicalType)
    const filterSpecial = () => setSpecialType(!specialType)
    const filterStatus = () => setStatusType(!statusType)

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
                                    <button className="move-dex__physical" onClick={filterPhysical} >Physical</button>
                                    <button className="move-dex__special" onClick={filterSpecial} >Special</button>
                                    <button className="move-dex__status" onClick={filterStatus} >Status</button>
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
