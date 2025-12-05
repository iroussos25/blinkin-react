import React from 'react'
import blinkin from '../assets/blinkin-Photoroom.png';


const Header = () => {
    return (
    <nav>
      <div className="navbar-left">
         <img src={blinkin} alt="" />
              <h2 className='logo_text'>Blinkin</h2>
    <div className="list__container">
        <ul className='nav__list'>
            <li classname='nav__link'>Home</li>
            <li classname='nav__link'>About</li>
            <li classname='nav__item'>Services</li>
            <li classname='nav__item'>Contact</li>
        </ul>
    </div>
      </div> 
    </nav>
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