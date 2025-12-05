import React from 'react'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Textbox from '../components/Textbox'
import Searchbox from '../components/Searchbox'
import CoinTossButton from '../components/SearchCoinButton'




const Home = () => {
  return (
    <div>
        <Header />
        <Textbox />
      
      <Modal />
        <Searchbox />
      </div>
      
  )
}

export default Home
