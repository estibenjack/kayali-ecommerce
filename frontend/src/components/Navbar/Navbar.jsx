import React from 'react';
import './Navbar.css';
import logo from '../../assets/kayali_logo1.avif';

// font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={logo} alt="" />
        <input className='search-bar' type="text" placeholder='Search for a product...' />
            <ul className='nav-menu'>
                <li><FontAwesomeIcon icon={faUser} /></li>
                <li><FontAwesomeIcon icon={faHeart} /></li>
                <li><FontAwesomeIcon icon={faBagShopping} /></li>
            </ul>        
    </div>
  )
}

export default Navbar;