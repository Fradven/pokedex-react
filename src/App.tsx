import React from 'react';
import Fetch from './component/Fetch';
import logo from './img/logo.svg';
import './style.scss'

function App() {
  return (
    <>
        <div className="pokedex-header">
            <div className="pokedex-header__logo">
                <img className='pokedex-header__img' src={logo} />
            </div>
            <h1 className='pokedex-header__title'>Pokédex Online</h1>
        </div>
            <Fetch />
        </>
  );
}

export default App;
