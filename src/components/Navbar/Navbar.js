import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuList } from './MenuList'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">
                    {title}
                </NavLink>
            </li>
        );
    });



    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <div className="menu-icon" onClick={handleClick}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars}></FontAwesomeIcon>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
        </nav>
    )


};

export default Navbar