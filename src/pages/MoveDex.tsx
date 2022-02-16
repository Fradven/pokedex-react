import React, { useState, useEffect } from 'react';
import TypeFetch from '../component/TypeFetch';
import ListMoves from '../component/ListMoves';
import { Carousel } from 'react-bootstrap';
import RandomSelector from '../component/RandomSelector';
import SmallPokemonList from '../component/SmallPokemonList';
import '../style/movedex.scss'
import { axios } from '../javascript/axios';
import loading from '../img/loading.gif'


function MoveDex() {
    const [list, setList] = useState([])
    const [moveList, setMoveList] = useState<any>([])
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


    const pokesMove = async(attack: { url: string; }) => {
        const result = await axios.get(attack.url)
        return result.data}

    const pokemonInMove = async() => {
        const getPokes = await Promise.all(list.map(pokesMove))
        setMoveList(getPokes)
    }

    useEffect (()=> {
        pokemonInMove()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list])

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
    }

    //filter to show physical attacks
    const filterPhysical = () => {          //set physical lock to opposite at each button press

        if (specialLocke) {                         //if specialLock is true, only filter out status
            setStatusType(true)
            setPhysicalType(false)
            if (physicalLocke) setPhysicalType(true)
        } 
        else if (statusLocke) {                     //if status is true, only filter out special
            setSpecialType(true) 
            setPhysicalType(false)
            if (physicalLocke) setPhysicalType(true)
        } else {                                   //else filter out special et status
            setSpecialType(true)
            setStatusType(true)
            if (physicalLocke) {
                setSpecialType(false)
                setStatusType(false)
            }
        }
        setPhysicalLocke(!physicalLocke) 
    }

    //filter to show special attack
    const filterSpecial = () => {

        if (physicalLocke) {
        setStatusType(true)
        setSpecialType(false)
        if (specialLocke) setSpecialType(true)
        }
        else if (statusLocke) {
        setPhysicalType(true)
        setSpecialType(false)
        if (specialLocke) setSpecialType(true)
        } else {
            setPhysicalType(true)
            setStatusType(true)
            if (specialLocke) {
                setPhysicalType(false)
                setStatusType(false)
            }
        }
        setSpecialLocke(!specialLocke)
    }

    //filter to show status attack
    const filterStatus = () => {
        
        if (specialLocke) {
        setPhysicalType(true)
        setStatusType(false)
        if (statusLocke) setStatusType(true)
        }
        else if (physicalLocke) {
        setSpecialType(true)
        setStatusType(false)
        if (statusLocke) setStatusType(true)
        } else {
            setSpecialType(true)
            setPhysicalType(true)
            if (statusLocke) {
                setSpecialType(false)
                setPhysicalType(false)
            }
        }

        setStatusLocke(!statusLocke)
    }

    useEffect (() => {
        setPage(false)
        noFilter()
    }, [list])

    /**
     * filterout move list based on their class and active locks
     * @param element : {damage_class : {name: string}}
     * @returns filtered list based on attack class
     */
    const filterDamageClass = ((element: { damage_class: { name: string; }}) => {

        if (physicalType === false && specialType === true && statusType === true) {
            return  element.damage_class.name === "physical"
        }
        
         if (specialType === false && physicalType === true && statusType === true ) {
            return element.damage_class.name === "special"
        }
        
         if (statusType === false && physicalType === true && specialType === true) {          
            return  element.damage_class.name === "status"
        }
        
         if (specialType === false && physicalType === false && statusType === true ) {         
            return (element.damage_class.name === "special" || element.damage_class.name === "physical")
        }
        
         if (specialType === false && statusType === false && physicalType === true ) {            
            return (element.damage_class.name === "special" || element.damage_class.name === "status")
        }
        
         if (physicalType === false && statusType === false && specialType === true ) {
            return (element.damage_class.name === "physical" || element.damage_class.name === "status")
        }
         if (physicalType === false && statusType === false && specialType === false ) {
            return (element.damage_class.name === "physical" || element.damage_class.name === "status" || element.damage_class.name === "special")
        }
    })

    useEffect(() => {
        if (physicalLocke && specialLocke && statusLocke) noFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                    <button 
                                    className={!physicalLocke ? "move-dex__physical" : "move-dex__physicalLock"} 
                                    onClick={filterPhysical}
                                    >Physical</button>
                                    <button 
                                    className={!specialLocke ? "move-dex__special" : "move-dex__specialLock"} 
                                    onClick={filterSpecial} 
                                    >Special</button>
                                    <button 
                                    className={!statusLocke ? "move-dex__status" : "move-dex__statusLock"} 
                                    onClick={filterStatus} 
                                    >Status</button>
                                </div>
                                {moveList.length === 0 
                                ? <div className="pokemon__load-ctn">
                                    <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
                                </div>
                                : moveList.filter(filterDamageClass).map((element: { name: string }) => 
                                    <ListMoves 
                                    name={element.name} 
                                    key={element.name} 
                                    setPage={setPage} 
                                    setPokemon={setPokemon}
                                    />
                                )}
                            </div>
                : <div className="move-dex__pokemon">
                    <button className='move-dex__return-btn' onClick={backToPage}>return</button>
                    {pokemon.map((pokes: { name: string | undefined; }) => 
                     <SmallPokemonList name={pokes.name} key={pokes.name} />)}
                </div>
            }
            </div>
    </>
    )
}

export default MoveDex;
