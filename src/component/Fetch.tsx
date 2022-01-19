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
    const [loading, setLoading] = useState(false)


    //fetch the data from the current page of the api
    const getEvents = async() => {
        
        const response = await axios.get(currentPage)
        const data = response.data;
        /* const getNext = (await axios.get(currentPage)).data.next */
        const next = data.next;
        setLoading(true)
        setNextPage(await next)
        
        if (response && data.results) setEvents((prev: any)=>[...prev, ...data.results]);
        setWaitNext(false)
        setLoading(false)
    }

    const checkNext = async() => {
        const getNext = (await axios.get(currentPage)).data.next

        if (getNext !== nextPage) {
            console.log("uwu")
            setWaitNext(false)
        } else {
            console.log("owo")
            setWaitNext(true)
        }

    }

    useEffect (() => {
        console.log("next page in useEffect:" + nextPage)
        checkNext()
        if (waitNext === true) {
            setWaitNext(false)
            console.log("currentPage in useEffect: " + currentPage)
        }
    }, [nextPage])

    //function to input the "nextPage" into the "currentPage"
    const gotoNextPage = async() => { 
        setWaitNext(false)

        setCurrentPage(nextPage)
        console.log("currentPage in gotoNext : " + currentPage)   
    }
    
    const hitBottom = async() => {
        const getNext = (await axios.get(currentPage)).data.next
        if (getNext !== nextPage) {
            console.log("do it")
            setCurrentPage(getNext)
            getEvents()
        } else {
            console.log("do not")
            gotoNextPage()
            getEvents()
        }
    }

    const hasMoreData = nextPage !== null ? true : false
    return (
        <>
        <div className='page-btn'>
                {/*  nextPage === null ? null : <button onClick={gotoNextPage}>Next</button>  */}            
            </div>
            <InfiniteScroll
                onBottomHit={hitBottom}
                hasMoreData={hasMoreData}
                isLoading={loading}
                loadOnMount={true}
    >
                {/* If "events" is not empty, use ".map" to go through every result and display the, using "ListPokemon" */}
                {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
                <ListPokemon name={event.name} key={event.name} />)}
            </InfiniteScroll>

            
        </>
    )
}
