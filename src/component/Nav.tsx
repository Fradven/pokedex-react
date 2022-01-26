import React, { useState } from 'react';
import { SidebarData } from './javascript/sidebarData';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'


export default function Nav() {
    const [active, setActive] = useState(false)

    const showSidebar = () => setActive(!active)
    return (
        <>
            <div className="nav-button">
                <Link to="#" className='menu-bar'>
                <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={active ? 'sidebar' : 'sidebar active'}>
                <ul className="sidebar__link-container">
                    {
                        SidebarData.map((data, index) => {
                            return (
                                <li key={index} className='sidebar__link'>
                                    <Link to={data.path}>
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
