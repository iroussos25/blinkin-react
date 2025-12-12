import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const ModalButton = () => {

  function openMenu() {
    document.body.classList += " menu--open";
}

  return (
    <div className='fa-bars' onClick={openMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}

export default ModalButton
