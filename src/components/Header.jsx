import React from 'react'
import blinkin from '../assets/blinkin-Photoroom.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalButton from './ModalButton';
import { faX } from '@fortawesome/free-solid-svg-icons';

function TextAlert() {
    alert("Not yet implemented")
}
const Header = () => {



function closeMenu() {
    document.body.classList.remove("menu--open");
}
const navigate = useNavigate();

const handleGoBack = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("lastSearchResults");
    sessionStorage.removeItem("lastSearchId");
    navigate('/');
};


    return (
        <div className="nav__background">

    <nav className='nav__container'>
      <div className="navbar__left">
         <img src={blinkin} alt="" className='logo'/>
              <h2 className='logo_text'>Blinkin</h2>
      </div> 
    <div className="list__container">
        <ul className='nav__list'>
            
            <li className='nav__link link__hover-effect link__hover-effect--red' onClick={handleGoBack}>Home</li>
            
            <li className='nav__link link__hover-effect link__hover-effect--red' onClick={TextAlert}>About</li>
            <li className='nav__link link__hover-effect link__hover-effect--red' onClick={TextAlert}>Services</li>
            <li className='nav__link link__hover-effect link__hover-effect--red' onClick={TextAlert}>Contact</li>
        </ul>
         
        <ModalButton />

               <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faX} />
                </button>
                <ul className="menu__links">
                    
                    <li className="menu__list menu__link">
                        <Link to="/" onClick={closeMenu}>
                        Home
                        </Link>
                         </li>
                    <li className="menu__list menu__link--nope">
                        About
                         </li>
                    <li className="menu__list menu__link">
                        Services
                         </li>
                    <li className="menu__list menu__link">
                        Contact
                         </li>
                </ul>
            </div>
    </div>
    </nav>
        </div>
  )
}

export default Header
