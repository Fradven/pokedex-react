import React from 'react';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import Fetch from './component/Fetch';
import Home from './component/Home';
import MoveDex from './component/MoveDex';
import Nav from './component/Nav';
import logo from './img/logo.svg';
import './style.scss'

function App() {

  return (
    <>
        <div className="pokedex-header">
            <h1 className='pokedex-header__title'>Pokédex Online</h1>
            <div className="pokedex-header__logo">
                <img className='pokedex-header__img' src={logo} alt='logo' />
            </div>
        </div>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pokedex' component={Fetch} />
          <Route path='/movedex' component={MoveDex} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
