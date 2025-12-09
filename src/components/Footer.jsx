import React from 'react'
import blinkin from '../assets/blinkin-Photoroom.png';


const Footer = () => {
  return (
    <div className="background__footer">

  <div className="nav__container footer">
            <div className="blinkin__foot">

                <div className="logo__container">
                    
                    <img className="logo" src={blinkin} alt="" />
                    <h2 className="logo_text">Blinkin</h2>
                </div>
                
                <div className="footer__copyright">
                    Copyright &COPY; 2025 BLINKIN
                </div>
            </div>
            
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link link__hover-effect
                    link__hover-effect--red">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link link__hover-effect
                        link__hover-effect--red">About</a></li>
                        <li className="nav__item"><a href="#" className="nav__link link__hover-effect
                            link__hover-effect--red">Services</a></li>
                            <li className="nav__item"><a href="#" className="nav__link link__hover-effect
                                link__hover-effect--red">Contact</a></li>
                            </ul>
                        </div>
            
                                </div>
  )
}

export default Footer
