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
    const [physicalLocke, setPhysicalLocke] = useState(false)
    const [specialType, setSpecialType] = useState(false)
    const [specialLocke, setSpecialLocke] = useState(false)
    const [statusType, setStatusType] = useState(false)
    const [statusLocke, setStatusLocke] = useState(false)
    const [pokemon, setPokemon] = useState([])

    const item = "moves"

    const backToPage = () => setPage(false)

    /* const filterDamageClass = () => {
        list.map(async (move: { url: string; }) => {
            const result = await axios.get(move.url)
            console.log(result.data.damage_class)

        })
    } */

    /**
     * Set all filter to false
     */
    const noFilter = () => {
        setPhysicalLocke(false)
        setSpecialLocke(false)
        setStatusLocke(false)
        setPhysicalType(false)
        setSpecialType(false)
        setStatusType(false)
        console.log("no filter")
    }

    //filter to show physical attacks
    const filterPhysical = () => {
        setPhysicalLocke(!physicalLocke)           //set physical lock to opposite at each button press

        if (specialLocke) {                         //if specialLock is true, only filter out status
            setStatusType(true)
            setPhysicalType(false)
        } 
        else if (statusLocke) {                     //if status is true, only filter out special
            setSpecialType(true) 
            setPhysicalType(false)
        } else {                                   //else filter out special et status
            setSpecialType(true)
            setStatusType(true)
        }
    }

    //filter to show special attack
    const filterSpecial = () => {
        setSpecialLocke(!specialLocke)

        if (physicalLocke) {
        setStatusType(true)
        setSpecialType(false)
        }
        else if (statusLocke) {
        setPhysicalType(true)
        setSpecialType(false)
        } else {
            setPhysicalType(true)
            setStatusType(true)
        }
    }

    //filter to show status attack
    const filterStatus = () => {
        setStatusLocke(!statusLocke)
        
        if (specialLocke) {
        setPhysicalType(true)
        setStatusType(false)
        }
        else if (physicalLocke) {
        setSpecialType(true)
        setStatusType(false)
        } else {
            setSpecialType(true)
            setPhysicalType(true)
        }
        console.log("status")
    }

    useEffect (() => {
        setPage(false)
        noFilter()
    }, [list])

    useEffect(() => {
        console.log("physical: " + physicalType)
        console.log("physical locke: " + physicalLocke)
        console.log("special: " + specialType)
        console.log("special locke: " + specialLocke)
        console.log("status: " +statusType)
        console.log("status locke: " +statusLocke)

        if (physicalLocke && specialLocke && statusLocke) noFilter()
    }, [physicalLocke, specialLocke, statusLocke])

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
