import React, { useState, useEffect } from 'react';
import TypeFetch from '../component/TypeFetch';
import ListMoves from '../component/ListMoves';
import { Carousel } from 'react-bootstrap';
import RandomSelector from '../component/RandomSelector';
import SmallPokemonList from '../component/SmallPokemonList';
import '../style/movedex.scss'
import { axios } from '../javascript/axios';


function MoveDex() {
    const [list, setList] = useState<any>([])
    /* const [damageClass, setDamageclass] = useState("") */
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
        console.log("coucou")
        const getPokes = await Promise.all(list.map(pokesMove))
            console.log(await getPokes)
        
        setMoveList(getPokes)
    }

    useEffect (()=> {
        pokemonInMove()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list])

    /* useEffect (()=> {
        console.log(list)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]) */

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

    /* const getUrl = async(element: { damage_class?: { name: string; }; name?: any; url: any; }) => {
        const result = await axios.get(element.url)
        setDamageclass(result.data.damage_class.name)
    } */

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
    })

    useEffect(() => {
        /* console.log("physical: " + physicalType)
        console.log("physical locke: " + physicalLocke)
        console.log("special: " + specialType)
        console.log("special locke: " + specialLocke)
        console.log("status: " +statusType)
        console.log("status locke: " +statusLocke) */

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
                                    <button className="move-dex__physical" onClick={filterPhysical} >Physical</button>
                                    <button className="move-dex__special" onClick={filterSpecial} >Special</button>
                                    <button className="move-dex__status" onClick={filterStatus} >Status</button>
                                </div>
                                {moveList.length === 0 ? "loading" : moveList.filter(filterDamageClass).map((element: { name: string }) => 
                                    <ListMoves 
                                    name={element.name} 
                                    key={element.name} 
                                    setPage={setPage} 
                                    setPokemon={setPokemon}
                                    />
                                    )}
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
