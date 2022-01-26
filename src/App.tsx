import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Fetch from './component/Fetch';
import logo from './img/logo.svg';
import './style.scss'

function App() {

  return (
    <BrowserRouter>
        <div className="pokedex-header">
            <h1 className='pokedex-header__title'>Pokédex Online</h1>
            <div className="pokedex-header__logo">
                <img className='pokedex-header__img' src={logo} alt='logo' />
            </div>
        </div>
            <Fetch />
    
    </BrowserRouter>
  );
}

export default App;
