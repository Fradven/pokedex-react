import React, {useState, useEffect} from 'react'
import  axios  from 'axios'
import InfiniteScroll from './infiniteScroll/InfiniteScroll';
import ListPokemon from './ListPokemon';
import './ListPokemon.scss'


export default function Fetch() {
    const [events, setEvents] = useState<any >([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState<any>("")
    const [previousPage, setPreviousPage] = useState("")
    //const [loading, setLoading] = useState(false)

    //fetch the data from the current page of the api
    const getEvents = async() => {
        
        const response = await axios.get(currentPage)
        const data = response.data;
        

        //if (response && (await response).data.results) setEvents((await response).data.results);  //verify the response and input the data into "events"
        if (response && data.results) setEvents((prev: any)=>[...prev, ...data.results]);
        //setLoading(false)
    }
    
    useEffect(() => {
        getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //function to input the "nextPage" into the "currentPage"
    const gotoNextPage = async() => {
        const response = await axios.get(currentPage)
        setNextPage(response.data.next);
        console.log("nextPage : " + nextPage)
        
        setCurrentPage(nextPage)
        console.log("currentPage : " + currentPage)
    }
    //function to input the "PreviousPage" into "currentPage"
    const gotoPreviousPage = async() => {
        const response = await axios.get(currentPage)
        const data = response.data;
        const previous = data.previous;
        setPreviousPage(previous)

        setCurrentPage(previousPage)
    }

    const hitBottom = () => {
        console.log('hit bottom')
        gotoNextPage();
        getEvents();
    }
    const hasMoreData = nextPage === null ? true : false
    return (
        <>
            <InfiniteScroll
                hasMoreData={hasMoreData}
                //isLoading={loading}
                onBottomHit={hitBottom}
                loadOnMount={true}
    >
                {/* If "events" is not empty, use ".map" to go through every result and display the, using "ListPokemon" */}
                {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
                <ListPokemon name={event.name} key={event.name} />)}
            </InfiniteScroll>

            <div className='page-btn'>
                { previousPage === null ? null : <button onClick={gotoPreviousPage}>Previous</button> }
                { nextPage === null ? null : <button onClick={gotoNextPage}>Next</button> }            
            </div>
        </>
    )
}
