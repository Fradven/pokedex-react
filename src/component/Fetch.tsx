import React, {useState, useEffect} from 'react'
import  axios  from 'axios'
import ListPokemon from './ListPokemon';
import './ListPokemon.scss'


export default function Fetch() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState("")
    const [previousPage, setPreviousPage] = useState("")

    //fetch the data from the current page of the api
    const getEvents = async() => {
        const response = axios.get(currentPage)
        
        setNextPage((await response).data.next) //fetch the next page
        setPreviousPage((await response).data.previous)//fetch the previous page

        if (response && (await response).data.results) setEvents((await response).data.results);  //verify the response and input the data into "events"
    }
    
    useEffect(() => {
        getEvents()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    //function to input the "nextPage" into the "currentPage"
    function gotoNextPage () {
        setCurrentPage(nextPage)
    }
    //function to input the "PreviousPage" into "currentPage"
    function gotoPreviousPage () {
        setCurrentPage(previousPage)
    }

    return (
        <>
            <div className="pokemon">
                {/* If "events" is not empty, use ".map" to go through every result and display the, using "ListPokemon" */}
                {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
                <ListPokemon name={event.name} key={event.name} />)}
            </div>
            <div className='page-btn'>
                { previousPage === null ? null : <button onClick={gotoPreviousPage}>Previous</button> }
                { nextPage === null ? null : <button onClick={gotoNextPage}>Next</button> }            
            </div>
        </>
    )
}
