import React, {useState } from 'react'
import  axios  from 'axios'
import InfiniteScroll from './infiniteScroll/InfiniteScroll';
import ListPokemon from './ListPokemon';
import './ListPokemon.scss'


export default function Fetch() {
    const [events, setEvents] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState("")
    const [loading, setLoading] = useState(false)


    //fetch the data from the current page of the api
    const getEvents = async() => {
        
        const response = await axios.get(currentPage)
        const data = response.data;
        const next = data.next;
        setLoading(true)
        setNextPage(await next)
        
        if (response && data.results) setEvents((prev: any)=>[...prev, ...data.results]);
        setLoading(false)
    }
    
    const hitBottom = async() => {
        const getNext = (await axios.get(currentPage)).data.next
        if (getNext !== nextPage) {
            setCurrentPage(getNext)
            getEvents()
        }
    }

    const hasMoreData = nextPage !== null ? true : false
    return (
        <>
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
