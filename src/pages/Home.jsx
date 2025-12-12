import React, { useState } from 'react'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Textbox from '../components/Textbox'
import Searchbox from '../components/Searchbox'
import CoinTossButton from '../components/SearchCoinButton'
import Footer from '../components/Footer'
import movie_collage from '../assets/movie_collage.jpg'
import Scrap from '../components/scrap'
import { useLocation } from 'react-router-dom'


const Home = () => {
const location = useLocation();
const [movies, setMovies] = useState(location.state?.searchResults || [])
  return (
    <div className='background'>
    <div className="search__container">
        
        <Textbox />
      
      {/* <Modal /> */}
        <Searchbox />
      
    </div>
      </div>
      
  )
}

export default Home
