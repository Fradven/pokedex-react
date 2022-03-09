import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SuspenseElement from './component/SuspenseElement';
import Nav from './component/Nav';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import logo from './img/logo.svg';
import './style.scss'

const Fetch = React.lazy(() => import('./pages/InfiniteList'));
const Home = React.lazy(() => import('./pages/Home'));
const MoveDex = React.lazy(() => import('./pages/MoveDex'));
const SearchBar = React.lazy(() => import('./pages/SearchBar'));



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
      <div className="header">
        <Nav />
        <div className="pokedex-header">
          <h1 className='pokedex-header__title'><img className='pokedex-header__img' src={logo} alt='pokedex-logo' /></h1>
        </div>
      </div>
      {
        showButton ? <button className="back-to-top" onClick={scrollTop}><MdOutlineKeyboardArrowUp /></button> : null
      }
      <Routes>
        
        <Route path='/pokedex' element={<SuspenseElement children={<Fetch />} />} />

        <Route path='/movedex' element={<SuspenseElement children={<MoveDex />} />} />

        <Route path='/searchBar' element={<SuspenseElement children={<SearchBar />} />} />

        <Route path='/' element={<SuspenseElement children={<Home />} />} />

      </Routes>



    </>
  );
}

export default App;
