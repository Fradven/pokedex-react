import React from 'react'
import Fetch from './Fetch'

export default function Pokedex() {
    /* const logo = new URL("../img/pokedex.png", import.meta.url); */
    return (
        <>
            {/* <img src="{logo}" alt="" /> */}
            <h1>Pokédex Online</h1>
            <Fetch />
        </>
    )
}
