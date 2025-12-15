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
// function openMenu() {
//     document.body.classList += " menu--open";
// }


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
                    
                    <li className="menu__list">
                        <Link to="/" className="menu__link" onClick={closeMenu}>
                        Home
                        </Link>
                         </li>
                    <li className="menu__list">
                        <Link to="/" className="menu__link--nope">
                        About
                        </Link>
                         </li>
                    <li className="menu__list">
                        <Link to="/" className="menu__link--nope">
                        Services
                        </Link>
                         </li>
                    <li className="menu__list">
                        <Link to="/" className="menu__link--nope">
                        Contact
                        </Link>
                         </li>
                </ul>
            </div>
    </div>
    </nav>
        </div>
  )
}

export default Header
//   return (
 
//  <><div className='navbar'>
//           <div className="navbar__left">
             
//           </div>
//         <div className="navbar__right">
//             <ul className='nav__list'>
//             <li className='nav__item'>
//                 <a href="#" className="nav__link link__hover-effect link__hover-effect--red">Home</a>
//             </li>
//             </ul>
//         </div>
//       </div><>
//           </></>
//   )
{/* <ul className='nav__list'>
   <li className="nav__item"><a href="#" className="nav__link link__hover-effect link__hover-effect--red">Home</a></li>
   <li className="nav__item"><a href="#" className="nav__link link__hover-effect link__hover-effect--red">About</a></li>
   <li className="nav__item"><a href="#" className="nav__link link__hover-effect link__hover-effect--red">Services</a></li>
   <li className="nav__item"><a href="#" className="nav__link link__hover-effect link__hover-effect--red">Contact</a></li>
</ul>  */}
//  <div className="nav__container">
//         <div class="logo__container">
//             <img src={logo192} alt="" />
    //             <img className="logo" src="./assets/blinkin-Photoroom.png" alt="">
    //             <h2 class="logo_text">Blinkin</h2>
    //         </div>
    //             <ul class="nav__list">
    //                 
    //             </ul>
    //             <button class="btn__menu" onclick="openMenu()">
    //             <i class="fas fa-bars"></i>
    //             </button>
    //              <div class="menu__backdrop">
    //             <button class="btn__menu btn__menu--close" onclick= "closeMenu()">
    //                 <i class="fas fa-times"></i>
    //             </button>
    //             <ul class="menu__links">
    //                 <li class="menu__list"><a href="#" class="menu__link" onclick= "closeMenu()">Home</a>
    //                 </li>
    //                 <li class="menu__list"><a href="#" class="menu__link" onclick= "closeMenu()">About</a>
    //                 </li>
    //                 <li class="menu__list"><a href="#" class="menu__link no-cursor" onclick= "closeMenu()">Services</a>
    //                 </li>
    //                 <li class="menu__list"><a href="#" class="menu__link no-cursor" onclick= "closeMenu()">Contact</a>
    //                 </li>
                
    //             </ul>
    //     </div>