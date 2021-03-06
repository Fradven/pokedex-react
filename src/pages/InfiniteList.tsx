import React, {useState} from 'react'
import  axios  from 'axios'
import SuspenseElement from '../component/SuspenseElement';
import ListPokemon from '../component/ListPokemon';
import '../style/ListPokemon.scss'

const InfiniteScroll = React.lazy(() => import ('../component/InfiniteScroll'));


export default function Fetch() {
    const [events, setEvents] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState("")
    const [loading, setLoading] = useState(false)


    //fetch the data from the current page of the api and set the nextPage
    const getEvents = async() => {
        
        setLoading(true)
        const response = await axios.get(currentPage) 
        const data = response.data;
        const next = data.next;
        setNextPage(await next) //add the value of the next page of the api to nextPage
        
        if (response && data.results) setEvents((prev: any)=>[...prev, ...data.results]); //check for response before adding results of the api to setEvents
            
        setLoading(false)
    }
    //set the current page to the new page and use then call getevents to fetch add more data
    const hitBottom = async() => {
        const getNext = (await axios.get(currentPage)).data.next //get the link for the next page
        
            setCurrentPage(getNext) //change the current page link into the next page from getNext
            getEvents() //fetch more data and add them to events
        
        
    }

    const hasMoreData = nextPage !== null ? true : false
    return (
        <>
        <h2 className='page-name'>Pokémon List</h2>
        {/* Load InfinteScroll only when data had been fetched */ }
        <SuspenseElement children={
            <InfiniteScroll
                onBottomHit={hitBottom}
                hasMoreData={hasMoreData}
                isLoading={loading}
                loadOnMount={true}
            >
                {/* If "events" is not empty, use ".map" to go through every result and display the, using "ListPokemon" */}
                {(events.length === 0) ? 'loading' 
                : events.map((event: { name: string; })=>{
                const name = `${event.name}`
                return <ListPokemon name={name} key={event.name} />})}
            </InfiniteScroll>
        }/>
            
        <div className="end-page"></div>
        </>
    )
}
