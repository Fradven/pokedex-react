import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [active, setActive] = useState(false)

    const showSidebar = () => setActive(!active)
    return (
        <>
            <div className="nav-button">
                <Link to="#" className='menu-bar' onClick={showSidebar}>

                </Link>
            </div>
            <nav className={active ? 'sidebar' : 'sidebar active'}>
                <ul className="sidebar__link-container">
                    <li className="sidebar__link">
                        
                    </li>
                    <li className="sidebar__link">
                        
                    </li>
                    <li className="sidebar__link">
                        
                    </li>
                </ul>
            </nav>
        </>
        );
}
