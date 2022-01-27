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
      <Router>
        <div className="header">
          <Nav />
          <div className="pokedex-header">
              <h1 className='pokedex-header__title'><img className='pokedex-header__img' src={logo} alt='pokedex-logo' /></h1>
          </div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pokedex'>
            <Fetch/>
          </Route>
          <Route path='/movedex'>
            <MoveDex/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
