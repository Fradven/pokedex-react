import React, {useState, useEffect} from 'react'
import  axios  from 'axios'
import ListPokemon from './ListPokemon';
import Pagination from './Pagination';


export default function Fetch() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState("")
    const [previousPage, setPreviousPage] = useState("")

    const getEvents = async() => {
        const response = axios.get(currentPage)
        
        setNextPage((await response).data.next)
        setPreviousPage((await response).data.previous)

        if (response && (await response).data.results) setEvents((await response).data.results);  
    }
    
    useEffect(() => {
        getEvents()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    function gotoNextPage () {
        setCurrentPage(nextPage)
    }
    function gotoPreviousPage () {
        setCurrentPage(previousPage)
    }

    return (
        <>
            <h2 className="pokemon__title">Catch them all!</h2>
            <div className="pokemon">

            {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
            <ListPokemon name={event.name} key={event.name} />)}
            </div>
            <Pagination next={gotoNextPage} previous={gotoPreviousPage} />
        </>
    )
}
