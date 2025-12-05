import React from 'react'


const Modal = () => {
  return (
    <div>
      <button className="btn__menu" >
       {/* onClick="openMenu()" */}
            
                <i className="fas fa-bars"></i>
                </button>
                 <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close">
                     {/* onClick= "closeMenu()"> */}
                    <i className="fas fa-times"></i>
                </button>
                {/* <ul className="menu__links">
                    <li className="menu__list"><a href="#" className="menu__link" onclick= "closeMenu()">Home</a>
                    </li>
                    <li className="menu__list"><a href="#" className="menu__link" onclick= "closeMenu()">About</a>
                    </li>
                    <li className="menu__list"><a href="#" className="menu__link no-cursor" onClick= "closeMenu()">Services</a>
                    </li>
                    <li className="menu__list"><a href="#" className="menu__link no-cursor" onClick= "closeMenu()">Contact</a>
                    </li> */}
                
              {/* </ul> */}
          </div>
      </div>
  )
}

export default Modal
{/* <button className="btn__menu" aria-label="Open menu"><i className="fas fa-bars" /></button> */}