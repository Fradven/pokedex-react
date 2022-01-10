import React, {useState, useEffect} from 'react'
import { axios } from './axios.js'
import ListPokemon from './ListPokemon.js';

export default function Fetch() {
    const [events, setEvents] = useState([]);

    const getEvents = async() => {
        const response = await axios.get("pokemon")
        
        if (response && response.data) setEvents(response.data);  
    }
    
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <h2 className="pokemon__title">Upcomming Events!</h2>
            <div className="pokemon">

            {(events.length === 0) ? 'loading' : events.map(event=>
            <ListPokemon name={event.name} 
            />)}
            </div>
        </>
    )
}
