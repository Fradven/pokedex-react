import React, {useState, useEffect} from 'react'
import { axios } from './axios.js'
import ListPokemon from './ListPokemon';


export default function Fetch() {
    const [events, setEvents] = useState([]);

    const getEvents = async() => {
        const response = await axios.get("pokemon")
        console.log(response)
        
        if (response && response.data.results) setEvents(response.data.results);  
    }
    
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <h2 className="pokemon__title">Catch them all!</h2>
            <div className="pokemon">

            {(events.length === 0) ? 'loading' : events.map((event: { name: string; })=>
            <ListPokemon name={event.name} key={event.name} />)}
            </div>
        </>
    )
}
