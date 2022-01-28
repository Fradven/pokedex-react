import React, { useState } from 'react';
import { SidebarData } from './javascript/sidebarData';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import './nav.scss'

export default function Nav() {
    const [active, setActive] = useState(false)
    /* const [query, setQuery] = useState('')

    const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTimeout (function () {
            setQuery(e.target.value)
            console.log(query)
        }, 2000)
    } */

    const showSidebar = () => setActive(!active)
    return (
        <>
            <div className="nav-button">
                <Link to="#" className='menu-bar'>
                <FaBars onClick={showSidebar} />
                </Link>
            </div>

            <nav className={!active ? 'sidebar' : 'sidebar active'}>

            <div className="sidebar__button-ctn">
                <Link to="#" className='sidebar__button'>
                <ImCross onClick={showSidebar} />
                </Link>
            </div>
            
                {/* <div className="pokedex-header__search-ctn">
                    <label htmlFor="search">Search:</label>
                    <input type="text" id='search' onChange={search} />
                </div> */}
                <ul className="sidebar__link-container">
                    {
                        SidebarData.map((data, index) => {
                            return (
                                <li key={index} className='sidebar__link'>
                                    <Link to={data.path} onClick={showSidebar}>
                                        {data.icon}
                                        <span>{data.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
        );
}
