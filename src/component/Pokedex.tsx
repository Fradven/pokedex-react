import React from 'react'
import Fetch from './Fetch'
import logo from '../img/logo.svg';

export default function Pokedex() {
    return (
        <>
        <div className="pokedex-header">
            <div className="pokedex-header__logo">
                <img src={logo} />
            </div>
            <h1>Pokédex Online</h1>
        </div>
            <Fetch />
        </>
    )
}
