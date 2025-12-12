import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const ModalButton = () => {
  return (
    <div className='fa-bars'>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}

export default ModalButton
