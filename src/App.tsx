import React, { useState } from 'react';
import Fetch from './component/Fetch';
import logo from './img/logo.svg';
import './style.scss'

function App() {
    const [query, setQuery] = useState('')

    const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTimeout (function () {
            setQuery(e.target.value)
        }, 2000)
    }

    console.log(query)
  return (
    <>
        <div className="pokedex-header">
            <h1 className='pokedex-header__title'>Pokédex Online</h1>
            <div className="pokedex-header__logo">
                <img className='pokedex-header__img' src={logo} alt='logo' />
            </div>
            <div className="pokedex-header__search-ctn">
                <label htmlFor="search">Search:</label>
                <input type="text" id='search' onChange={search} />
            </div>
        </div>
            <Fetch />
        </>
  );
}

export default App;
