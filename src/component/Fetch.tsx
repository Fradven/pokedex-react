import React, {useState, useEffect } from 'react'
import  axios  from 'axios'
import InfiniteScroll from './infiniteScroll/InfiniteScroll';
import ListPokemon from './ListPokemon';
import './ListPokemon.scss'


export default function Fetch() {
    const [events, setEvents] = useState<any >([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState("")
    const [waitNext, setWaitNext] = useState(false)

    //fetch the data from the current page of the api
    const getEvents = async() => {
        
        const response = await axios.get(currentPage)
        const data = response.data;
        const getNext = (await axios.get(currentPage)).data.next
        console.log("nextPage :" + nextPage)
        console.log("data.next: " + getNext)
        console.log("current: " + currentPage)
        
        if (response && data.results) setEvents((prev: any)=>[...prev, ...data.results]);
        setWaitNext(false)
        
        //setLoading(false)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect (() => {
        console.log("this next:" + nextPage)
        setWaitNext(!waitNext)
        if (waitNext === true) {
            
            setWaitNext(true)
            setCurrentPage(nextPage)
            console.log("current effect: " + currentPage)
        }
    }, [nextPage])

    //function to input the "nextPage" into the "currentPage"
    const gotoNextPage = async() => { 
        setWaitNext(false)
        const response = await axios.get(currentPage)
        const data = response.data;
        const next = data.next;
        setNextPage(await next)
            
        setCurrentPage(nextPage)
        console.log("currentPage : " + currentPage)   
    }
    //function to input the "PreviousPage" into "currentPage"
    /* const gotoPreviousPage = async() => {
        const response = await axios.get(currentPage)
        const data = response.data;
        const previous = data.previous;
        setPreviousPage(previous)

        setCurrentPage(previousPage)
    } */

    

    const hitBottom = () => {
        gotoNextPage();
        getEvents();
    }

    //const hasMoreData = nextPage === null ? true : false
    return (
        <>
        <div className='page-btn'>
                { nextPage === null ? null : <button onClick={gotoNextPage}>Next</button> }            
            </div>
            <InfiniteScroll
                onBottomHit={hitBottom}
    >
                {/* If "events" is not empty, use ".map" to go through every result and display the, using "ListPokemon" */}
                {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
                <ListPokemon name={event.name} key={event.name} />)}
            </InfiniteScroll>

            
        </>
    )
}
