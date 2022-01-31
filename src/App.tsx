import React, { useState, useEffect } from 'react';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import Fetch from './component/Fetch';
import Home from './component/Home';
import MoveDex from './component/MoveDex';
import Nav from './component/Nav';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import logo from './img/logo.svg';
import './style.scss'
import RandomSelector from './component/RandomSelector';

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = () => window.scrollTo(0, 0)

  return (
    <>
      <Router>
        <div className="header">
          <Nav />
          <div className="pokedex-header">
              <h1 className='pokedex-header__title'><img className='pokedex-header__img' src={logo} alt='pokedex-logo' /></h1>
          </div>
        </div>
        {
          showButton ? <button className="back-to-top" onClick={scrollTop}><MdOutlineKeyboardArrowUp /></button> : null
        }
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
          <Route path='/individual'>
            <RandomSelector/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
